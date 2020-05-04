import React, { Component } from 'react';
import { TextInput, NumberInput } from 'carbon-components-react';

class TeamStructure extends Component {

    state = {
        geoFTEs: 0,
        cicFTEs: 0,
        cicOffshoreFTEs: 0
    };

    onTextChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <div className="teamStructure">
                <div className="teamStructure__fields">
                    <div className="teamStructure__inputField">
                        <NumberInput
                            id='geoFTEs'
                            invalid={false}
                            invalidText="A value is required"
                            label="No of Geo FTEs"
                            name="geoFTEs"
                            type="number"
                            value={this.state.geoFTEs}
                            min={0}
                            onChange={event => this.onTextChange(event)}
                            onKeyPress={this.onKeyPress}
                        />
                    </div>
                    <div className="teamStructure__inputField">
                        <NumberInput
                            id='cicFTEs'
                            invalid={false}
                            invalidText="A value is required"
                            label="No of CIClanded FTEs"
                            name="cicFTEs"
                            type="number"
                            value={this.state.cicFTEs}
                            min={0}
                            onChange={event => this.onTextChange(event)}
                            onKeyPress={this.onKeyPress}
                        />
                    </div>
                    <div className="teamStructure__inputField">
                        <NumberInput
                            id='cicOffshoreFTEs'
                            invalid={false}
                            invalidText="A value is required"
                            label="No of CIC offshore FTEs"
                            name="cicOffshoreFTEs"
                            type="number"
                            value={this.state.cicOffshoreFTEs}
                            min={0}
                            onChange={event => this.onTextChange(event)}
                            onKeyPress={this.onKeyPress}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamStructure;