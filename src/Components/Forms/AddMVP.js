import React, { Component } from 'react';
import { ModalWrapper } from 'carbon-components-react';
import AddMVPModal from '../../Containers/AddMVPModal';

class AddMVP extends Component {

    state = {
        primaryButtonText: 'Next',
        isDisabled: false,
        currentIndex: 0
    }

    onHandleSubmit = () => {
        let currentIndexValue = this.state.currentIndex;
        if (currentIndexValue === 0) {
            this.setState({ currentIndex: currentIndexValue + 1 })
        } else if (currentIndexValue === 1) {
            this.setState({
                currentIndex: currentIndexValue + 1,
                primaryButtonText: 'Save'
            })
        } else if (currentIndexValue === 2) {
            console.log('add data into redux from here')
        }
    }

    render() {
        return (
            <div className="addMVP">
                <div className="addMVP__header">
                    <h3>2. MVP Information</h3>
                    <p> Some details about this form section</p>
                </div>
                <div className="addMVP__button">
                    <ModalWrapper
                        buttonTriggerText="+ Add MVP"
                        primaryButtonText={this.state.primaryButtonText}
                        primaryButtonDisabled={this.state.isDisabled}
                        modalHeading="MVP Information"
                        handleSubmit={this.onHandleSubmit} >
                        <AddMVPModal
                            currentIndex={this.state.currentIndex} />
                    </ModalWrapper>
                </div>
            </div>
        )
    }
}

export default AddMVP;