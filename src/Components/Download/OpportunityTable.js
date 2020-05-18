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
    TableCell
} from 'carbon-components-react';

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
            { header: 'MVP Name', key: 'mvpList.mvpName' },
            { header: 'What are the emerging technologies that are being used in this MVPs?', key: 'mvpList.emergingTechnologies' },
            { header: 'How long does it take to deliver this MVP?(in weeks)', key: 'mvpList.weeksRequired' },
            { header: 'How many squads are running in parallel?', key: 'mvpList.parallelSquads' },
            { header: 'Is this MVP being scalled, or enhanced or a part of a large transformation?', key: 'mvpList.transformationType' },
            { header: 'What stage is this MVP in currently', key: 'mvpList.mvpStage' },
            { header: 'Is this MVP being setup with hardened architecture', key: 'mvpList.isMVPHardned' },
            { header: 'Is this MVP being setup with reliability, Preventive maintenance systems?', key: 'mvpList.isMVPReliability' },
            { header: 'Is this MVP being setup with monitoring tools?', key: 'mvpList.isMVPMonitored' },
            { header: 'Does this MVP established have dev-ops pipeline from continuous business planning to delivery?', key: 'mvpList.isMVPDevopsed' },
            { header: 'No of Geo FTEs', key: 'mvpList.geoFTEs' },
            { header: 'No of CIClanded FTEs', key: 'mvpList.cicFTEs' },
            { header: 'No of CIC offshore FTEs', key: 'mvpList.cicOffshoreFTEs' },
            { header: 'Is design thinking applied?', key: 'mvpList.designThinkingApplied' },
            { header: 'Are you practicing or starting to adopt DevOps', key: 'mvpList.devOps' },
            { header: 'Are you practicing hypothesis-driven development?', key: 'mvpList.hypothesisDrivenDevelopment' },
            { header: 'Are you practicing or starting to adopt Lean Startup', key: 'mvpList.leanStartup' },
            { header: 'Are you practicing or starting to adopt Site Reliability Engineering (SRE)', key: 'mvpList.SRE' },
            { header: 'Does the operating model include an investment board managed by IBM and client teams?', key: 'mvpList.investmentBoard' },
            { header: 'Are you leveraging T-Shape cross functional skill sets?', key: 'mvpList.leveragingTShape' },
            { header: 'Does the client perceive IBM as a value partner or low-cost provider?', key: 'mvpList.valuePartner' },
        ]
    }

    render() {
        return (
            <DataTable
                rows={this.props.opportnities}
                headers={this.state.column}
                render={({ rows,
                    headers,
                    getHeaderProps,
                    getRowProps,
                    getSelectionProps,
                    getBatchActionProps,
                    onInputChange,
                    selectedRows, }) => (
                        <TableContainer title="DataTable with batch actions">
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
                                        <TableSelectAll {...getSelectionProps()} />
                                        {headers.map(header => (
                                            <TableHeader {...getHeaderProps({ header })}>
                                                {header.header}
                                            </TableHeader>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => (
                                        <TableRow {...getRowProps({ row })}>
                                            <TableSelectRow {...getSelectionProps({ row })} />
                                            {/* {row.cells.map(cell => ( */}
                                                <TableCell key={row.cells[0].id}>{row.cells[0].value}</TableCell>
                                                <TableCell key={row.cells[1].id}>{row.cells[1].value}</TableCell>
                                                <TableCell key={row.cells[2].id}>{row.cells[2].value}</TableCell>
                                                <TableCell key={row.cells[3].id}>{row.cells[3].value}</TableCell>
                                                <TableCell key={row.cells[4].id}>{row.cells[4].value}</TableCell>
                                                <TableCell key={row.cells[5].id}>{row.cells[5].value}</TableCell>
                                                <TableCell key={row.cells[6].id}>{row.cells[6].value}</TableCell>
                                                {console.log('data in table', row.cells[7])}
                                            {row.cells[7].map(cell => (
                                                <TableCell key={cell.id}>{cell.value}</TableCell>
                                            ))}
                                            {/* ))} */}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>)}
            />
        )
    }
}


const mapStateToProps = state => ({
    opportnities: state.Opportunities
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(OpportunityTable);