import {ACCOUNTINFORMATIONDATA} from '../actions/constants';
import _ from 'lodash';
import React from 'react';

const initialState = {
    accountNameList: [],
    accountList: []
}

const accountInformationData = (state = initialState, actions) => {
    switch (actions.type) {
        case ACCOUNTINFORMATIONDATA.name:
            const accountNameList = _.map(actions.data, data => {
                // return { name: data.Global_Client_Name, value: data.Global_Client_Name }
                return (<option key={data.Global_Client_Name} value={data.Global_Client_Name}/>)
            })
            return {
                ...state,
                accountNameList: accountNameList,
                accountList: [...actions.data],
            }
        default:
            return state;
    }
}

export default accountInformationData;
