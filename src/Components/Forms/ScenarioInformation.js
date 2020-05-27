import React, { Component } from 'react';
import { TextInput, FormGroup, RadioButtonGroup, RadioButton, Select, SelectItem } from 'carbon-components-react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMvpDetails } from '../../Redux/actions/mvpDetails';
import { formValid } from '../../Redux/actions/validate';

class ScenarioInformation extends Component {

    state = {
        radioOptions: [
            { name: 'Yes', value: 'Yes' },
            { name: 'No', value: 'No' },
            { name: 'Others', value: 'Others' }
        ],
        mvpTransformation: [
            { name: 'Scaled', value: 'Scaled' },
            { name: 'Enhanced', value: 'Enhanced' },
            { name: 'Part of larger transformation', value: 'Part of larger transformation' },
            { name: 'Others', value: 'Others' },
        ],
        selectOptions: [
            { name: "Option1", value: "option1" },
            { name: "Option2", value: "option2" },
            { name: "Option3", value: "option3" }
        ],
        stageInformation: [
            { name: "Recently Started", value: "Recently Started" },
            { name: "Work in Progress", value: "Work in Progress" },
            { name: "About to be delivered", value: "About to be delivered" },
            { name: "Delivered", value: "Delivered" },
        ],
        validate: {
            mvpName: false,
            mvpStage: false,
            emergingTechnologies: false,
            weeksRequired: false,
            parallelSquads: false,
            transformationType: true,
            transformationTypeOthers: false,
            isMVPHardned: true,
            isMVPHardnedOthers: false,
            isMVPReliability: true,
            isMVPReliabilityOthers: false,
            isMVPMonitored: true,
            isMVPMonitoredOthers: false,
            isMVPDevopsed: true,
            isMVPDevopsedOthers: false,
        },
        fields: [
            'mvpName',
            'mvpStage',
            'emergingTechnologies',
            'weeksRequired',
            'parallelSquads',
            'transformationType',
            'isMVPHardned',
            'isMVPReliability',
            'isMVPMonitored',
            'isMVPDevopsed'
        ]
    }

    componentDidMount() {
        this.perpopulate();
        this.isFormValid();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.mvpDetails !== prevState.mvpDetails) {
            return { mvpDetails: nextProps.mvpDetails }
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.mvpDetails !== this.props.mvpDetails) {
            this.isFormValid();
        }
    }

    onTextChange = event => {
        this.props.updateMvpDetails({ name: event.target.name, value: event.target.value })
    };

    onChangeSelect = event => {
        this.props.updateMvpDetails({ name: event.target.id, value: event.target.value })
    }

    onChangeRadio = (event, name) => {
        let validate = this.state.validate,
            fields = this.state.fields;
        validate[name] = false;
        this.setState({ validate })
        this.props.updateMvpDetails({ name: name, value: event })

        if (event === 'Others') {
            fields.push(name + 'Others');
            this.setState({ fields });
        } else if ((event !== 'Others') && fields.indexOf(name + 'Others') > -1) {
            _.remove(fields, field => field === name + 'Others')
            this.setState({ fields });
        }

        this.isFormValid();
    }

    onBlur = event => {
        let validate = this.state.validate;
        validate[event.target.name || event.target.id] = event.target.value === '' ? true : false;
        this.setState({ validate })
        this.isFormValid();
    };

    isFormValid = () => {
        const isValid = _.every(this.state.validate, name => name === false),
            isFormFilled = _.every(this.state.fields, field => this.props.mvpDetails[field] !== '');
        if (isValid && isFormFilled) {
            this.props.formValid({ name: 'scenarioInformationValid', value: true });
        } else {
            this.props.formValid({ name: 'scenarioInformationValid', value: false });
        }
    }

    perpopulate = () => {
        const mvpDetails = this.props.mvpDetails,
            validate = this.state.validate,
            fields = this.state.fields;

        _.each(fields, field => {
            if(validate[field] && mvpDetails[field] !== '') {
                validate[field] = false;
            }
        });

        this.setState({validate});

    }

    render() {
        return (
            <div className="scenarioInformation">
                <div className="scenarioInformation__fields">
                    <div className="scenarioInformation__fieldRow">
                        <div className="scenarioInformation__inputField">
                            <TextInput
                                id='mvpName'
                                invalid={this.state.validate.mvpName}
                                onBlur={this.onBlur}
                                invalidText="A value is required"
                                labelText="MVP Name"
                                placeholder="Placeholder text"
                                name="mvpName"
                                defaultValue={this.props.mvpDetails.mvpName}
                                onChange={event => this.onTextChange(event)}
                                onKeyPress={this.onKeyPress}
                                // disabled={this.props.mvpDetails.type === 'update' ? true : false}
                            />
                        </div>
                        <div className="scenarioInformation__inputField">
                            <TextInput
                                id='emergingTechnologies'
                                invalid={this.state.validate.emergingTechnologies}
                                onBlur={this.onBlur}
                                invalidText="A value is required"
                                labelText="What are the emerging technologies that are being used in this MVPs?"
                                placeholder="Placeholder text"
                                name="emergingTechnologies"
                                defaultValue={this.props.mvpDetails.emergingTechnologies}
                                onChange={event => this.onTextChange(event)}
                                onKeyPress={this.onKeyPress}
                            />
                        </div>
                    </div>
                    <div className="scenarioInformation__fieldRow">

                        <div className="scenarioInformation__inputField">
                            <TextInput
                                id='weeksRequired'
                                invalid={this.state.validate.weeksRequired}
                                onBlur={this.onBlur}
                                invalidText="A value is required"
                                labelText="How long does it take to deliver this MVP?(in weeks)"
                                placeholder="Placeholder text"
                                name="weeksRequired"
                                defaultValue={this.props.mvpDetails.weeksRequired}
                                onChange={event => this.onTextChange(event)}
                                onKeyPress={this.onKeyPress}
                            />
                        </div>
                        <div className="scenarioInformation__inputField">
                            <TextInput
                                id='parallelSquads'
                                invalid={this.state.validate.parallelSquads}
                                onBlur={this.onBlur}
                                invalidText="A value is required"
                                labelText="How many squads are running in parallel?"
                                placeholder="Placeholder text"
                                name="parallelSquads"
                                defaultValue={this.props.mvpDetails.parallelSquads}
                                onChange={event => this.onTextChange(event)}
                                onKeyPress={this.onKeyPress}
                            />
                        </div>
                    </div>
                    <div className="scenarioInformation__fieldRow">
                        <div className="scenarioInformation__radioField">
                            <FormGroup legendText="Is this MVP being scalled, or enhanced or a part of a large transformation?">
                                <RadioButtonGroup
                                    orientation='vertical'
                                    legend="transformationType"
                                    defaultSelected=""
                                    name="transformationType"
                                    valueSelected={this.props.mvpDetails.transformationType}
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
                                <div className="scenarioInformation__radioTextField">
                                    <TextInput
                                        id='transformationTypeOthers'
                                        invalid={this.state.validate.transformationTypeOthers}
                                        onBlur={this.onBlur}
                                        invalidText="A value is required"
                                        labelText=""
                                        disabled={this.props.mvpDetails.transformationType === 'Others' ? false : true}
                                        name="transformationTypeOthers"
                                        onChange={event => this.onTextChange(event)} />
                                </div>
                            </FormGroup>
                        </div>
                        <div className="scenarioInformation__selectField">
                            <Select
                                id="mvpStage"
                                onChange={event => this.onChangeSelect(event)}
                                defaultValue={this.props.mvpDetails.mvpStage}
                                labelText="What stage is this MVP in currently"
                                invalid={this.state.validate.mvpStage}
                                onBlur={this.onBlur}
                                invalidText="A value is required" >
                                <SelectItem text="Choose an option" value="" disabled={true} />
                                {_.map(this.state.stageInformation, option => {
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
                    </div>
                    <div className="scenarioInformation__fieldRow">
                        <div className="scenarioInformation__radioField">
                            <FormGroup legendText="Is this MVP being setup with hardened architecture?">
                                <RadioButtonGroup
                                    orientation='vertical'
                                    legend="isMVPHardned"
                                    defaultSelected=""
                                    name="isMVPHardned"
                                    valueSelected={this.props.mvpDetails.isMVPHardned}
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
                                <div className="scenarioInformation__radioTextField">
                                    <TextInput
                                        id='isMVPHardnedOthers'
                                        invalid={this.state.validate.isMVPHardnedOthers}
                                        onBlur={this.onBlur}
                                        invalidText="A value is required"
                                        labelText=""
                                        disabled={this.props.mvpDetails.isMVPHardned === 'Others' ? false : true}
                                        name="isMVPHardnedOthers"
                                        onChange={event => this.onTextChange(event)} />
                                </div>
                            </FormGroup>
                        </div>
                        <div className="scenarioInformation__radioField">
                            <FormGroup legendText="Is this MVP being setup with reliability, Preventive maintenance systems?">
                                <RadioButtonGroup
                                    orientation='vertical'
                                    legend="isMVPReliability"
                                    defaultSelected=""
                                    name="isMVPReliability"
                                    valueSelected={this.props.mvpDetails.isMVPReliability}
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
                                <div className="scenarioInformation__radioTextField">
                                    <TextInput
                                        id='isMVPReliabilityOthers'
                                        invalid={this.state.validate.isMVPReliabilityOthers}
                                        onBlur={this.onBlur}
                                        invalidText="A value is required"
                                        labelText=""
                                        disabled={this.props.mvpDetails.isMVPReliability === 'Others' ? false : true}
                                        name="isMVPReliabilityOthers"
                                        onChange={event => this.onTextChange(event)} />
                                </div>
                            </FormGroup>
                        </div>
                    </div>
                    <div className="scenarioInformation__fieldRow">
                        <div className="scenarioInformation__radioField">
                            <FormGroup legendText="Is this MVP being setup with monitoring tools?">
                                <RadioButtonGroup
                                    orientation='vertical'
                                    legend="isMVPMonitored"
                                    defaultSelected=""
                                    name="isMVPMonitored"
                                    valueSelected={this.props.mvpDetails.isMVPMonitored}
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
                                <div className="scenarioInformation__radioTextField">
                                    <TextInput
                                        id='isMVPMonitoredOthers'
                                        invalid={this.state.validate.isMVPMonitoredOthers}
                                        onBlur={this.onBlur}
                                        invalidText="A value is required"
                                        labelText=""
                                        disabled={this.props.mvpDetails.isMVPMonitored === 'Others' ? false : true}
                                        name="isMVPMonitoredOthers"
                                        onChange={event => this.onTextChange(event)} />
                                </div>
                            </FormGroup>
                        </div>
                        <div className="scenarioInformation__radioField">
                            <FormGroup legendText="Does this MVP established have dev-ops pipeline from continuous business planning to delivery?">
                                <RadioButtonGroup
                                    orientation='vertical'
                                    legend="isMVPDevopsed"
                                    defaultSelected=""
                                    name="isMVPDevopsed"
                                    valueSelected={this.props.mvpDetails.isMVPDevopsed}
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
                                <div className="scenarioInformation__radioTextField">
                                    <TextInput
                                        id='isMVPDevopsedOthers'
                                        invalid={this.state.validate.isMVPDevopsedOthers}
                                        onBlur={this.onBlur}
                                        invalidText="A value is required"
                                        labelText=""
                                        disabled={this.props.mvpDetails.isMVPDevopsed === 'Others' ? false : true}
                                        name="isMVPDevopsedOthers"
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
    isValid: state.Validate,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            updateMvpDetails,
            formValid
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioInformation);