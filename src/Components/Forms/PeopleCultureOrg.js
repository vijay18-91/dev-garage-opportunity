import React, { Component } from 'react';
import { FormGroup, RadioButtonGroup, RadioButton, TextInput } from 'carbon-components-react';
import _ from 'lodash';

class PeopleCultureOrg extends Component {

    state = {
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
        console.log('radio event', event, name);
        this.setState({
            [name]: event
        })
    }

    onTextChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        console.log('in scenarioInformation', this.state);
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
                                    valueSelected={this.state.designThinkingApplied}
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
                                    disabled={this.state.designThinkingApplied === 'others' ? false : true}
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
                                    valueSelected={this.state.devOps}
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
                                    disabled={this.state.devOps === 'others' ? false : true}
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
                                    valueSelected={this.state.hypothesisDrivenDevelopment}
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
                                    disabled={this.state.hypothesisDrivenDevelopment === 'others' ? false : true}
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
                                    valueSelected={this.state.leanStartup}
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
                                    disabled={this.state.leanStartup === 'others' ? false : true}
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
                                    valueSelected={this.state.SRE}
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
                                    disabled={this.state.SRE === 'others' ? false : true}
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
                                    valueSelected={this.state.investmentBoard}
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
                                    disabled={this.state.investmentBoard === 'others' ? false : true}
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
                                    valueSelected={this.state.leveragingTShape}
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
                                    disabled={this.state.leveragingTShape === 'others' ? false : true}
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
                                    valueSelected={this.state.valuePartner}
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
                                    disabled={this.state.valuePartner === 'others' ? false : true}
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

export default PeopleCultureOrg;