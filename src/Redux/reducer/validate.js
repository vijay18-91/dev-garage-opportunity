import { FORMVALID, RESETFORMVALID } from '../actions/constants';

const initialState = {
    scenarioInformationValid: false,
    teamStructureValid: false,
    peopleCultureOrganisationValid: false
}

const mvpDetails = (state = initialState, actions) => {
    switch (actions.type) {
        case FORMVALID.name:
            return {
                ...state,
                [actions.data.name]: actions.data.value
            };

        case RESETFORMVALID.name:
            return initialState;

        default:
            return state;
    }
};

export default mvpDetails;
