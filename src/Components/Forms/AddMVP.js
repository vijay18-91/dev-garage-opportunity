import React, { Component } from 'react';
import { Button, DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';
import AddMVPModal from '../../Containers/AddMVPModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetMvpDetails } from '../../Redux/actions/mvpDetails';
import { mvp, deleteMvp } from '../../Redux/actions/mvp';
import { resetFormValid } from '../../Redux/actions/validate';

class AddMVP extends Component {

    state = {
        primaryButtonText: 'Next',
        isDisabled: false,
        currentIndex: 0,
        modalOpen: false,
        formPattern: ['scenarioInformationValid', 'teamStructureValid', 'peopleCultureOrganisationValid'],
        columns: [
            { header: 'MVP Name', key: 'mvpName' },
            { header: 'Technologies Used', key: 'emergingTechnologies' },
            { header: '', key: 'editAction' },
            { header: '', key: 'deleteAction' }
        ],
        editSvg: <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><rect width="28" height="2" x="2" y="26"></rect><path d="M25.4,9c0.8-0.8,0.8-2,0-2.8c0,0,0,0,0,0l-3.6-3.6c-0.8-0.8-2-0.8-2.8,0c0,0,0,0,0,0l-15,15V24h6.4L25.4,9z M20.4,4L24,7.6	l-3,3L17.4,7L20.4,4z M6,22v-3.6l10-10l3.6,3.6l-10,10H6z"></path><title>Edit</title></svg>,
        deleteSvg: <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M16,4c6.6,0,12,5.4,12,12s-5.4,12-12,12S4,22.6,4,16S9.4,4,16,4 M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14	S23.7,2,16,2z"></path><rect width="16" height="2" x="8" y="15"></rect><title>Subtract alt</title></svg>
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
            this.props.mvp(this.props.mvpDetails)
            this.setState({ modalOpen: false });
            this.handleClose();
        }
    }

    handleClose = () => {
        this.setState({
            primaryButtonText: 'Next',
            isDisabled: false,
            currentIndex: 0,
            modalOpen: false
        })
        this.props.resetMvpDetails();
        this.props.resetFormValid();
    }

    editMVP = (event, index, row) => {
        console.log('in edit mvp', event, index, row);
    }

    deleteMVP = (event, index, row) => {
        console.log('in delete mvp', event, index, row);
        const mvpList = this.props.mvpList;
        mvpList.splice(index, 1);
        this.props.deleteMvp(mvpList);
    }

    render() {
        console.log('in mvp lis', this.props.mvpList);
        const modal = this.state.modalOpen ? (
            <div className="modal">
                <div className="modal__container bx--modal-container">
                    <div className="modal__header bx--modal-header">
                        <h3 id="bx--modal-header__heading--modal-2" className="bx--modal-header__heading">MVP Information</h3>
                        <button className="bx--modal-close" type="button" onClick={this.handleClose} title="Close" aria-label="Close">
                            <svg focusable="false" preserveAspectRatio="xMidYMid meet" aria-label="Close" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" role="img" className="bx--modal-close__icon">
                                <polygon points="24 9.4 22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4"></polygon>
                            </svg>
                        </button>
                    </div>
                    <div className="modal__content bx--modal-content">
                        <AddMVPModal currentIndex={this.state.currentIndex} />
                    </div>
                    <div className="modal__footer bx--modal-footer">
                        <button tabIndex="0" className="bx--btn bx--btn--secondary" onClick={this.handleClose} type="button">Cancel</button>
                        <button tabIndex="0"
                            className="bx--btn bx--btn--primary"
                            onClick={this.onHandleSubmit}
                            type="button"
                            disabled={!this.props.isValid[this.state.formPattern[this.state.currentIndex]]}>{this.state.primaryButtonText}</button>
                    </div>
                </div>
            </div>
        ) : '';
        
        const tableData = this.props.mvpList.length > 0 ? (
                <DataTable
                    rows={this.props.mvpList}
                    headers={this.state.columns}
                    render={({ rows, headers, getHeaderProps }) => (
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {headers.map(header => (
                                            <TableHeader {...getHeaderProps({ header })}>
                                                {header.header}
                                            </TableHeader>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow key={row.id}>
                                            {/* {row.cells.map(cell => ( */}
                                                <TableCell key={row.cells[0].id}>{row.cells[0].value}</TableCell>
                                                <TableCell key={row.cells[1].id}>{row.cells[1].value}</TableCell>
                                                <TableCell key={row.cells[2].id} onClick={(event) => this.editMVP(event, index, row)} className="tableEditIcon">{this.state.editSvg}</TableCell>
                                                <TableCell key={row.cells[3].id} onClick={(event) => this.deleteMVP(event, index, row)} className="tableDeleteIcon">{this.state.deleteSvg}</TableCell>
                                            {/* ))} */}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>)}
                />
            ) : '';

        return (
            <div className="addMVP">
                <div className="addMVP__header">
                    <h3>2. MVP Information</h3>
                    <p> Some details about this form section</p>
                </div>
                <div className="addMVP__table">
                    {tableData}
                </div>
                <div className="addMVP__button">
                    <Button onClick={() => this.setState({ modalOpen: true })}>+ Add MVP</Button>
                    {modal}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    mvpDetails: state.MvpDetails,
    isValid: state.Validate,
    mvpList: state.MVP
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            resetMvpDetails,
            mvp,
            resetFormValid,
            deleteMvp,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(AddMVP);