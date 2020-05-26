const _ = require('lodash');

exports.getOpportunities = (request, response, connection) => {

    const accountQueryString = `SELECT * FROM opportunity`;
    const mvpListQueryString = `SELECT * FROM mvp`;

    return connection.query(accountQueryString, (err, rows, fields) => {
        if (err) {
            return response.status(500).send(err);
        } else {
            const accountInformation = rows;
            return connection.query(mvpListQueryString, (err, rows, fields) => {
                if (err) {
                    return response.status(500).send(err);
                } else {
                    const mvps = rows;

                    const consolidatedData = _.map(accountInformation, account => {
                        const relatedMvp =  _.filter(mvps, mvp => account.idopportunity === mvp.idopportunity);
                        return {...account, mvpList: [...relatedMvp]};
                    })

                    return response.status(200).send(consolidatedData)
                }
            })
        }
    })

}