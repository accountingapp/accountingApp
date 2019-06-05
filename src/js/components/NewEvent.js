import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
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
      stages: [
        {
          stageNumber: "1",
          description: "Test",
          financialImpact: "yes",
          accounts: []
        }
      ]
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleStageChange(e, stageIndex) {
    let currentStages = this.state.stages;
    currentStages.stageIndex[e.target.id] = e.target.value;

    this.setState({
      stages: currentStages
    });
  }

  handleAccountChange(e, stageIndex, accountNumber) {
    let currentStages = this.state.stages;
    currentStages.stageIndex.accounts.accountNumber[e.target.id] =
      e.target.value;

    this.setState({
      stages: currentStages
    });
  }

  addStage() {
    let currentStages = this.state.stages;
    let stageObject = {
      stageNumber: currentStages.length + 1,
      stageDescription: "",
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
      accountNumber: "",
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
    console.log(this.state.stages[0].stageNumber);
    return (
      <div>
        <Row>
          <Col md={8} className="mainNewEventPanel">
            <div className="eventHeader">
              <h3>Create a New Event</h3>
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

            {this.state.stages.length ? (
              <div>
                {this.state.stages.map((stage, index) => (
                  <div key={`stage-${index}`} className="eventHeader">
                    <h3>{`Stage ${stage.stageNumber}`}</h3>
                    <div className="formGroup formGroupStage">
                      <label>Stage Description</label>
                      <input
                        id="stageDescription"
                        value={this.state.stages[index].stageDescription}
                        onChange={e => this.handleStageChange(e, index)}
                        className="inputField inputFieldStage"
                      />

                      <ButtonToolbar className="financialImpactButtons">
                        <label>Financial Impact</label>
                        <Button
                          className={`financialImpactButton ${
                            this.state.stages[index].financialImpact !== "Yes"
                              ? "unselectedButton"
                              : ""
                          }`}
                          onClick={() => this.handleStageChange(e, index)}
                        >
                          Yes
                        </Button>
                        <Button
                          className={`financialImpactButton ${
                            this.state.stages[index].financialImpact !== "No"
                              ? "unselectedButton"
                              : ""
                          }`}
                          onClick={() => this.handleStageChange(e, index)}
                        >
                          No
                        </Button>
                      </ButtonToolbar>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            <Button className="newStageButton" onClick={() => this.addStage()}>
              New Stage
            </Button>
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
