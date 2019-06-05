import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import axios from "axios";

class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      stages: []
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  addStage() {
    let currentStages = this.state.stages;
    let stageObject = {
      stage: "",
      description: "",
      financialImpact: "",
      accounts: []
    };
    currentStages.push(stageObject);

    this.setState({
      stages: currentStages
    });
  }

  addAccount(stageNumber) {
    let currentStages = this.state.stages;
    let accountObject = {
      accountDescription: "",
      debitCredit: "",
      amount: "",
      currency: "",
      accountType: "",
      increaseDecrease: ""
    };

    currentStages[stageNumber].accounts.push(accountObject);

    this.setState({
      stages: currentStages
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={8} className="mainNewEventPanel">
            <div className="eventHeader">
              <h3>Create a new Event</h3>
              <div className="formGroup">
                <label>Title</label>
                <input
                  id="title"
                  value={this.state.title}
                  onChange={e => this.handleChange(e)}
                  className="inputField"
                />
              </div>

              <div className="formGroup">
                <label>Description</label>
                <input
                  id="description"
                  value={this.state.description}
                  onChange={e => this.handleChange(e)}
                  className="inputField"
                />
              </div>
            </div>

            <div className="eventHeader">
              <h3>Stage 1</h3>
              <div className="formGroup">
                <label>Account</label>
                <input
                  id="account"
                  value={this.state.account}
                  onChange={e => this.handleChange(e)}
                  className="inputField"
                />
              </div>
            </div>
          </Col>
          <Col md={4} className="sideNewEventPanel">
            <h3>Additional Panel Info</h3>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewEvent;
