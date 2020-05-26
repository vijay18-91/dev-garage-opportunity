import { MVP, DELETEMVP, RESETMVP } from '../actions/constants';
import _ from 'lodash'

const initialState = [];

const mvp = (state = initialState, actions) => {
    switch (actions.type) {
        case MVP.name:
            if (actions.data.row === state.length) {
                return [...state, actions.data]
            } else {
                const data = _.map(state, data => {
                    if (data.row == actions.data.row) {
                        return actions.data
                    } else {
                        return data;
                    }
                })
                return [...data];
            }
        case DELETEMVP.name:
            return [...actions.data];
        case RESETMVP.name:
            return [...initialState];
        default:
            return state;
    }
};

export default mvp;