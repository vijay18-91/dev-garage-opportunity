import React, { Component } from 'react';
import { FormGroup, RadioButtonGroup, RadioButton, TextInput } from 'carbon-components-react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {mvpDetails} from '../../Redux/actions/mvpDetails';

class PeopleCultureOrg extends Component {

    state = {
        
        radioOptions: [
            { name: 'Yes', value: 'yes' },
            { name: 'No', value: 'no' },
            { name: 'Others', value: 'others' }
        ],
        radioOptionsValuePartner: [
            { name: 'Value Partner', value: 'valuePartner' },
            { name: 'Low-cost Provider', value: 'lowCostProvider' },
            { name: 'Others', value: 'others' }
        ]
    }

    onChangeRadio = (event, name) => {
        this.props.mvpDetails({name: name, value: event})
    }

    onTextChange = event => {
        this.props.mvpDetails({name: event.target.name, value: event.target.value})
    };

    render() {
        return (
            <div className="PeopleCultureOrg">
                <div className="PeopleCultureOrg__fields">
                    <div className="PeopleCultureOrg__fieldRow">
                        <div className="PeopleCultureOrg__field">
                            <FormGroup legendText="Is design thinking applied?">
                                <RadioButtonGroup
                                    orientation='vertical'
                                    legend="designThinkingApplied"
                                    defaultSelected=""
                                    name="designThinkingApplied"
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
                                <TextInput
                                    id='designThinkingAppliedOthers'
                                    invalid={false}
                                    invalidText="A value is required"
                                    labelText=""
                                    disabled={this.props.mvpDetails.designThinkingApplied === 'others' ? false : true}
                                    name="designThinkingAppliedOthers"
                                    onChange={event => this.onTextChange(event)} />
                            </FormGroup>
                        </div>
                        <div className="PeopleCultureOrg__field">
                            <FormGroup legendText="Are you practicing or starting to adopt DevOps">
                                <RadioButtonGroup
                                    orientation='vertical'
                                    defaultSelected=""
                                    legend="devOps"
                                    name="devOps"
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
                                <TextInput
                                    id='devOpsOthers'
                                    invalid={false}
                                    invalidText="A value is required"
                                    labelText=""
                                    disabled={this.props.mvpDetails.devOps === 'others' ? false : true}
                                    name="devOpsOthers"
                                    onChange={event => this.onTextChange(event)} />
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
                                <TextInput
                                    id='hypothesisDrivenDevelopmentOthers'
                                    invalid={false}
                                    invalidText="A value is required"
                                    labelText=""
                                    disabled={this.props.mvpDetails.hypothesisDrivenDevelopment === 'others' ? false : true}
                                    name="hypothesisDrivenDevelopmentOthers"
                                    onChange={event => this.onTextChange(event)} />
                            </FormGroup>
                        </div>
                        <div className="PeopleCultureOrg__field">
                            <FormGroup
                                legendText="Are you practicing or starting to adopt Lean Startup"
                            >
                                <RadioButtonGroup orientation='vertical'
                                    legend="Group Legend"
                                    name="leanStartup"
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
                                <TextInput
                                    id='leanStartupOthers'
                                    invalid={false}
                                    invalidText="A value is required"
                                    labelText=""
                                    disabled={this.props.mvpDetails.leanStartup === 'others' ? false : true}
                                    name="leanStartupOthers"
                                    onChange={event => this.onTextChange(event)} />
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
                                <TextInput
                                    id='SREOthers'
                                    invalid={false}
                                    invalidText="A value is required"
                                    labelText=""
                                    disabled={this.props.mvpDetails.SRE === 'others' ? false : true}
                                    name="SREOthers"
                                    onChange={event => this.onTextChange(event)} />
                            </FormGroup>
                        </div>
                        <div className="PeopleCultureOrg__field">
                            <FormGroup
                                legendText="Does the operating model include an investment board managed by IBM and client teams?"
                            >
                                <RadioButtonGroup orientation='vertical'
                                    legend="Group Legend"
                                    name="investmentBoard"
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
                                <TextInput
                                    id='investmentBoardOthers'
                                    invalid={false}
                                    invalidText="A value is required"
                                    labelText=""
                                    disabled={this.props.mvpDetails.investmentBoard === 'others' ? false : true}
                                    name="investmentBoardOthers"
                                    onChange={event => this.onTextChange(event)} />
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
                                <TextInput
                                    id='leveragingTShapeOthers'
                                    invalid={false}
                                    invalidText="A value is required"
                                    labelText=""
                                    disabled={this.props.mvpDetails.leveragingTShape === 'others' ? false : true}
                                    name="leveragingTShapeOthers"
                                    onChange={event => this.onTextChange(event)} />
                            </FormGroup>
                        </div>
                        <div className="PeopleCultureOrg__field">
                            <FormGroup
                                legendText="Does the client perceive IBM as a value partner or low-cost provider?"
                            >
                                <RadioButtonGroup orientation='vertical'
                                    legend="Group Legend"
                                    name="valuePartner"
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
                                <TextInput
                                    id='valuePartnerOthers'
                                    invalid={false}
                                    invalidText="A value is required"
                                    labelText=""
                                    disabled={this.props.mvpDetails.valuePartner === 'others' ? false : true}
                                    name="valuePartnerOthers"
                                    onChange={event => this.onTextChange(event)} />
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    mvpDetails: state.MvpDetails
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            mvpDetails,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(PeopleCultureOrg);