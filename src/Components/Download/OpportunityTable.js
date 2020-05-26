import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    DataTable,
    TableContainer,
    TableToolbar,
    TableToolbarContent,
    TableToolbarSearch,
    Button,
    TableHead,
    TableRow,
    TableSelectAll,
    Table,
    TableHeader,
    TableBody,
    TableSelectRow,
    TableCell,
    Pagination
} from 'carbon-components-react';
import '../../Styles/dataTable.scss';
import { opportunities } from '../../Redux/actions/opportunities';
import HOC from '../../Utility/HOC';
import TablePagination from '@material-ui/core/TablePagination';

class OpportunityTable extends Component {

    state = {
        column: [
            { header: 'Account Name', key: 'accountName' },
            { header: 'Sector', key: 'sector' },
            { header: 'Industry', key: 'industry' },
            { header: 'Growth Platform', key: 'growthPlatform' },
            { header: 'Service Line', key: 'serviceLine' },
            { header: 'Practice', key: 'practice' },
            { header: 'Delivered By', key: 'deliveredBy' },
            { header: 'MVP Name', key: 'mvpName' },
            { header: 'What are the emerging technologies that are being used in this MVPs?', key: 'emergingTechnologies' },
            { header: 'How long does it take to deliver this MVP?(in weeks)', key: 'weeksRequired' },
            { header: 'How many squads are running in parallel?', key: 'parallelSquads' },
            { header: 'Is this MVP being scalled, or enhanced or a part of a large transformation?', key: 'transformationType' },
            { header: 'What stage is this MVP in currently', key: 'mvpStage' },
            { header: 'Is this MVP being setup with hardened architecture', key: 'isMVPHardned' },
            { header: 'Is this MVP being setup with reliability, Preventive maintenance systems?', key: 'isMVPReliability' },
            { header: 'Is this MVP being setup with monitoring tools?', key: 'isMVPMonitored' },
            { header: 'Does this MVP established have dev-ops pipeline from continuous business planning to delivery?', key: 'isMVPDevopsed' },
            { header: 'No of Geo FTEs', key: 'geoFTEs' },
            { header: 'No of CIClanded FTEs', key: 'cicFTEs' },
            { header: 'No of CIC offshore FTEs', key: 'cicOffshoreFTEs' },
            { header: 'Is design thinking applied?', key: 'designThinkingApplied' },
            { header: 'Are you practicing or starting to adopt DevOps', key: 'devOps' },
            { header: 'Are you practicing hypothesis-driven development?', key: 'hypothesisDrivenDevelopment' },
            { header: 'Are you practicing or starting to adopt Lean Startup', key: 'leanStartup' },
            { header: 'Are you practicing or starting to adopt Site Reliability Engineering (SRE)', key: 'SRE' },
            { header: 'Does the operating model include an investment board managed by IBM and client teams?', key: 'investmentBoard' },
            { header: 'Are you leveraging T-Shape cross functional skill sets?', key: 'leveragingTShape' },
            { header: 'Does the client perceive IBM as a value partner or low-cost provider?', key: 'valuePartner' },
        ],
        page: 0,
        rowsPerPage: 10
    }

    componentDidMount() {
        this.props.opportunities();
    }

    renderRows = (rows, getRowProps, page, rowsPerPage) => {
        const data = this.props.opportunitiesData;
        return rows.map((row, index) => {
            const rowIndex = index,
                mvpListLength = this.props.opportunitiesData[index].mvpList.length;
            let rowList = [];
            _.each(this.props.opportunitiesData[index].mvpList, (mvp, index) => {
                // let alteredRow = index === 0 ? row : row.splice(0,7);
                rowList.push((
                    <TableRow {...getRowProps({ row })}>
                        {row.cells.map(cell => {
                            return (
                                <TableCell
                                    rowSpan={(data[rowIndex][cell.info.header] && index === 0) ? mvpListLength : 1}
                                    key={cell.id}
                                    className={(data[rowIndex][cell.info.header] && index !== 0) ? "table-row" : ""}>
                                    {data[rowIndex][cell.info.header] || data[rowIndex].mvpList[index][cell.info.header]}
                                </TableCell>)
                        })}
                    </TableRow>
                ));
            });
            return rowList;
        })
    }

    render() {
        console.log('opportunitiesData', this.props.opportunitiesData);
        const page = this.state.page;
        const rowsPerPage = this.state.rowsPerPage;

        const handleChangePage = (event, newPage) => {
            this.setState({ page: newPage });
        };

        const handleChangeRowsPerPage = (event) => {
            this.setState({
                rowsPerPage: event.target.value,
                page: 0
            })
        };
        return (
            <DataTable
                rows={this.props.opportunitiesData}
                headers={this.state.column}
                render={({ rows,
                    headers,
                    getHeaderProps,
                    getRowProps,
                    getSelectionProps,
                    getBatchActionProps,
                    onInputChange,
                    selectedRows, }) => (
                        <HOC>
                            <TableContainer title="Opportunities List">
                                <TableToolbar>
                                    <TableToolbarContent>
                                        <TableToolbarSearch
                                            tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                                            onChange={onInputChange}
                                        />
                                        <Button
                                            tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                                            onClick={() => console.log('clicked')}
                                            size="small"
                                            kind="primary">
                                            Download
                                    </Button>
                                    </TableToolbarContent>
                                </TableToolbar>
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
                                        {this.renderRows(rows, getRowProps, page, rowsPerPage)}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Pagination
                                backwardText="Previous page"
                                forwardText="Next page"
                                itemsPerPageText="Items per page:"
                                page={1}
                                pageNumberText="Page Number"
                                pageSize={10}
                                pageSizes={[
                                    10,
                                    20,
                                    30,
                                    40,
                                    50
                                ]}
                                totalItems={rows.length}
                            />
                        </HOC>)}
            />
        )
    }
}

const mapStateToProps = state => ({
    opportunitiesData: state.Opportunities
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            opportunities,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(OpportunityTable);