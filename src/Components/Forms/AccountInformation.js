import React, { Component } from 'react';
import _ from 'lodash';
import { TextInput, Select, SelectItem } from 'carbon-components-react';

class AccountInformation extends Component {

    state = {
        accountName: '',
        sector: '',
        industry: '',
        practice: '',
        deliveredBy: '',
        iot: '',
        options: [
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

    onKeyPress = event => {
        console.log('this is for on key press');
    }

    onChangeSelect = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
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
                                invalid={false}
                                invalidText="A value is required"
                                labelText="Account Name"
                                placeholder="Placeholder text"
                                name="accountName"
                                defaultValue={this.state.accountName}
                                onChange={event => this.onTextChange(event)}
                                onKeyPress={this.onKeyPress}
                            />
                        </div>
                        <div className="accountInformation__inputField">
                            <Select id="sector" onChange={event => this.onChangeSelect(event)} defaultValue={this.state.sector} labelText="Sector" >
                                <SelectItem text="Choose an option" value="" disabled={true} />
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
                            <Select id="industry" onChange={event => this.onChangeSelect(event)} defaultValue={this.state.industry} labelText="Industry">
                                <SelectItem text="Choose an option" value="" disabled={true} />
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
                            <Select id="practice" onChange={event => this.onChangeSelect(event)} defaultValue={this.state.practice} labelText="Practice">
                                <SelectItem text="Choose an option" value="" disabled={true} />
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
                                invalid={false}
                                invalidText="A value is required"
                                labelText="Delivered By"
                                placeholder="Placeholder text"
                                name="deliveredBy"
                                defaultValue={this.state.deliveredBy}
                                onChange={event => this.onTextChange(event)}
                                onKeyPress={this.onKeyPress}
                            />
                        </div>
                        <div className="accountInformation__inputField">
                            <Select id="practice" onChange={event => this.onChangeSelect(event)} defaultValue={this.state.practice} labelText="IOT">
                                <SelectItem text="Choose an option" value="" disabled={true} />
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

export default AccountInformation;

