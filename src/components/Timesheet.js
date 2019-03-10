import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';



  var products = [{
    id: "Regular Hours",
    numberOfHours: 8,
    TotalHours:""
}, {
    id: "Extra Hours",
    numberOfHours: 0,
    TotalHours:""
}];

function onAfterInsertRow(row) {
    let newRowStr = '';
  
    for (const prop in row) {
      newRowStr += prop + ': ' + row[prop] + ' \n';
    }
    alert('The new row is:\n ' + newRowStr);
  }

function onAfterDeleteRow(rowKeys) {
    alert('The rowkey you drop: ' + rowKeys);
  }
  
  const options = {
    afterDeleteRow: onAfterDeleteRow,  // A hook for after droping rows.
    afterInsertRow: onAfterInsertRow   // A hook for after insert rows
  };
  
  // If you want to enable deleteRow, you must enable row selection also.
  const selectRowProp = {
    mode: 'checkbox'
  };

class Timesheet extends Component {
    render() {
        return (
        <div className="Timesheet">
        <Container>
             <BootstrapTable data={products}  deleteRow={ true } selectRow={ selectRowProp }  insertRow={ true } options={ options }>
          <TableHeaderColumn dataField='id' isKey>Types of Hours</TableHeaderColumn>
          <TableHeaderColumn dataField='numberOfHours'>Monday</TableHeaderColumn>
          <TableHeaderColumn dataField='numberOfHours'>Tuesday</TableHeaderColumn>
          <TableHeaderColumn dataField='numberOfHours'>Wednesday</TableHeaderColumn>
          <TableHeaderColumn dataField='numberOfHours'>Thursday</TableHeaderColumn>
          <TableHeaderColumn dataField='numberOfHours'>Friday</TableHeaderColumn>
          <TableHeaderColumn dataField='numberOfHours'>Saturday</TableHeaderColumn>
          <TableHeaderColumn dataField='numberOfHours'>Sunday</TableHeaderColumn>
          <TableHeaderColumn dataField='TotalHours'>Total Hours</TableHeaderColumn>
        </BootstrapTable>
        </Container>
        </div>
    );
  }
}

export default Timesheet;