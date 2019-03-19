import React, { Component } from 'react';
import { Button,Modal,Table } from 'react-bootstrap';



class InputModal extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

  render() {
    return (
        <>
        <Button variant="primary" onClick={this.handleShow}>
            Edit
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} size="lg" >
          <Modal.Header closeButton id="contained-modal-title-vcenter">
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body >
          <Table size="sm">
            <thead >
                <tr>
                <th>Week</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                <td style={{ width: "100%"}}>March 17, 2019 – March 23, 2019</td>
                <td><input style={{ width: "100%"}}></input></td>
                <td><input style={{ width: "100%"}}></input></td>
                <td><input style={{ width: "100%"}}></input></td>
                <td><input style={{ width: "100%"}}></input></td>
                <td><input style={{ width: "100%"}}></input></td>
                <td><input style={{ width: "100%"}}></input></td>
                <td><input style={{ width: "100%"}}></input></td>
                </tr>
            </tbody>
        </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCancel}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default InputModal;
