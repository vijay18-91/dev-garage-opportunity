import React, { Component } from 'react';
import { TextInput, FormGroup, RadioButtonGroup, RadioButton, Select, SelectItem } from 'carbon-components-react';
import _ from 'lodash';

class ScenarioInformation extends Component {

    state = {
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
        radioOptions: [
            { name: 'Yes', value: 'yes' },
            { name: 'No', value: 'no' },
            { name: 'Others', value: 'others' }
        ],
        mvpTransformation: [
            { name: 'Scaled', value: 'sacled' },
            { name: 'Enhanced', value: 'enhanced' },
            { name: 'Part of larger transformation', value: 'largerTransformation' },
            { name: 'Others', value: 'others' },
        ],
        selectOptions: [
            { name: "Option1", value: "option1" },
            { name: "Option2", value: "option2" },
            { name: "Option3", value: "option3" }
        ]
    }

    onTextChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    onChangeSelect = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    onChangeRadio = (event, name) => {
        console.log('radio event', event, name);
        this.setState({
            [name]: event
        })
    }

    render() {
        // console.log('in scenarioInformation', this.state);
        return (
            <div className="scenarioInformation">
                <div className="scenarioInformation__fields">
                    <div className="scenarioInformation__inputField">
                        <TextInput
                            id='mvpName'
                            invalid={false}
                            invalidText="A value is required"
                            labelText="MVP Name"
                            placeholder="Placeholder text"
                            name="mvpName"
                            defaultValue={this.state.mvpName}
                            onChange={event => this.onTextChange(event)}
                            onKeyPress={this.onKeyPress}
                        />
                    </div>
                    <div className="scenarioInformation__inputField">
                        <TextInput
                            id='emergingTechnologies'
                            invalid={false}
                            invalidText="A value is required"
                            labelText="What are the emerging technologies that are being used in this MVPs?"
                            placeholder="Placeholder text"
                            name="emergingTechnologies"
                            defaultValue={this.state.emergingTechnologies}
                            onChange={event => this.onTextChange(event)}
                            onKeyPress={this.onKeyPress}
                        />
                    </div>
                    <div className="scenarioInformation__inputField">
                        <TextInput
                            id='weeksRequired'
                            invalid={false}
                            invalidText="A value is required"
                            labelText="How long does it take to deliver this MVP?(in weeks)"
                            placeholder="Placeholder text"
                            name="weeksRequired"
                            defaultValue={this.state.weeksRequired}
                            onChange={event => this.onTextChange(event)}
                            onKeyPress={this.onKeyPress}
                        />
                    </div>
                    <div className="scenarioInformation__inputField">
                        <TextInput
                            id='parallelSquads'
                            invalid={false}
                            invalidText="A value is required"
                            labelText="How many squads are running in parallel?"
                            placeholder="Placeholder text"
                            name="parallelSquads"
                            defaultValue={this.state.parallelSquads}
                            onChange={event => this.onTextChange(event)}
                            onKeyPress={this.onKeyPress}
                        />
                    </div>
                    <div className="scenarioInformation__radioField">
                        <FormGroup legendText="Is this MVP being scalled, or enhanced or a part of a large transformation?">
                            <RadioButtonGroup
                                orientation='vertical'
                                legend="transformationType"
                                defaultSelected=""
                                name="transformationType"
                                valueSelected={this.state.transformationType}
                                onChange={event => this.onChangeRadio(event, "transformationType")}
                            >
                                {_.map(this.state.mvpTransformation, option => {
                                    return (
                                        <RadioButton
                                            labelText={option.name}
                                            value={option.value}
                                            key={option.value}
                                        />)
                                })}
                            </RadioButtonGroup>
                            <TextInput
                                id='transformationTypeOthers'
                                className='scenarioInformation__inputField--others'
                                invalid={false}
                                invalidText="A value is required"
                                labelText=""
                                disabled={this.state.transformationType === 'others' ? false : true}
                                name="transformationTypeOthers"
                                onChange={event => this.onTextChange(event)} />
                        </FormGroup>
                    </div>
                    <div className="scenarioInformation__inputField">
                        <Select id="mvpStage" onChange={event => this.onChangeSelect(event)} defaultValue={this.state.mvpStage} labelText="What stage is this MVP in currently">
                            <SelectItem text="Choose an option" value="" disabled={true} />
                            {_.map(this.state.selectOptions, option => {
                                return (
                                    <SelectItem
                                        text={option.name}
                                        value={option.value}
                                        key={option.value}
                                    />
                                )
                            })}
                        </Select>
                    </div>
                    <div className="scenarioInformation__radioField">
                        <FormGroup legendText="Is this MVP being setup with hardened architecture?">
                            <RadioButtonGroup
                                orientation='vertical'
                                legend="isMVPHardned"
                                defaultSelected=""
                                name="isMVPHardned"
                                valueSelected={this.state.isMVPHardned}
                                onChange={event => this.onChangeRadio(event, "isMVPHardned")}
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
                                id='isMVPHardnedOthers'
                                className='scenarioInformation__inputField--others'
                                invalid={false}
                                invalidText="A value is required"
                                labelText=""
                                disabled={this.state.isMVPHardned === 'others' ? false : true}
                                name="isMVPHardnedOthers"
                                onChange={event => this.onTextChange(event)} />
                        </FormGroup>
                    </div>
                    <div className="scenarioInformation__radioField">
                        <FormGroup legendText="Is this MVP being setup with reliability, Preventive maintenance systems?">
                            <RadioButtonGroup
                                orientation='vertical'
                                legend="isMVPReliability"
                                defaultSelected=""
                                name="isMVPReliability"
                                valueSelected={this.state.isMVPReliability}
                                onChange={event => this.onChangeRadio(event, "isMVPReliability")}
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
                                id='isMVPReliabilityOthers'
                                className='scenarioInformation__inputField--others'
                                invalid={false}
                                invalidText="A value is required"
                                labelText=""
                                disabled={this.state.isMVPReliability === 'others' ? false : true}
                                name="isMVPReliabilityOthers"
                                onChange={event => this.onTextChange(event)} />
                        </FormGroup>
                    </div>
                    <div className="scenarioInformation__radioField">
                        <FormGroup legendText="Is this MVP being setup with monitoring tools?">
                            <RadioButtonGroup
                                orientation='vertical'
                                legend="isMVPMonitored"
                                defaultSelected=""
                                name="isMVPMonitored"
                                valueSelected={this.state.isMVPMonitored}
                                onChange={event => this.onChangeRadio(event, "isMVPMonitored")}
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
                                id='isMVPMonitoredOthers'
                                className='scenarioInformation__inputField--others'
                                invalid={false}
                                invalidText="A value is required"
                                labelText=""
                                disabled={this.state.isMVPMonitored === 'others' ? false : true}
                                name="isMVPMonitoredOthers"
                                onChange={event => this.onTextChange(event)} />
                        </FormGroup>
                    </div>
                    <div className="scenarioInformation__radioField">
                        <FormGroup legendText="Does this MVP established have dev-ops pipeline from continuous business planning to delivery?">
                            <RadioButtonGroup
                                orientation='vertical'
                                legend="isMVPDevopsed"
                                defaultSelected=""
                                name="isMVPDevopsed"
                                valueSelected={this.state.isMVPDevopsed}
                                onChange={event => this.onChangeRadio(event, "isMVPDevopsed")}
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
                                id='isMVPDevopsedOthers'
                                className='scenarioInformation__inputField--others'
                                invalid={false}
                                invalidText="A value is required"
                                labelText=""
                                disabled={this.state.isMVPDevopsed === 'others' ? false : true}
                                name="isMVPDevopsedOthers"
                                onChange={event => this.onTextChange(event)} />
                        </FormGroup>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScenarioInformation;