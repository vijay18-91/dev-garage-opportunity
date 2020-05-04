import React, { Component } from 'react';
import { ProgressIndicator, ProgressStep } from 'carbon-components-react';
import ScenarioInformation from '../Components/Forms/ScenarioInformation';
import TeamStrucuter from '../Components/Forms/TeamStructure';
import PeopleCultureOrganisation from '../Components/Forms/PeopleCultureOrg';

class AddMVPModal extends Component {

    state = {
        currentContent: <ScenarioInformation />,
        currentIndex: ''
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.currentIndex !== prevState.currentIndex) {
            return { currentIndex: nextProps.currentIndex }
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.currentIndex !== this.props.currentIndex) {
            const currentIndex = this.props.currentIndex,
                currentContent = [<ScenarioInformation />, <TeamStrucuter />, <PeopleCultureOrganisation />];
            this.setState({ currentContent: currentContent[currentIndex] })

        }
    }

    render() {
        return (
            <div className='addMVPModal'>
                <div className='addMVPModal__progress-bar'>
                    <ProgressIndicator currentIndex={this.state.currentIndex} >
                        <ProgressStep
                            label="Scenario Information"
                        />
                        <ProgressStep
                            label="Team Structure"
                        />
                        <ProgressStep
                            label="People Culture & Organisation"
                        />
                    </ProgressIndicator>
                </div>
                {this.state.currentContent}
            </div>
        )
    }
}

export default AddMVPModal;