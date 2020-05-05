import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

class Footer extends Component {

    render() {
        let isFormValid = true;
        if (this.props.mvpList.length > 0 && _.every(this.props.accountInformationDetails, data => data !== '')) {
            isFormValid = false;
        }
        return (
            <div className="footer">
                <button tabIndex="0" className="bx--btn bx--btn--secondary footer__secondary" onClick={this.handleClose} type="button">Cancel</button>
                <button tabIndex="0" className="bx--btn bx--btn--primary footer__primary" disabled={isFormValid} type="button">Save</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    mvpList: state.MVP,
    accountInformationDetails: state.AccountDetails
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Footer);