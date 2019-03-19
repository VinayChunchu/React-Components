import React, { Component } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import InputModal from './InputModal';



class Timesheet extends Component {
    render() {
        return (
        <div className="Timesheet">
        <br/>
        <Container>
          <Table striped bordered hover>
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Week</th>
      <th>Status</th>
      <th>Total Number of Hours</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>March 17, 2019 – March 23, 2019</td>
      <td>Pending</td>
      <td>40</td>
      <td><a style={{cursor: 'pointer'}}><InputModal/></a></td>
    </tr>
    <tr>
      <td>2</td>
      <td>March 17, 2019 – March 23, 2019</td>
      <td>Approved</td>
      <td>40</td>
      <td><a style={{cursor: 'pointer'}}><InputModal/></a></td>
    </tr>
    <tr>
    <td>2</td>
      <td>March 17, 2019 – March 23, 2019</td>
      <td>Approved</td>
      <td>40</td>
      <td><a style={{cursor: 'pointer'}}><InputModal/></a></td>
    </tr>
  </tbody>
</Table>
</Container>
        </div>
    );
  }
}

export default Timesheet;