// import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import _ from 'lodash';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { opportunities } from '../../Redux/actions/opportunities';

// const columns = [
//     { label: 'Account Name', id: 'accountName', minWidth: 350 },
//     { label: 'Sector', id: 'sector', minWidth: 170 },
//     { label: 'Industry', id: 'industry', minWidth: 350 },
//     { label: 'Growth Platform', id: 'growthPlatform', minWidth: 170 },
//     { label: 'Service Line', id: 'serviceLine', minWidth: 170 },
//     { label: 'Practice', id: 'practice', minWidth: 170 },
//     { label: 'Delivered By', id: 'deliveredBy', minWidth: 170 },
//     { label: 'IOT', id: 'iot', minWidth: 170 },
//     { label: 'MVP Name', id: 'mvpName', minWidth: 170 },
//     { label: 'What are the emerging technologies that are being used in this MVPs?', id: 'emergingTechnologies', minWidth: 350 },
//     { label: 'How long does it take to deliver this MVP?(in weeks)', id: 'weeksRequired', minWidth: 350 },
//     { label: 'How many squads are running in parallel?', id: 'parallelSquads', minWidth: 350 },
//     { label: 'Is this MVP being scalled, or enhanced or a part of a large transformation?', id: 'transformationType', minWidth: 350 },
//     { label: 'What stage is this MVP in currently', id: 'mvpStage', minWidth: 250 },
//     { label: 'Is this MVP being setup with hardened architecture', id: 'isMVPHardned', minWidth: 250 },
//     { label: 'Is this MVP being setup with reliability, Preventive maintenance systems?', id: 'isMVPReliability', minWidth: 350 },
//     { label: 'Is this MVP being setup with monitoring tools?', id: 'isMVPMonitored', minWidth: 250 },
//     { label: 'Does this MVP established have dev-ops pipeline from continuous business planning to delivery?', id: 'isMVPDevopsed', minWidth: 360 },
//     { label: 'No of Geo FTEs', id: 'geoFTEs', minWidth: 200 },
//     { label: 'No of CIClanded FTEs', id: 'cicFTEs', minWidth: 200 },
//     { label: 'No of CIC offshore FTEs', id: 'cicOffshoreFTEs', minWidth: 200 },
//     { label: 'Is design thinking applied?', id: 'designThinkingApplied', minWidth: 250 },
//     { label: 'Are you practicing or starting to adopt DevOps', id: 'devOps', minWidth: 300 },
//     { label: 'Are you practicing hypothesis-driven development?', id: 'hypothesisDrivenDevelopment', minWidth: 350 },
//     { label: 'Are you practicing or starting to adopt Lean Startup', id: 'leanStartup', minWidth: 300 },
//     { label: 'Are you practicing or starting to adopt Site Reliability Engineering (SRE)', id: 'SRE', minWidth: 350 },
//     { label: 'Does the operating model include an investment board managed by IBM and client teams?', id: 'investmentBoard', minWidth: 370 },
//     { label: 'Are you leveraging T-Shape cross functional skill sets?', id: 'leveragingTShape', minWidth: 300 },
//     { label: 'Does the client perceive IBM as a value partner or low-cost provider?', id: 'valuePartner', minWidth: 300 },
// ];

// const useStyles = makeStyles({
//     root: {
//         width: '100%',
//     },
//     container: {
//         maxHeight: 440,
//     },
// });

// class OpportunityTableMaterial extends Component {

//     state = {
//         page: 0,
//         rowsPerPage: 10
//     }

//     componentDidMount() {
//         this.props.opportunities();
//     }

//     renderInsideRow = column => {

//     }

//     renderRows = (row, index) => {

//         const mvpListLength = row.mvpList.length,
//             mvpList = row.mvpList;
//         let rowList = [];

//         _.each(mvpList, (mvp, index) => {
//             rowList.push((
//                 <TableRow tabIndex={-1} key={row.code}>
//                     {columns.map((column) => {
//                         const value = row[column.id] || mvp[column.id];
//                         console.log('value', value);
//                         return (
//                             <TableCell
//                                 className={(index > 0 && mvp[column.id] === undefined) ? "table-row" : ""}
//                                 rowSpan={(index === 0 && mvp[column.id] === undefined) ? mvpListLength : 1}
//                                 key={column.id}
//                                 align={column.align}>
//                                 {column.format && typeof value === 'number' ? column.format(value) : value}
//                             </TableCell>
//                         );
//                     })}
//                 </TableRow>
//             ))
//         })
//         console.log('rowList', rowList);
//         return (rowList)

//     };

//     render() {
//         const rows = this.props.opportunitiesData;
//         const page = this.state.page;
//         const rowsPerPage = this.state.rowsPerPage;

//         const handleChangePage = (event, newPage) => {
//             this.setState({ page: newPage });
//         };

//         const handleChangeRowsPerPage = (event) => {
//             this.setState({
//                 rowsPerPage: event.target.value,
//                 page: 0
//             })
//         };

//         return (
//             <Paper className="table">
//                 <TableContainer className="table__container">
//                     <Table stickyHeader aria-label="sticky table">
//                         <TableHead>
//                             <TableRow>
//                                 {columns.map((column) => (
//                                     <TableCell
//                                         key={column.id}
//                                         align={column.align}
//                                         style={{ minWidth: column.minWidth }}
//                                     >
//                                         {column.label}
//                                     </TableCell>
//                                 ))}
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
//                                 return this.renderRows(row, index);
//                             })}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//                 <TablePagination
//                     rowsPerPageOptions={[10, 25, 100]}
//                     component="div"
//                     count={rows.length}
//                     rowsPerPage={rowsPerPage}
//                     page={page}
//                     onChangePage={handleChangePage}
//                     onChangeRowsPerPage={handleChangeRowsPerPage}
//                 />
//             </Paper>
//         );
//     }
// }

// const mapStateToProps = state => ({
//     opportunitiesData: state.Opportunities
// });

// const mapDispatchToProps = dispatch =>
//     bindActionCreators(
//         {
//             opportunities,
//         },
//         dispatch,
//     );

// export default connect(mapStateToProps, mapDispatchToProps)(OpportunityTableMaterial);

import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}