const excelToJson = require('convert-excel-to-json');
const _ = require('lodash');
const xlsx = require('node-xlsx').default;

exports.upload = (req, res, connection) => {
    // let workSheetsFromBuffer = xlsx.parse(req.file.buffer);
    // let set  = new Set( workSheetsFromBuffer[0].data.map(JSON.stringify));
    // let arr2 = Array.from(set).map(JSON.parse);

    // arr2 = _.sortBy(arr2);

    const checkHeader = excelToJson({
        source: req.file.buffer
    });

    if (checkHeader.Sheet1[0].length === 3 && (checkHeader.Sheet1[0].A !== 'Global_Client_Name' || checkHeader.Sheet1[0].B !== 'Account_Sector' || checkHeader.Sheet1[0].C !== 'Account_Industry')) {
        return (res.status(400).send('One or more of Global_Client_Name or Account_Sector or Account_Industry columns are missing in excel'));
    }

    let result = excelToJson({
        source: req.file.buffer,
        header: {
            rows: 1
        },
        columnToKey: {
            'A': '{{A1}}',
            'B': '{{B1}}',
            'C': '{{C1}}'
        }
    });

    //find unique data
    let set = new Set(result.Sheet1.map(JSON.stringify));
    let arr2 = Array.from(set).map(JSON.parse);

    //sort by gcn
    const sortedData = _.orderBy(arr2, ['Global_Client_Name']);

    // process
    const excelData = sortedData;

    const queryString = "SELECT * FROM accountInformation;";
    return connection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log('err in db', err);
            return (res.status(404).send(false));
        } else {
            const comparer = (otherArray) => {
                return function (current) {
                    return otherArray.filter(function (other) {
                        return other.Global_Client_Name === current.Global_Client_Name &&
                            other.Account_Sector === current.Account_Sector &&
                            other.Account_Industry === current.Account_Industry
                    }).length === 0;
                }
            }

            var onlyInExcelData = excelData.filter(comparer(rows));
            var onlyInRows = rows.filter(comparer(excelData));

            //combined data of excel and db
            result = onlyInExcelData.concat(onlyInRows);

            console.log('onlyInExcelData', onlyInExcelData.length);

            if (onlyInExcelData.length === 0) {
                return (res.status(200).send('The records present in excel are already present in DB'));
            }
            
            const addAccountQuery = `INSERT INTO accountInformation (Global_Client_Name,Account_Sector,Account_Industry) VALUES ?`;
            const accountValues = _.map(onlyInExcelData, record => {
                if (record.Global_Client_Name !== '' && record.Account_Sector !== '' && record.Account_Industry !== '') {
                    return [record.Global_Client_Name,record.Account_Sector,record.Account_Industry]
                }
            });

            console.log('accountValues', onlyInExcelData, onlyInRows);

            return connection.query(addAccountQuery, [accountValues], (err, rows, fields) => {
                if (err) {
                    return (res.status(500).send(err));
                } else {
                    return (res.status(200).send({rows, fields}));
                }
            })
        }
    })
}