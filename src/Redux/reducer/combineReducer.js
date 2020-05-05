import {combineReducers} from 'redux';
import MvpDetails from './mvpDetails';
import AccountDetails from './accountDetails';
import Validate from './validate';
import MVP from './mvp';
import SubmitOpportunity from './submitOpportunity';

export default combineReducers({AccountDetails, MvpDetails, Validate, MVP, SubmitOpportunity});
