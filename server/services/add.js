export const addOpportunity = (request, response) => {
    return (request, response) => {
        console.log('add opportunity request', request.body);
        response.status(200).send({name: 'vijay here'});
    }
}