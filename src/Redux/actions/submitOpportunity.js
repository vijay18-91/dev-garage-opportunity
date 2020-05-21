import { SUBMITOPPORTUNITY, LOADING, RESETSUBMITOPPORTUNITY } from './constants';
import axios from 'axios';

export const submitOpportunity = (data) => {

  debugger
  // Async action is starting...
  const request = axios.post('/addOpportunity', data);

  return dispatch => {
    dispatch({ type: LOADING.name });
    console.log('in action of OUTSIDE')
    request.then(res => {
      console.log('in action of submit', res)
      dispatch({ type: SUBMITOPPORTUNITY.name, response: res })
    })
      .catch(err => {
        console.log(err)
      });
  }
}

export const resetSubmitOpportunity = () => {
  return { type: RESETSUBMITOPPORTUNITY.name }
}