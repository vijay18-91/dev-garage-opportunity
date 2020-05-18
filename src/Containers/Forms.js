import React, { Component } from 'react';
import { Loading } from 'carbon-components-react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormHeader from '../Components/Forms/FormHeader';
import AccountInformation from '../Components/Forms/AccountInformation';
import AddMVP from '../Components/Forms/AddMVP';
import NotificationModal from '../Components/Modal/NotificationModal';
import Footer from '../Components/Forms/Footer';
import '../Styles/form.scss'
import '../Styles/elements.scss'

class Forms extends Component {

    redirectToHomePage = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div className='forms'>
                {this.props.isSubmitting ? <Loading small description="Active loading indicator" withOverlay={true} /> : ''}
                {this.props.submitOpportunityData.status == 200 ? <NotificationModal header='Form submitted' message='Your garage opportunities entry has been successfully submitted.' onProceed={this.redirectToHomePage} /> : ''}
                <FormHeader />
               <AccountInformation />
               <AddMVP />
               <Footer />
            </div>
        )
    }

}

const mapStateToProps = state => ({
    isSubmitting: state.SubmitOpportunity.isSubmitting,
    submitOpportunityData: state.SubmitOpportunity.submitOpportunity
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Forms);