import React, { Component } from 'react';
import { FormGroup, RadioButtonGroup, RadioButton, TextInput, Checkbox } from 'carbon-components-react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMvpDetails, populatePOCData } from '../../Redux/actions/mvpDetails';
import { formValid } from '../../Redux/actions/validate';

class PeopleCultureOrg extends Component {

    state = {
        validate: {
            designThinkingAppliedOthers: false,
            devOpsOthers: false,
            hypothesisDrivenDevelopmentOthers: false,
            leanStartupOthers: false,
            SREOthers: false,
            investmentBoardOthers: false,
            leveragingTShapeOthers: false,
            valuePartnerOthers: false,
            designThinkingApplied: true,
            devOps: true,
            hypothesisDrivenDevelopment: true,
            leanStartup: true,
            SRE: true,
            investmentBoard: true,
            leveragingTShape: true,
            valuePartner: true,
        },
        radioOptions: [
            { name: 'Yes', value: 'yes' },
            { name: 'No', value: 'no' },
            { name: 'Others', value: 'others' }
        ],
        radioOptionsValuePartner: [
            { name: 'Value Partner', value: 'valuePartner' },
            { name: 'Low-cost Provider', value: 'lowCostProvider' },
            { name: 'Others', value: 'others' }
        ],
        fields: [
            'designThinkingApplied',
            'devOps',
            'hypothesisDrivenDevelopment',
            'leanStartup',
            'SRE',
            'investmentBoard',
            'leveragingTShape',
            'valuePartner'
        ],
        defaultFields: [
            'designThinkingApplied',
            'devOps',
            'hypothesisDrivenDevelopment',
            'leanStartup',
            'SRE',
            'investmentBoard',
            'leveragingTShape',
            'valuePartner',
            'designThinkingAppliedOthers',
            'devOpsOthers',
            'hypothesisDrivenDevelopmentOthers',
            'leanStartupOthers',
            'SREOthers',
            'investmentBoardOthers',
            'leveragingTShapeOthers',
            'valuePartnerOthers'
        ],
        defaultData: {},
        mvpDetails: {}
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (JSON.stringify(nextProps.mvpDetails) !== JSON.stringify(prevState.mvpDetails)) {
    //         return { mvpDetails: nextProps.mvpDetails }
    //     }

    //     return null;
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (JSON.stringify(prevProps.mvpDetails) !== JSON.stringify(this.props.mvpDetails)) {
    //         this.setState({mvpDetails: this.props.mvpDetails})
    //         this.isFormValid();
    //     }
    // }

    componentDidMount() {
        this.prepopulateData();
    }

    onBlur = event => {
        let validate = this.state.validate;
        validate[event.target.name || event.target.id] = event.target.value === '' ? true : false;
        this.setState({ validate })
        this.isFormValid();
    };

    onChangeRadio = (event, name) => {
        let validate = this.state.validate,
            fields = this.state.fields,
            mvpDetails = this.state.mvpDetails;

        if (event === 'others') {
            fields.push(name + 'Others');
        } else if ((event !== 'others') && fields.indexOf(name + 'Others') > -1) {
            validate[name + 'Others'] = false;
            _.remove(fields, field => field === name + 'Others')
            mvpDetails[name + 'Others'] = '';
            this.props.updateMvpDetails({ name: name + 'Others', value: '' });
        }

        validate[name] = false;
        this.setState({ validate, fields, mvpDetails });
        this.props.updateMvpDetails({ name: name, value: event });

        this.isFormValid();
    }

    onTextChange = event => {
        const mvpDetails = this.state.mvpDetails;
        mvpDetails[event.target.name] = event.target.value;
        this.setState({ mvpDetails });
        this.props.updateMvpDetails({ name: event.target.name, value: event.target.value })
    };

    isFormValid = () => {
        const isValid = _.every(this.state.validate, name => name === false),
            isFormFilled = _.every(this.state.fields, field => this.props.mvpDetails[field] !== '');

            if (isValid && isFormFilled) {
            this.props.formValid({ name: 'peopleCultureOrganisationValid', value: true });
        } else {
            this.props.formValid({ name: 'peopleCultureOrganisationValid', value: false });
        }
    }

    onCheckBoxClick = event => {
        const mvpList = this.props.mvpList[0],
            defaultFields = this.state.defaultFields,
            mvpDetailsState = this.state.mvpDetails,
            validate = this.state.validate,
            mvpDetails = this.props.mvpDetails;

        _.forEach(defaultFields, field => {
            mvpDetails[field] = mvpList[field];
            mvpDetailsState[field] = mvpList[field];
            validate[field] = false;
        });

        this.setState({ mvpDetails: mvpDetailsState, validate });
        this.props.populatePOCData(mvpDetails);

    }

    prepopulateData = () => {
        const defaultFields = this.state.defaultFields,
            mvpDetailsState = this.state.mvpDetails,
            validate = this.state.validate,
            mvpDetails = this.props.mvpDetails;

        _.forEach(defaultFields, field => {
            if (mvpDetails[field] === 'others') {
                validate[field] = false;
                validate[field + 'Others'] = mvpDetails[field] !== "" ? false : true;
                mvpDetailsState[field] = mvpDetails[field];
            } else if (mvpDetails[field] !== '') {
                validate[field] = false;
                mvpDetailsState[field] = mvpDetails[field];
            }
        });

        this.setState({ mvpDetails: mvpDetailsState, validate });
    }

    render() {
        this.isFormValid();
        let checkBox = '';
        if (this.props.mvpList.length > 0) {
            checkBox = (
                <div className="PeopleCultureOrg__checkbox">
                    <Checkbox onClick={this.onCheckBoxClick} labelText="Pre-fill information for all MVP's" id="checkbox" />
                </div>
            )
        }

        return (
            <div className="PeopleCultureOrg">
                <div className="PeopleCultureOrg__fields">
                    {checkBox}
                    <div className="PeopleCultureOrg__fieldRow">
                        <div className="PeopleCultureOrg__field">
                            <FormGroup legendText="Is design thinking applied?">
                                <RadioButtonGroup
                                    orientation='vertical'
                                    legend="designThinkingApplied"
                                    name="designThinkingApplied"
                                    defaultSelected={this.state.mvpDetails.designThinkingApplied}
                                    valueSelected={this.props.mvpDetails.designThinkingApplied}
                                    onChange={event => this.onChangeRadio(event, "designThinkingApplied")}
                                >
                                    {_.map(this.state.radioOptions, option => {
                                        return (
                                            <RadioButton
                                                labelText={option.name}
                                                value={option.value}
                                                key={option.value}
                                            />)
                                    })}
                                </RadioButtonGroup>
                                <div className="PeopleCultureOrg__radioTextField">
                                    <TextInput
                                        id='designThinkingAppliedOthers'
                                        invalid={this.state.validate.designThinkingAppliedOthers}
                                        onBlur={this.onBlur}
                                        invalidText="A value is required"
                                        labelText=""
                                        defaultValue={this.state.mvpDetails.designThinkingAppliedOthers}
                                        disabled={this.props.mvpDetails.designThinkingApplied === 'others' ? false : true}
                                        name="designThinkingAppliedOthers"
                                        onChange={event => this.onTextChange(event)} />
                                </div>
                            </FormGroup>
                        </div>
                        <div className="PeopleCultureOrg__field">
                            <FormGroup legendText="Are you practicing or starting to adopt DevOps">
                                <RadioButtonGroup
                                    orientation='vertical'
                                    legend="devOps"
                                    name="devOps"
                                    defaultSelected={this.state.mvpDetails.devOps}
                                    valueSelected={this.props.mvpDetails.devOps}
                                    onChange={event => this.onChangeRadio(event, "devOps")}
                                >
                                    {_.map(this.state.radioOptions, option => {
                                        return (
                                            <RadioButton
                                                labelText={option.name}
                                                value={option.value}
                                                key={option.value}
                                            />)
                                    })}
                                </RadioButtonGroup>
                                <div className="PeopleCultureOrg__radioTextField">
                                    <TextInput
                                        id='devOpsOthers'
                                        invalid={this.state.validate.devOpsOthers}
                                        onBlur={this.onBlur}
                                        invalidText="A value is required"
                                        labelText=""
                                        defaultValue={this.state.mvpDetails.devOpsOthers}
                                        disabled={this.props.mvpDetails.devOps === 'others' ? false : true}
                                        name="devOpsOthers"
                                        onChange={event => this.onTextChange(event)} />
                                </div>
                            </FormGroup>
                        </div>
                    </div>
                    <div className="PeopleCultureOrg__fieldRow">
                        <div className="PeopleCultureOrg__field">
                            <FormGroup
                                legendText="Are you practicing hypothesis-driven development?"
                            >
                                <RadioButtonGroup orientation='vertical'
                                    legend="Group Legend"
                                    name="hypothesisDrivenDevelopment"
                                    defaultSelected={this.state.mvpDetails.hypothesisDrivenDevelopment}
                                    valueSelected={this.props.mvpDetails.hypothesisDrivenDevelopment}
                                    onChange={event => this.onChangeRadio(event, "hypothesisDrivenDevelopment")}
                                >
                                    {_.map(this.state.radioOptions, option => {
                                        return (
                                            <RadioButton
                                                labelText={option.name}
                                                value={option.value}
                                                key={option.value}
                                            />)
                                    })}
                                </RadioButtonGroup>
                                <div className="PeopleCultureOrg__radioTextField">
                                    <TextInput
                                        id='hypothesisDrivenDevelopmentOthers'
                                        invalid={this.state.validate.hypothesisDrivenDevelopmentOthers}
                                        onBlur={this.onBlur}
                                        invalidText="A value is required"
                                        labelText=""
                                        defaultValue={this.state.mvpDetails.hypothesisDrivenDevelopmentOthers}
                                        disabled={this.props.mvpDetails.hypothesisDrivenDevelopment === 'others' ? false : true}
                                        name="hypothesisDrivenDevelopmentOthers"
                                        onChange={event => this.onTextChange(event)} />
                                </div>
                            </FormGroup>
                        </div>
                        <div className="PeopleCultureOrg__field">
                            <FormGroup
                                legendText="Are you practicing or starting to adopt Lean Startup"
                            >
                                <RadioButtonGroup orientation='vertical'
                                    legend="Group Legend"
                                    name="leanStartup"
                                    defaultSelected={this.state.mvpDetails.leanStartup}
                                    valueSelected={this.props.mvpDetails.leanStartup}
                                    onChange={event => this.onChangeRadio(event, "leanStartup")}
                                >
                                    {_.map(this.state.radioOptions, option => {
                                        return (
                                            <RadioButton
                                                labelText={option.name}
                                                value={option.value}
                                                key={option.value}
                                            />)
                                    })}
                                </RadioButtonGroup>
                                <div className="PeopleCultureOrg__radioTextField">
                                    <TextInput
                                        id='leanStartupOthers'
                                        invalid={this.state.validate.leanStartupOthers}
                                        onBlur={this.onBlur}
                                        invalidText="A value is required"
                                        labelText=""
                                        defaultValue={this.state.mvpDetails.leanStartupOthers}
                                        disabled={this.props.mvpDetails.leanStartup === 'others' ? false : true}
                                        name="leanStartupOthers"
                                        onChange={event => this.onTextChange(event)} />
                                </div>
                            </FormGroup>
                        </div>
                    </div>
                    <div className="PeopleCultureOrg__fieldRow">
                        <div className="PeopleCultureOrg__field">
                            <FormGroup
                                legendText="Are you practicing or starting to adopt  Site Reliability Engineering (SRE)"
                            >
                                <RadioButtonGroup orientation='vertical'
                                    legend="Group Legend"
                                    name="SRE"
                                    defaultSelected={this.state.mvpDetails.SRE}
                                    valueSelected={this.props.mvpDetails.SRE}
                                    onChange={event => this.onChangeRadio(event, "SRE")}
                                >
                                    {_.map(this.state.radioOptions, option => {
                                        return (
                                            <RadioButton
                                                labelText={option.name}
                                                value={option.value}
                                                key={option.value}
                                            />)
                                    })}
                                </RadioButtonGroup>
                                <div className="PeopleCultureOrg__radioTextField">
                                    <TextInput
                                        id='SREOthers'
                                        invalid={this.state.validate.SREOthers}
                                        onBlur={this.onBlur}
                                        invalidText="A value is required"
                                        labelText=""
                                        defaultValue={this.state.mvpDetails.SREOthers}
                                        disabled={this.props.mvpDetails.SRE === 'others' ? false : true}
                                        name="SREOthers"
                                        onChange={event => this.onTextChange(event)} />
                                </div>
                            </FormGroup>
                        </div>
                        <div className="PeopleCultureOrg__field">
                            <FormGroup
                                legendText="Does the operating model include an investment board managed by IBM and client teams?"
                            >
                                <RadioButtonGroup orientation='vertical'
                                    legend="Group Legend"
                                    name="investmentBoard"
                                    defaultSelected={this.state.mvpDetails.investmentBoard}
                                    valueSelected={this.props.mvpDetails.investmentBoard}
                                    onChange={event => this.onChangeRadio(event, "investmentBoard")}
                                >
                                    {_.map(this.state.radioOptions, option => {
                                        return (
                                            <RadioButton
                                                labelText={option.name}
                                                value={option.value}
                                                key={option.value}
                                            />)
                                    })}
                                </RadioButtonGroup>
                                <div className="PeopleCultureOrg__radioTextField">
                                    <TextInput
                                        id='investmentBoardOthers'
                                        invalid={this.state.validate.investmentBoardOthers}
                                        onBlur={this.onBlur}
                                        invalidText="A value is required"
                                        labelText=""
                                        defaultValue={this.state.mvpDetails.investmentBoardOthers}
                                        disabled={this.props.mvpDetails.investmentBoard === 'others' ? false : true}
                                        name="investmentBoardOthers"
                                        onChange={event => this.onTextChange(event)} />
                                </div>
                            </FormGroup>
                        </div>
                    </div>
                    <div className="PeopleCultureOrg__fieldRow">
                        <div className="PeopleCultureOrg__field">
                            <FormGroup
                                legendText="Are you leveraging T-Shape cross functional skill sets?"
                            >
                                <RadioButtonGroup orientation='vertical'
                                    legend="Group Legend"
                                    name="leveragingTShape"
                                    defaultSelected={this.state.mvpDetails.leveragingTShape}
                                    valueSelected={this.props.mvpDetails.leveragingTShape}
                                    onChange={event => this.onChangeRadio(event, "leveragingTShape")}
                                >
                                    {_.map(this.state.radioOptions, option => {
                                        return (
                                            <RadioButton
                                                labelText={option.name}
                                                value={option.value}
                                                key={option.value}
                                            />)
                                    })}
                                </RadioButtonGroup>
                                <div className="PeopleCultureOrg__radioTextField">
                                    <TextInput
                                        id='leveragingTShapeOthers'
                                        invalid={this.state.validate.leveragingTShapeOthers}
                                        onBlur={this.onBlur}
                                        invalidText="A value is required"
                                        labelText=""
                                        defaultValue={this.state.mvpDetails.leveragingTShapeOthers}
                                        disabled={this.props.mvpDetails.leveragingTShape === 'others' ? false : true}
                                        name="leveragingTShapeOthers"
                                        onChange={event => this.onTextChange(event)} />
                                </div>
                            </FormGroup>
                        </div>
                        <div className="PeopleCultureOrg__field">
                            <FormGroup
                                legendText="Does the client perceive IBM as a value partner or low-cost provider?"
                            >
                                <RadioButtonGroup orientation='vertical'
                                    legend="Group Legend"
                                    name="valuePartner"
                                    defaultSelected={this.state.mvpDetails.valuePartner}
                                    valueSelected={this.props.mvpDetails.valuePartner}
                                    onChange={event => this.onChangeRadio(event, "valuePartner")}
                                >
                                    {_.map(this.state.radioOptionsValuePartner, option => {
                                        return (
                                            <RadioButton
                                                labelText={option.name}
                                                value={option.value}
                                                key={option.value}
                                            />)
                                    })}
                                </RadioButtonGroup>
                                <div className="PeopleCultureOrg__radioTextField">
                                    <TextInput
                                        id='valuePartnerOthers'
                                        invalid={this.state.validate.valuePartnerOthers}
                                        onBlur={this.onBlur}
                                        invalidText="A value is required"
                                        labelText=""
                                        defaultValue={this.state.mvpDetails.valuePartnerOthers}
                                        disabled={this.props.mvpDetails.valuePartner === 'others' ? false : true}
                                        name="valuePartnerOthers"
                                        onChange={event => this.onTextChange(event)} />
                                </div>
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    mvpDetails: state.MvpDetails,
    mvpList: state.MVP
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            updateMvpDetails,
            formValid,
            populatePOCData
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(PeopleCultureOrg);