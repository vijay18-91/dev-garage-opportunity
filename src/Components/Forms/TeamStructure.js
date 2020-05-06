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

    onClick = (event, name) => {
        // let validate = this.state.validate,
        //     mvpData = this.props.mvpDetails;

        // if (event.target.className.indexOf('up') > -1) {
        //     mvpData[name]++;
        // } else {
        //     mvpData[name] = mvpData[name] > 0 ? mvpData[name]-- : mvpData[name];
        // }
        // validate[name] = mvpData == 0 ? true : false;
        // this.setState({ validate })
        // this.isFormValid();
    }

    onTextChange = event => {
        this.props.updateMvpDetails({ name: event.target.name || event.imaginaryTarget.name, value: event.target.value || event.imaginaryTarget.value })
        this.onBlur(event);
    };

    onBlur = event => {
        console.log('data', event.target.name, event.target.name);
        if(event.target.name == undefined) return
        let validate = this.state.validate;
        validate[event.target.name || event.imaginaryTarget.name] = (event.target.value || event.imaginaryTarget.value ) == 0 ? true : false;
        this.setState({ validate })
        this.isFormValid();
    };

    isFormValid = () => {
        const isValid = _.every(this.state.validate, name => name === false),
            isFormFilled = _.every(this.state.fields , field => this.props.mvpDetails[field] != 0);

        // console.log('data', isValid, isFormFilled, this.state.validate, this.props.mvpDetails);
        if (isValid && isFormFilled) {
            this.props.formValid({name: 'teamStructureValid', value: true});
        } else {
            this.props.formValid({name: 'teamStructureValid', value: false});
        }
    }

    render() {
        return (
            <div className="teamStructure">
                <div className="teamStructure__fields">
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
                            onClick={(event) => this.onClick(event, 'geoFTEs')}
                            onKeyPress={this.onKeyPress}
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
                            onClick={(event) => this.onClick(event, 'cicFTEs')}
                            onKeyPress={this.onKeyPress}
                        />
                    </div>
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
                            onClick={(event) => this.onClick(event, 'cicOffshoreFTEs')}
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
            updateMvpDetails,
            formValid
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(TeamStructure);