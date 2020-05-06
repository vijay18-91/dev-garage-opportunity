import { MVPDETAILS, RESETMVPDETAILS, POPULATEPOCDATA } from '../actions/constants';

const initialState = {
    id: '',
    mvpName: '',
    emergingTechnologies: '',
    weeksRequired: '',
    parallelSquads: '',
    transformationType: '',
    transformationTypeOthers: '',
    isMVPHardned: '',
    isMVPHardnedOthers: '',
    isMVPReliability: '',
    isMVPReliabilityOthers: '',
    isMVPMonitored: '',
    isMVPMonitoredOthers: '',
    isMVPDevopsed: '',
    isMVPDevopsedOthers: '',
    mvpStage: '',
    geoFTEs: 0,
    cicFTEs: 0,
    cicOffshoreFTEs: 0,
    designThinkingApplied: '',
    devOps: '',
    hypothesisDrivenDevelopment: '',
    leanStartup: '',
    SRE: '',
    investmentBoard: '',
    leveragingTShape: '',
    valuePartner: '',
    designThinkingAppliedOthers: '',
    devOpsOthers: '',
    hypothesisDrivenDevelopmentOthers: '',
    leanStartupOthers: '',
    SREOthers: '',
    investmentBoardOthers: '',
    leveragingTShapeOthers: '',
    valuePartnerOthers: '',
}

const mvpDetails = (state = initialState, actions) => {
    switch (actions.type) {
        case MVPDETAILS.name:
            return {
                ...state,
                [actions.data.name]: actions.data.value,
                id: actions.data.name == 'mvpName' ? actions.data.value : state.id,
            };
        case POPULATEPOCDATA.name:
            return {...actions.data};
        case RESETMVPDETAILS.name:
            return {
                ...initialState
            }
        default:
            return state;
    }
};

export default mvpDetails;
