import { OPPORTUNITIES } from './constants';
import Axios from 'axios';

export const opportunities = props => {
    
    const request = Axios.get('/getOpportunities');
    return dispatch => {
        request.then(res => {
            dispatch({type: OPPORTUNITIES.name, response: res})
        })
    }
}