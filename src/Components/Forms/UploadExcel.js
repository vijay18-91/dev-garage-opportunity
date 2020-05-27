import React, { Component } from 'react';
import { SideNav, FileUploader, Button } from 'carbon-components-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uploadExcel from '../../Redux/actions/uploadExcel';
import { Redirect } from 'react-router-dom';
import ConfirmationModal from '../Modal/ConfirmationModal';

class UploadExcel extends Component {

    state = {
        file: '',
        isSubmitDisabled: true,
        inputKey: '',
        redirect: false ,
        confirmationModalAdded: false,
        confirmationModal: ''
    }

    onFileSelect = event => {
        console.log('event', event.target.files[0].name, event.target.files);
        this.setState({ file: event.target.files[0], isSubmitDisabled: false })
    }

    onSubmit = event => {
        this.setState({ inputKey: new Date(), confirmationModal: '' });
        this.props.uploadExcel({ file: this.state.file });
    }

    redirectToHome = event => {
        this.setState({redirect: true});
    }

    closeModal = () => {
        this.setState({confirmationModal: ''});
    }

    renderConfirmation = () => {
        const confirmationModal = (
            <ConfirmationModal
                header='Success Confirmation'
                message='The records have been successfully added. To move to home page click Redirect and clicking on OK will stay in the same page.'
                onProceed={this.closeModal}
                onCancel={this.redirectToHome}
                primaryButton='OK'
                secondaryButton='Back to Home Page'
                type='primary' />
        )

        this.setState({ confirmationModal, confirmationModalAdded: true });
    }

    render() {
        return (
            <div className="uploadExcel">
                {(this.props.uploadExcelStatus == 200 && !this.state.confirmationModalAdded) ? this.renderConfirmation() : ''}
                { this.state.redirect ? <Redirect to='/home' /> : '' }
                {this.state.confirmationModal}
                <SideNav isFixedNav expanded={true} isChildOfHeader={false} aria-label="Side navigation" className="uploadExcel__sideNav" >
                    <h1>IBM Garage Opportunity Qualification Assessment</h1>
                    <h5>Upload excel</h5>
                    <p>Admin tool to upload new Account details.</p>
                </SideNav>
                <div className="uploadExcel__content">
                    <div className="uploadExcel__header">
                        <div className="uploadExcel__instructions">
                            <h4 className="uploadExcel__instructions--header">Instructions</h4>
                            <h5 className="uploadExcel__instructions--para"> 1) Only .xlsx and .xls format are accepted.</h5>
                            <h5 className="uploadExcel__instructions--para"> 2) Excel should contain 3 columns</h5>
                            <h5 className="uploadExcel__instructions--para"> 3) The column headers should be - Global_Client_Name, Account_Sector and Account_Industry in the same order.</h5>
                            <h5 className="uploadExcel__instructions--para"> 4) Excel can contain duplicate values.</h5>
                        </div>
                    </div>
                    <div className="uploadExcel__uploader bx--file__container">
                        <FileUploader
                            accept={[
                                '.xls',
                                '.xlsx'
                            ]}
                            buttonKind="primary"
                            buttonLabel="Add files"
                            filenameStatus="edit"
                            iconDescription="Clear file"
                            onChange={this.onFileSelect}
                            key={this.state.inputKey}
                        />
                        <Button onClick={this.redirectToHome} kind='secondary' className="uploadExcel__homePage">Back to Home Page</Button>
                        <Button onClick={this.onSubmit} disabled={this.state.isSubmitDisabled}>Submit</Button>
                    </div>
                </div >
            </div>
        )
    }
}

const mapStateToProps = state => ({
    uploadExcelStatus: state.UploadExcel.status
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            uploadExcel,
        },
        dispatch,
    )

export default connect(mapStateToProps, mapDispatchToProps)(UploadExcel);