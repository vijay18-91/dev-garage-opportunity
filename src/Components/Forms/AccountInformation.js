import React, { Component } from 'react';
import _ from 'lodash';
import { TextInput, Select, SelectItem } from 'carbon-components-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { accountInformationDetails } from '../../Redux/actions/accountDetails';

class AccountInformation extends Component {

    state = {
        options: [
            { name: "Option1", value: "option1" },
            { name: "Option2", value: "option2" },
            { name: "Option3", value: "option3" }
        ],
        validate: {
            accountName: false,
            sector: false,
            industry: false,
            practice: false,
            deliveredBy: false,
            iot: false
        }
    }

    onTextChange = event => {
        this.props.accountInformationDetails({ name: event.target.name, value: event.target.value })
    };

    onBlur = event => {
        let validate = this.state.validate;
        validate[event.target.name || event.target.id] = event.target.value === '' ? true : false;
        this.setState({ validate })
    };

    onKeyPress = event => {
        console.log('this is for on key press');
    }

    onChangeSelect = event => {
        this.props.accountInformationDetails({ name: event.target.id, value: event.target.value })
    }

    render() {
        return (
            <div className="accountInformation">
                <div className="accountInformation__header">
                    <h3>1. Account Information</h3>
                    <p>More information needs to be added to this part.</p>
                </div>
                <div className="accountInformation__fields">
                    <div className="accountInformation__inputRow">
                        <div className="accountInformation__inputField">
                            <TextInput
                                id='accountName'
                                invalid={this.state.validate.accountName}
                                invalidText="A value is required"
                                labelText="Account Name"
                                placeholder="Placeholder text"
                                name="accountName"
                                required
                                defaultValue={this.props.accountInformationDetails.accountName}
                                onChange={event => this.onTextChange(event)}
                                onBlur={this.onBlur}
                                onKeyPress={this.onKeyPress}
                            />
                        </div>
                        <div className="accountInformation__inputField">
                            <Select 
                                id="sector" 
                                onChange={event => this.onChangeSelect(event)} 
                                defaultValue={this.props.accountInformationDetails.sector} 
                                required
                                labelText="Sector"
                                invalid={this.state.validate.sector}
                                onBlur={this.onBlur}
                                invalidText="A value is required" >
                                <SelectItem text="Choose an option" value="" />
                                {_.map(this.state.options, option => {
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
                    <div className="accountInformation__inputRow">
                        <div className="accountInformation__inputField">
                            <Select 
                                id="industry" 
                                required 
                                onChange={event => this.onChangeSelect(event)} 
                                defaultValue={this.props.accountInformationDetails.industry} 
                                labelText="Industry"
                                invalid={this.state.validate.industry}
                                onBlur={this.onBlur}
                                invalidText="A value is required" >
                                <SelectItem text="Choose an option" value="" />
                                {_.map(this.state.options, option => {
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
                        <div className="accountInformation__inputField">
                            <Select 
                                id="practice" 
                                required 
                                onChange={event => this.onChangeSelect(event)} 
                                defaultValue={this.props.accountInformationDetails.practice} 
                                labelText="Practice"
                                invalid={this.state.validate.practice}
                                onBlur={this.onBlur}
                                invalidText="A value is required" >
                                <SelectItem text="Choose an option" value="" />
                                {_.map(this.state.options, option => {
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
                    <div className="accountInformation__inputRow">
                        <div className="accountInformation__inputField">
                            <TextInput
                                id='deliveredBy'
                                invalid={this.state.validate.deliveredBy}
                                invalidText="A value is required"
                                labelText="Delivered By"
                                placeholder="Placeholder text"
                                name="deliveredBy"
                                required
                                defaultValue={this.props.accountInformationDetails.deliveredBy}
                                onChange={event => this.onTextChange(event)}
                                onBlur={this.onBlur}
                                onKeyPress={this.onKeyPress}
                            />
                        </div>
                        <div className="accountInformation__inputField">
                            <Select 
                                id="iot" 
                                required 
                                onChange={event => this.onChangeSelect(event)} 
                                defaultValue={this.props.accountInformationDetails.iot} 
                                labelText="IOT"
                                invalid={this.state.validate.iot}
                                onBlur={this.onBlur}
                                invalidText="A value is required" >
                                <SelectItem text="Choose an option" value="" />
                                {_.map(this.state.options, option => {
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
                </div>
            </div >

        )
    }
}

const mapStateToProps = state => ({
    accountInformationDetails: state.AccountDetails
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            accountInformationDetails,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(AccountInformation);

