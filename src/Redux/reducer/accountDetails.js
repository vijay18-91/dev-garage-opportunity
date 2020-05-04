import { ACCOUNTINFORMATIONDETAILS } from '../actions/constants';

const initialState = {
    accountName: '',
    sector: '',
    industry: '',
    practice: '',
    deliveredBy: '',
    iot: ''
}

const accountDetails = (state = initialState, actions) => {
    switch (actions.type) {
        case ACCOUNTINFORMATIONDETAILS.name:
            return {
                ...state,
                [actions.data.name]: actions.data.value
            };
        default:
            return state;
    }
};

export default accountDetails;
