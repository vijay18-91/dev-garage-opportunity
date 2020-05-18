exports.addOpportunity = (request, response) => {
    console.log('in add function', request, response);
    return (request, response) => {
        console.log('add opportunity request', request.body);
        response.status(200).send({name: 'vijay here'});
    }
}