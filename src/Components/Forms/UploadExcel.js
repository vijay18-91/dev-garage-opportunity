import React, { Component } from 'react';
import { SideNav, FileUploader, Button } from 'carbon-components-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uploadExcel from '../../Redux/actions/uploadExcel';

class UploadExcel extends Component {

    state = {
        file: '',
        isSubmitDisabled: true,
        inputKey: ''
    }

    onFileSelect = event => {
        console.log('event', event.target.files[0].name, event.target.files);
        this.setState({ file: event.target.files[0], isSubmitDisabled: false })
    }

    onSubmit = event => {
        this.setState({ inputKey: new Date() })
        this.props.uploadExcel({ file: this.state.file });
    }

    render() {
        return (
            <div className="uploadExcel">
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
                        <Button onClick={this.onSubmit} disabled={this.state.isSubmitDisabled}>Submit</Button>
                    </div>
                </div >
            </div>
        )
    }
}

const mapStateToProps = state => ({
    uploadExcelStatus: state.UploadExcel
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            uploadExcel,
        },
        dispatch,
    )

export default connect(mapStateToProps, mapDispatchToProps)(UploadExcel);