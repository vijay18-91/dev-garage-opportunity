import React, { Component } from 'react';
import Table from '../Components/Download/OpportunityTable';
import MaterialTable from '../Components/Download/OpportunityTableMaterial';
import Hybrid from '../Components/Download/OpportunityDataHybrid';
import Tabular from '../Components/Download/OpportunityDataTabular';

class DownloadTable extends Component {
    render() {
        return (
            // <Table />
            // <MaterialTable />
            <Hybrid />
            // <Tabular />
        )
    }
}

export default DownloadTable;