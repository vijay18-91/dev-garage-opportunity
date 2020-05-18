import { MVPDETAILS, RESETMVPDETAILS, POPULATEDATA } from '../actions/constants';

const initialState = {
    row: -1,
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
    type: 'new'
}

const mvpDetails = (state = initialState, actions) => {
    switch (actions.type) {
        case MVPDETAILS.name:
            return {
                ...state,
                [actions.data.name]: actions.data.value,
                id: actions.data.name == 'mvpName' ? actions.data.value : state.id,
            };
        case POPULATEDATA.name:
            return { ...actions.data };
        case RESETMVPDETAILS.name:
            return {
                ...initialState
            }
        default:
            return state;
    }
};

export default mvpDetails;
