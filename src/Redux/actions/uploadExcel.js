import { UPLOADEXCEL } from './constants';
import axios from 'axios';

export const uploadExcel = props => {

  let form = new FormData();
  form.append('fileName',props.file);

    return dispatch => {
        // Async action is starting...
        console.log('in action', form);
        const config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
        const request = axios.post('/uploadExcel', form, config);
    
        return dispatch => {
          request.then(res => {
            dispatch({ type: UPLOADEXCEL.name, response: res })
          })
          .catch(err => {
          console.log(err)
        });
        }
      }
}

export default uploadExcel;