import { MVP, DELETEMVP } from './constants';

export const mvp = (data) => {
    return {type: MVP.name, data} 
};

export const deleteMvp = (data) => {
    return {type: DELETEMVP.name, data} 
};