import { MVP, DELETEMVP } from '../actions/constants';

const mvp = (state = [], actions) => {
    switch (actions.type) {
        case MVP.name:
            return [...state, actions.data];
        case DELETEMVP.name:
            return [...actions.data];
        default:
            return state;
    }
};

export default mvp;