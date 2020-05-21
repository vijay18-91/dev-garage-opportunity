import { combineReducers } from 'redux';
import MvpDetails from './mvpDetails';
import AccountDetails from './accountDetails';
import Validate from './validate';
import MVP from './mvp';
import SubmitOpportunity from './submitOpportunity';
import Opportunities from './opportunities';
import UploadExcel from './uploadExcel';
import AccountInformationData from './accountInformationData';

export default combineReducers(
    { 
        AccountDetails, 
        MvpDetails, 
        Validate, 
        MVP, 
        SubmitOpportunity, 
        Opportunities, 
        UploadExcel,
        AccountInformationData
    }
);
