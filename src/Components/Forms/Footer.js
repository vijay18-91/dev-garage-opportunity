import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { Link, Redirect } from 'react-router-dom';
import { submitOpportunity } from '../../Redux/actions/submitOpportunity';

class Footer extends Component {

    handleSubmit = event => {
        const mvpList = this.props.mvpList,
            accountInformationDetails = this.props.accountInformationDetails,
            formData = {accountInformationDetails: accountInformationDetails, mvpList: mvpList};

        this.props.submitOpportunity(formData);
    }

    handleClose = event => {
        
    }

    render() {
        let isFormValid = true;
        if (this.props.mvpList.length > 0 && _.every(this.props.accountInformationDetails, data => data !== '')) {
            isFormValid = false;
        }

        return (
            <div className="footer">
                {/* { this.props.submitOpportunityData.status == 200 ? <Redirect to='/home' /> : '' } */}
                <Link to={{pathname: '/home'}}>
                    <button tabIndex="0" className="bx--btn bx--btn--secondary footer__secondary" onClick={this.handleClose} type="button">Cancel</button>
                </Link>
                <button tabIndex="0" className="bx--btn bx--btn--primary footer__primary" disabled={isFormValid} onClick={this.handleSubmit} type="button">Save</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    mvpList: state.MVP,
    accountInformationDetails: state.AccountDetails,
    submitOpportunityData: state.SubmitOpportunity.submitOpportunity
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            submitOpportunity,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Footer);