import {ACCOUNTINFORMATIONDETAILS, RESETACCOUNTINFORMATIONDETAILS} from './constants';

export const accountInformationDetails = data => {
    return {type: ACCOUNTINFORMATIONDETAILS.name, data}
}

export const resetAccountInformationDetails = () => {
    return {type: RESETACCOUNTINFORMATIONDETAILS.name}
}