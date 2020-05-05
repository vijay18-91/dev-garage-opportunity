import { MVPDETAILS, RESETMVPDETAILS, POPULATEPOCDATA } from './constants';

export const updateMvpDetails = (data) => {
    return {type: MVPDETAILS.name, data}
};

export const resetMvpDetails = (data) => {
    return {type: RESETMVPDETAILS.name}
};

export const populatePOCData = (data) => {
    console.log('data in action', data);
    return {type: POPULATEPOCDATA.name, data}
};