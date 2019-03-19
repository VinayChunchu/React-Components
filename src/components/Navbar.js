import React, { Component } from 'react';
import { Nav, NavDropdown, Container, Col, Row } from 'react-bootstrap';
import Timesheet from './Timesheet';



class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
     
      <Container>
          <Row>
      <Col md={6}><Nav.Link href="#"><h2>Trackboard</h2></Nav.Link></Col>

      <Col md={6}>
     
        <Nav>
      <Nav.Link href="#features">Saika Technologies</Nav.Link>
      <NavDropdown title="Vinay Chunchu" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#logout">Feedback</Nav.Link>
    </Nav>

    </Col>

    </Row>
    

    </Container>
    
      </div>
    );
  }
}

export default Navbar;
