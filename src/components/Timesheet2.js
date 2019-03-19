import React, { Component } from 'react';
import { Container, Table, Button, Row, Col } from 'react-bootstrap';


class Timesheet2 extends Component {
    render() {
        var products = [{
                        "id" : "T1001",
                        "weekNumber" : "3",
                        "startDate" : "March 17, 2019",
                        "endDate" : "March 23, 2019",
                        "Status" : "Pending",
                        "totalNumberOfHours"  : "40",
                    },
                    {
                        "id" : "T1002",
                        "weekNumber" : "4",
                        "startDate" : "March 2, 2019",
                        "endDate" : "March 7, 2019",
                        "Status" : "Approved",
                        "totalNumberOfHours"  : "40"
                    },
                    {
                        "id" : "T1003",
                        "weekNumber" : "5",
                        "startDate" : "March 13, 2019",
                        "endDate" : "March 18, 2019",
                        "Status" : "Approved",
                        "totalNumberOfHours"  : "40"
                    }];
        return (
        <div className="Timesheet2">
            
            <Container>

                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>

        </div>
    );
  }
}

export default Timesheet2;