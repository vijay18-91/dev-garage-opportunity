import {ACCOUNTINFORMATIONDATA} from './constants';
import Axios from 'axios';

export const accountInformationData = props => {
    const request = Axios.get('/getAccountDetails');

    return dispatch => {
        request.then(res => {
            dispatch({type: ACCOUNTINFORMATIONDATA.name, data: res.data});
        })
    }
}