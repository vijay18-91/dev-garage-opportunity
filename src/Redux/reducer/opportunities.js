import { OPPORTUNITIES } from '../actions/constants';
import data from '../../Json/TableData.json';

const initialState = data;

const opportnities = (state = initialState, actions) => {
    switch (actions.type) {
        case OPPORTUNITIES.name:
            return [
                ...initialState
            ]
        default:
            return state;
    }
}

export default opportnities;