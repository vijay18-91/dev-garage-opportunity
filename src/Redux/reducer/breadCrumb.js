import {BREADCRUMB} from '../actions/constants';

const breadCrumb = (state = {"breadcrumb": null}, actions) => {
  switch (actions.type) {
    case BREADCRUMB.name:
      return {
        "breadcrumb": actions.data
      };
    default:
      return state;
  }
};

export default breadCrumb;
