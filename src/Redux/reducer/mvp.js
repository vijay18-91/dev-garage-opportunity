import { MVP } from '../actions/constants';

const mvp = (state = [], actions) => {
    switch (actions.type) {
        case MVP.name:
            console.log('data in reducer', [...state, actions.data])
            return [...state, actions.data];
        default:
            return state;
    }
};

export default mvp;