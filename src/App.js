import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import Sidebar from './components/Sidebar';
import { Container,Row,Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Sidebar/>
      

     {/* <Container>
        <Row>
          <Col xs={2}><Sidebar/></Col>
          <Col xs={10}><Navbar/></Col>
        </Row>
      </Container>
     */}

      {/*  <header className="App-header">
         
    </header> */}
      </div>
    );
  }
}

export default App;
