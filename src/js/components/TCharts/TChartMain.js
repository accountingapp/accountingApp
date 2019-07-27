import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Table } from "react-bootstrap";
import TChart from "./TChart";

class TChartMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credits: [],
      debits: []
    };
  }

  render() {
    const { props } = this.props;
    return (
      <div>
        <Container>
          <Row>
            <Col md={4}>
              <TChart />
            </Col>
            <Col md={4}>
              <TChart />
            </Col>
            <Col md={4}>
              <TChart />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <TChart />
            </Col>
            <Col md={4}>
              <TChart />
            </Col>
            <Col md={4}>
              <TChart />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TChartMain;
