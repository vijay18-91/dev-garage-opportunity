import {UPLOADEXCEL} from '../actions/constants';

const initialState = [];

const uploadExcel = (state = initialState, actions) => {
    switch(actions.type) {
        case UPLOADEXCEL.name:
            console.log('from reducer', actions.response);
            return {
                ...actions.response
            }
        default:
            return state;
    }
}

export default uploadExcel;