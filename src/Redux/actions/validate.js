import { FORMVALID, RESETFORMVALID } from './constants';

export const formValid = (data) => {
    return {type: FORMVALID.name, data}
};

export const resetFormValid = () => {
    return {type: RESETFORMVALID.name}
};