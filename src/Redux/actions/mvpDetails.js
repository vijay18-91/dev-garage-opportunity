import { MVPDETAILS, RESETMVPDETAILS, POPULATEDATA } from './constants';

export const updateMvpDetails = (data) => {
    return {type: MVPDETAILS.name, data};
};

export const resetMvpDetails = (data) => {
    return {type: RESETMVPDETAILS.name};
};

export const populateData = (data) => {
    return {type: POPULATEDATA.name, data};
};