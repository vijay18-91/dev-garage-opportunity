import {BREADCRUMB} from './constants';

export const breadCrumbDetails = data => {
    return {type: BREADCRUMB.name, data: data};
}