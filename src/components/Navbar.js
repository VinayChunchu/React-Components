import React, { Component } from 'react';
import { Nav, NavDropdown, Container, Col, Row } from 'react-bootstrap';
import Timesheet from './Timesheet';



class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
     
      <Container>
          <Row>
      <Col md={6}><Nav.Link href="#"><h3>Trackboard</h3></Nav.Link></Col>

      <Col md={6}>
     
        <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#logout">Logout</Nav.Link>
    </Nav>

    </Col>

    </Row>
    

    </Container>

    <br/>
    <br/>

    <Timesheet/>

      </div>
    );
  }
}

export default Navbar;
