import { SUBMITOPPORTUNITY, LOADING, RESETSUBMITOPPORTUNITY } from '../actions/constants';

const initialState = {
    isSubmitting: false,
    submitOpportunity: ''
}

const submitOpportunity = (state = initialState, actions) => {
    switch(actions.type) {
        case LOADING.name:
            return {
                ...state,
                isSubmitting: true
            }
        case SUBMITOPPORTUNITY.name:
            console.log('in submit', actions.response)
            return {
                isSubmitting: false,
                submitOpportunity: {...actions.response}
            }
        case RESETSUBMITOPPORTUNITY.name:
            return {...initialState}
        default: 
            return state;

    }
}

export default submitOpportunity;