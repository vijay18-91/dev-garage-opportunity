import React, { Component } from 'react';

class ConfirmationModal extends Component {
    render() {
        return (
            <div className="notificationModal">
                <div className="notificationModal__container bx--modal-container">
                    <div className="notificationModal__header bx--modal-header">
                        <h3 id="bx--modal-header__heading--modal-2" className="bx--modal-header__heading">{this.props.header}</h3>
                    </div>
                    <div className="notificationModal__content bx--modal-content">
                        {this.props.message}
                    </div>
                    <div className="notificationModal__footer bx--modal-footer">
                        <button
                            tabIndex="0"
                            className="bx--btn bx--btn--primary"
                            onClick={this.props.onProceed}
                            type="button">
                            OK
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConfirmationModal;