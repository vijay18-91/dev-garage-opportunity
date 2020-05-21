exports.accountDetails = (req, res, connection) => {

    const queryString = "SELECT * FROM accountInformation;";
    return connection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log('err in db', err);
            return (res.status(404).send(false));
        } else {
            return res.json(rows);
        }
    })

}