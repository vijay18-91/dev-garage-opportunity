import React, { Component } from 'react';
import { NumberInput } from 'carbon-components-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMvpDetails } from '../../Redux/actions/mvpDetails';
import { formValid } from '../../Redux/actions/validate';
import _ from 'lodash';

class TeamStructure extends Component {

    state = {
        validate: {
            geoFTEs: false,
            cicFTEs: false,
            cicOffshoreFTEs: false
        },
        fields: [
            'geoFTEs',
            'cicFTEs',
            'cicOffshoreFTEs'
        ]
    }

    onKeyUp = (event, name) => {
        this.props.updateMvpDetails({ name: event.target.name, value: event.target.value })
        this.onBlur(event);
    }

    onTextChange = event => {
        this.props.updateMvpDetails({ name: event.imaginaryTarget.name || event.target.name , value: event.imaginaryTarget.value || event.target.value })
        this.onBlur(event);
    };

    onBlur = event => {
        if (!(event.target ||  event.imaginaryTarget) && !(event.target.name || event.imaginaryTarget.name)) return
        let validate = this.state.validate;
        validate[event.target.name || event.imaginaryTarget.name] = ((event.target && event.target.value) || (event.imaginaryTarget && event.imaginaryTarget.value)) == 0 ? true : false;
        this.setState({ validate })
        this.isFormValid();
    };

    isFormValid = () => {
        const isValid = _.every(this.state.validate, name => name === false),
            isFormFilled = _.every(this.state.fields, field => this.props.mvpDetails[field] != 0);
        if (isValid && isFormFilled) {
            this.props.formValid({ name: 'teamStructureValid', value: true });
        } else {
            this.props.formValid({ name: 'teamStructureValid', value: false });
        }
    }

    render() {
        this.isFormValid();
        return (
            <div className="teamStructure">
                <div className="teamStructure__fields">
                    <div className="teamStructure__fieldRow">
                        <div className="teamStructure__inputField">
                            <NumberInput
                                id='geoFTEs'
                                invalid={this.state.validate.geoFTEs}
                                onBlur={this.onBlur}
                                invalidText="A value is required"
                                label="No of Geo FTEs"
                                name="geoFTEs"
                                type="number"
                                value={this.props.mvpDetails.geoFTEs}
                                min={0}
                                onChange={event => this.onTextChange(event)}
                                onKeyUp={(event) => this.onKeyUp(event, 'geoFTEs')}
                            />
                        </div>
                        <div className="teamStructure__inputField">
                            <NumberInput
                                id='cicFTEs'
                                invalid={this.state.validate.cicFTEs}
                                onBlur={this.onBlur}
                                invalidText="A value is required"
                                label="No of CIClanded FTEs"
                                name="cicFTEs"
                                type="number"
                                value={this.props.mvpDetails.cicFTEs}
                                min={0}
                                onChange={event => this.onTextChange(event)}
                                onKeyUp={(event) => this.onKeyUp(event, 'cicFTEs')}
                            />
                        </div>
                    </div>
                    <div className="teamStructure__fieldRow">
                        <div className="teamStructure__inputField">
                            <NumberInput
                                id='cicOffshoreFTEs'
                                invalid={this.state.validate.cicOffshoreFTEs}
                                onBlur={this.onBlur}
                                invalidText="A value is required"
                                label="No of CIC offshore FTEs"
                                name="cicOffshoreFTEs"
                                type="number"
                                value={this.props.mvpDetails.cicOffshoreFTEs}
                                min={0}
                                onChange={event => this.onTextChange(event)}
                                onKeyUp={(event) => this.onKeyUp(event, 'cicOffshoreFTEs')}
                            />
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
            updateMvpDetails,
            formValid
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(TeamStructure);