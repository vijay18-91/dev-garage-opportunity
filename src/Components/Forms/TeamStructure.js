import React, { Component } from 'react';
import { NumberInput } from 'carbon-components-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {mvpDetails} from '../../Redux/actions/mvpDetails';


class TeamStructure extends Component {

    onTextChange = event => {
        this.props.mvpDetails({name: event.target.name, value: event.target.value})
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
                            value={this.props.mvpDetails.geoFTEs}
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
                            value={this.props.mvpDetails.cicFTEs}
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
                            value={this.props.mvpDetails.cicOffshoreFTEs}
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

export default connect(mapStateToProps, mapDispatchToProps)(TeamStructure);