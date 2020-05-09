import { MVP, DELETEMVP, RESETMVP } from '../actions/constants';

const initialState = [];

const mvp = (state = initialState, actions) => {
    switch (actions.type) {
        case MVP.name:
            return [...state, actions.data];
        case DELETEMVP.name:
            return [...actions.data];
        case RESETMVP.name:
            return [...initialState];
        default:
            return state;
    }
};

export default mvp;