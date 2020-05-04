import {combineReducers} from 'redux';
import BreadCrumb from './breadCrumb';
import MvpDetails from './mvpDetails';
import AccountDetails from './accountDetails';

export default combineReducers({AccountDetails, MvpDetails, BreadCrumb});
