import React, { Component } from 'react';

class ConfirmationModal extends Component {
    render() {
        return (
            <div className="warningModal">
                <div className="warningModal__container bx--modal-container">
                    <div className="warningModal__header bx--modal-header">
                        <h3 id="bx--modal-header__heading--modal-2" className="bx--modal-header__heading">{this.props.header}</h3>
                    </div>
                    <div className="warningModal__content bx--modal-content">
                        {this.props.message}
                    </div>
                    <div className="warningModal__footer bx--modal-footer">
                        <button
                            tabIndex="0"
                            className="bx--btn bx--btn--secondary"
                            onClick={this.props.onCancel}
                            type="button">
                            {this.props.secondaryButton}
                        </button>
                        <button
                            tabIndex="0"
                            className={this.props.type == 'danger' ? "bx--btn bx--btn--danger" : "bx--btn bx--btn--primary"}
                            onClick={this.props.onProceed}
                            type="button">
                            {this.props.primaryButton}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConfirmationModal;