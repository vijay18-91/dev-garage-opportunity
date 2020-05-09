import { SUBMITOPPORTUNITY, LOADING, RESETSUBMITOPPORTUNITY } from './constants';

export const submitOpportunity = (data) => {

    return dispatch => {
        // Async action is starting...
        dispatch({type: LOADING.name});
        const response = {status: 200};
        setTimeout(() => dispatch({type: SUBMITOPPORTUNITY.name, response}), 5000);

      }
}

export const resetSubmitOpportunity = () => {
  return {type: RESETSUBMITOPPORTUNITY.name}
}