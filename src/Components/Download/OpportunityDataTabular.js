import React from 'react';
import {
    AggregateFunctions,
    ColumnDataType,
    createColumn,
    ColumnSortDirection
  } from "tubular-common";
  import { DataGrid } from "tubular-react";
  
  const columns = [
    createColumn("OrderID", {
      dataType: ColumnDataType.NUMERIC,
      filtering: true,
      isKey: true,
      label: "Id",
      sortDirection: ColumnSortDirection.ASCENDING,
      sortOrder: 1,
      sortable: true
    }),
    createColumn("CustomerName", {
      aggregate: AggregateFunctions.COUNT,
      filtering: true,
      searchable: true,
      sortable: true
    }),
    createColumn("ShippedDate", {
      dataType: ColumnDataType.DATE_TIME,
      filtering: true,
      sortable: true
    }),
    createColumn("ShipperCity")
  ];
  
const GridExample = () => {
    return (
      <div>
        <DataGrid
          gridName="Tubular-React"
          columns={columns}
          dataSource="https://tubular.azurewebsites.net/api/orders/paged"
        />
      </div>
    );
  };

  export default GridExample;