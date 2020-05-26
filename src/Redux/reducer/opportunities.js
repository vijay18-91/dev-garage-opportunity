import { OPPORTUNITIES } from '../actions/constants';
import data from '../../Json/TableData.json';

const initialState = [];

const opportnities = (state = initialState, actions) => {
    switch (actions.type) {
        case OPPORTUNITIES.name:
            return [
                ...actions.response.data
            ]
        default:
            return state;
    }
}

export default opportnities;