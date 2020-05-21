const _ = require('lodash');

exports.addOpportunity = (request, response, connection) => {

    const accountInformationDetails = request.body.accountInformationDetails,
        mvpList = request.body.mvpList;
    const accountQueryString = `INSERT INTO 
            opportunity(accountName, sector, industry, practice, deliveredBy, iot, growthPlatform, serviceLine) 
            VALUES("${accountInformationDetails.accountName}","${accountInformationDetails.sector}","${accountInformationDetails.industry}","${accountInformationDetails.practice}","${accountInformationDetails.deliverdBy}","${accountInformationDetails.iot}","${accountInformationDetails.growthPlatform}","${accountInformationDetails.serviceLine}");`;

    return connection.query(accountQueryString, (err, rows, fields) => {
        if (err) {
            return response.status(400).send(false);
        } else {
            const mvpQueryString = `INSERT INTO 
                mvp(
                    mvpName,
                    emergingTechnologies,
                    weeksRequired,
                    parallelSquads,
                    transformationType,
                    isMVPHardned,
                    isMVPReliability,
                    isMVPMonitored,
                    isMVPDevopsed,
                    mvpStage,
                    geoFTEs,
                    cicFTEs,
                    cicOffshoreFTEs,
                    designThinkingApplied,
                    devOps,
                    hypothesisDrivenDevelopment,
                    leanStartup,
                    SRE,
                    investmentBoard,
                    leveragingTShape,
                    valuePartner,
                    idopportunity 
                ) 
                VALUES ?`;

            const insertedRowId = rows.insertId;
            const mvpValues = _.map(mvpList, mvp => {
                const transformationType = mvp.transformationType === 'others' ? mvp.transformationTypeOthers : mvp.transformationType;
                const isMVPHardned = mvp.isMVPHardned === 'others' ? mvp.isMVPHardnedOthers : mvp.isMVPHardned;
                const isMVPReliability = mvp.isMVPReliability === 'others' ? mvp.isMVPReliabilityOthers : mvp.isMVPReliability;
                const isMVPMonitored = mvp.isMVPMonitored === 'others' ? mvp.isMVPMonitoredOthers : mvp.isMVPMonitored;
                const isMVPDevopsed = mvp.isMVPDevopsed === 'others' ? mvp.isMVPDevopsedOthers : mvp.isMVPDevopsed;

                const designThinkingApplied = mvp.designThinkingApplied === 'others' ? mvp.designThinkingAppliedOthers : mvp.designThinkingApplied;
                const devOps = mvp.devOps === 'others' ? mvp.devOpsOthers : mvp.devOps;
                const hypothesisDrivenDevelopment = mvp.hypothesisDrivenDevelopment === 'others' ? mvp.hypothesisDrivenDevelopmentOthers : mvp.hypothesisDrivenDevelopment;
                const leanStartup = mvp.leanStartup === 'others' ? mvp.leanStartupOthers : mvp.leanStartup;
                const SRE = mvp.SRE === 'others' ? mvp.SREOthers : mvp.SRE;
                const investmentBoard = mvp.investmentBoard === 'others' ? mvp.investmentBoardOthers : mvp.investmentBoard;
                const leveragingTShape = mvp.leveragingTShape === 'others' ? mvp.leveragingTShapeOthers : mvp.leveragingTShape;
                const valuePartner = mvp.valuePartner === 'others' ? mvp.valuePartnerOthers : mvp.valuePartner;
                return [
                    mvp.mvpName,
                    mvp.emergingTechnologies,
                    mvp.weeksRequired,
                    mvp.parallelSquads,
                    transformationType,
                    isMVPHardned,
                    isMVPReliability,
                    isMVPMonitored,
                    isMVPDevopsed,
                    mvp.mvpStage,
                    mvp.geoFTEs,
                    mvp.cicFTEs,
                    mvp.cicOffshoreFTEs,
                    designThinkingApplied,
                    devOps,
                    hypothesisDrivenDevelopment,
                    leanStartup,
                    SRE,
                    investmentBoard,
                    leveragingTShape,
                    valuePartner,
                    insertedRowId
                ]
            });

            return connection.query(mvpQueryString, [mvpValues], (err, rows, fields) => {
                if (err) {
                    console.log('error in adding the mvps', err);
                    // const deleteOpportunity = `DELETE FROM garageDB.opportunity WHERE (idopportunity = ${insertedRowId});`;
                    // return connection.query(deleteOpportunity, (err, rows, fields))
                    return response.status(400).send(false);
                } else {
                    response.status(200).send({rows, fields});
                }
            })
        }
    })
}