import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MaterialTable from 'material-table';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { opportunities } from '../../Redux/actions/opportunities';
import 'material-icons';
import XLSX from 'xlsx';

class OpportunityTableMaterial extends Component {

    state = {
        page: 0,
        rowsPerPage: 10,
        opportunitiesData: [],
        columns: [
            { title: 'Account Name', field: 'accountName', minWidth: 350, align: 'left' },
            { title: 'Sector', field: 'sector', minWidth: 170, align: 'left' },
            { title: 'Industry', field: 'industry', minWidth: 350, align: 'left' },
            { title: 'Growth Platform', field: 'growthPlatform', minWidth: 170, align: 'left' },
            { title: 'Service Line', field: 'serviceLine', minWidth: 170, align: 'left' },
            { title: 'Practice', field: 'practice', minWidth: 170, align: 'left' },
            { title: 'Delivered By', field: 'deliveredBy', minWidth: 170, align: 'left' },
            { title: 'IOT', field: 'iot', minWidth: 170, align: 'left' },
            { title: 'MVP Name', field: 'mvpName', minWidth: 170, align: 'left' },
            { title: 'What are the emerging technologies that are being used in this MVPs?', field: 'emergingTechnologies', minWidth: 350, align: 'center' },
            { title: 'How long does it take to deliver this MVP?(in weeks)', field: 'weeksRequired', minWidth: 350, align: 'center' },
            { title: 'How many squads are running in parallel?', field: 'parallelSquads', minWidth: 350, align: 'center' },
            { title: 'Is this MVP being scalled, or enhanced or a part of a large transformation?', field: 'transformationType', minWidth: 350, align: 'center' },
            { title: 'What stage is this MVP in currently', field: 'mvpStage', minWidth: 250, align: 'center' },
            { title: 'Is this MVP being setup with hardened architecture', field: 'isMVPHardned', minWidth: 250, align: 'center' },
            { title: 'Is this MVP being setup with reliability, Preventive maintenance systems?', field: 'isMVPReliability', minWidth: 350, align: 'center' },
            { title: 'Is this MVP being setup with monitoring tools?', field: 'isMVPMonitored', minWidth: 250, align: 'center' },
            { title: 'Does this MVP established have dev-ops pipeline from continuous business planning to delivery?', field: 'isMVPDevopsed', minWidth: 360, align: 'center' },
            { title: 'No of Geo FTEs', field: 'geoFTEs', minWidth: 200, align: 'center' },
            { title: 'No of CIClanded FTEs', field: 'cicFTEs', minWidth: 200, align: 'center' },
            { title: 'No of CIC offshore FTEs', field: 'cicOffshoreFTEs', minWidth: 200, align: 'center' },
            { title: 'Is design thinking applied?', field: 'designThinkingApplied', minWidth: 250, align: 'center' },
            { title: 'Are you practicing or starting to adopt DevOps', field: 'devOps', minWidth: 300, align: 'center' },
            { title: 'Are you practicing hypothesis-driven development?', field: 'hypothesisDrivenDevelopment', minWidth: 350, align: 'center' },
            { title: 'Are you practicing or starting to adopt Lean Startup', field: 'leanStartup', minWidth: 300, align: 'center' },
            { title: 'Are you practicing or starting to adopt Site Reliability Engineering (SRE)', field: 'SRE', minWidth: 350, align: 'center' },
            { title: 'Does the operating model include an investment board managed by IBM and client teams?', field: 'investmentBoard', minWidth: 370, align: 'center' },
            { title: 'Are you leveraging T-Shape cross functional skill sets?', field: 'leveragingTShape', minWidth: 300, align: 'center' },
            { title: 'Does the client perceive IBM as a value partner or low-cost provider?', field: 'valuePartner', minWidth: 300, align: 'center' },
        ]
    }

    componentDidMount() {
        this.props.opportunities();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.opportunitiesData !== prevState.opportunitiesData) {
            return { opportunitiesData: nextProps.opportunitiesData }
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.opportunitiesData !== this.props.opportunitiesData) {
            const opportunitiesData = this.props.opportunitiesData;
            this.setState({ opportunitiesData })

        }
    }

    renderInsideRow = column => {

    }

    renderRows = (row, index) => {
        const mvpListLength = row.mvpList.length,
            mvpList = row.mvpList;
        let rowList = [];

        _.each(mvpList, (mvp, index) => {
            rowList.push((
                <TableRow tabIndex={-1} key={row.code}>
                    {this.state.columns.map((column) => {
                        const value = row[column.field] || mvp[column.field];
                        return (
                            <TableCell
                                className={(index > 0 && mvp[column.field] === undefined) ? "table-row" : ""}
                                rowSpan={(index === 0 && mvp[column.field] === undefined) ? mvpListLength : 1}
                                key={column.field}
                                align={column.align}
                            >
                                {value}
                            </TableCell>
                        );
                    })}
                </TableRow>
            ))
        })
        return (rowList)

    };

    onSearchChange = event => {
        console.log('event from search', event);
        // const regularExp = new RegExp(`^${event}`, "i"),
        //     opportunitiesData = this.state.opportunitiesData;

        // const searchedList = _.filter(opportunitiesData)

    }

    render() {
        const pageSize = 10,
            pageOptions = [10, 25, 50, 100, 200];

        return (
            <MaterialTable
                id="tableData"
                title="Opportunity Data"
                columns={this.state.columns}
                data={this.props.opportunitiesData}
                options={{
                    pageSize: pageSize,
                    pageSizeOptions: pageOptions,
                    sorting: true,
                    search: true,
                    exportButton: true,
                    filtering: false,
                    exportCsv: (columns, data) => {
                        let object = [];
                        _.each(data, data => {
                            const mvpLength = data.mvpList.length;
                            for (let i = 0; i < mvpLength; i++) {
                                const restructuredData = { ...data, ...data.mvpList[i] };
                                delete restructuredData.mvpList;
                                object.push(restructuredData);
                            }
                        })
                        console.log('export data ', columns, data, object);

                        /* make the worksheet */
                        var ws = XLSX.utils.json_to_sheet(object);

                        /* add to workbook */
                        var wb = XLSX.utils.book_new();
                        XLSX.utils.book_append_sheet(wb, ws, "Opportunities");

                        /* generate an XLSX file */
                        XLSX.writeFile(wb, "sheetjs.xlsx");
                    }
                }}
                onSearchChange={this.onSearchChange}
                components={{
                    Header: props => {
                        return (
                            <TableHead>
                                <TableRow>
                                    {_.map(this.state.columns, column => <TableCell key={column.field} style={{ minWidth: column.minWidth }} align={column.align}>{column.title}</TableCell>)}
                                </TableRow>
                            </TableHead>
                        )
                    },
                    Row: ({ data }) => {
                        return this.renderRows(data)
                    }
                }}
            />
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(OpportunityTableMaterial);
