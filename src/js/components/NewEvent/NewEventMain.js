import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import AccountTable from "./AccountTable";
import SidePanel from "./SidePanel";
import axios from "axios";

class NewEventMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionType: "",
      event: {
        title: "",
        description: "",
        company: "",
        date: new Date(),
        documentNumber: "",
        customer: "",
        vendor: "",
        invoice: "",
        localCurrency: ""
      },
      stages: [
        {
          description: "Test",
          financialImpact: "yes",
          date: new Date(),
          documentNumber: "",
          customer: "",
          vendor: "",
          invoice: "",
          owner: "",
          department: "",
          application: "",
          issues: "",
          accounts: [
            {
              accountDescription: "Cost of Goods Sold",
              debitCredit: "Debit",
              amount: "4,500.00",
              currency: "USD",
              accountType: "Expense",
              increaseDecrease: "Increase"
            },
            {
              accountDescription: "Inventory",
              debitCredit: "Credit",
              amount: "(4,500.00)",
              currency: "USD",
              accountType: "Asset",
              increaseDecrease: "Decrease"
            }
          ]
        }
      ],
      accountSearchResults: []
    };
  }

  handleChange(e) {
    let eventObject = this.state.event;
    eventObject[e.target.id] = e.target.value;
    this.setState({
      event: eventObject
    });
  }

  handleStageChange(e, stageIndex) {
    let currentStages = this.state.stages;
    currentStages[stageIndex][e.target.id] = e.target.value;

    this.setState({
      stages: currentStages,
      sectionType: `stage_${stageIndex}`
    });
  }

  handleAccountChange(stageIndex, e, accountIndex) {
    let currentStages = this.state.stages;
    currentStages[stageIndex].accounts[accountIndex][e.target.id] =
      e.target.value;

    this.setState({
      stages: currentStages,
      sectionType: "account"
    });

    this.getAccountByDescription(e.target.value);
  }

  getAccountByDescription(searchCriteria) {
    axios.get(`/accountDescription/${searchCriteria}`).then(results => {
      console.log("ACCOUNT SEARCH: ", results.data.slice(0, 2));
      this.setState({
        accountSearchResults: searchCriteria ? results.data.slice(0, 2) : []
      });
    });
  }

  addStage() {
    let currentStages = this.state.stages;
    let stageObject = {
      stageDescription: "",
      financialImpact: "",
      accounts: [
        {
          accountDescription: "",
          debitCredit: "",
          amount: "",
          currency: "",
          accountType: "",
          increaseDecrease: ""
        }
      ]
    };
    currentStages.push(stageObject);

    this.setState({
      stages: currentStages
    });
  }

  deleteStage(e, index) {
    let currentStages = this.state.stages;
    currentStages.splice(index, 1);
    this.setState({
      stages: currentStages
    });
  }

  addAccount(stageIndex) {
    let currentStages = this.state.stages;
    let accountObject = {
      accountDescription: "",
      debitCredit: "",
      amount: "",
      currency: "",
      accountType: "",
      increaseDecrease: ""
    };

    currentStages[stageIndex].accounts.push(accountObject);

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
              <h3>Create a New Event</h3>
              <div className="formGroup">
                <label>Title</label>
                <input
                  id="title"
                  value={this.state.event.title}
                  onChange={e => this.handleChange(e)}
                  className="inputField"
                  onClick={() => this.setState({ sectionType: "event" })}
                />
              </div>

              <div className="formGroup">
                <label>Description</label>
                <input
                  id="description"
                  value={this.state.event.description}
                  onChange={e => this.handleChange(e)}
                  className="inputField"
                  onClick={() => this.setState({ sectionType: "event" })}
                />
              </div>
            </div>

            {this.state.stages.length ? (
              <div>
                {this.state.stages.map((stage, index) => (
                  <div key={`stage-${index}`} className="eventHeader">
                    <i
                      className="far fa-times-circle"
                      aria-hidden="false"
                      onClick={e => this.deleteStage(e, index)}
                      // TODO: Make this trigger a modal to confirm user wants to delete stage
                    />
                    <h3>{`Stage ${index + 1}`}</h3>
                    <div className="formGroup formGroupStage">
                      <label>Stage Description</label>
                      <input
                        id="stageDescription"
                        value={this.state.stages[index].stageDescription}
                        onChange={e => this.handleStageChange(e, index)}
                        className="inputField inputFieldStage"
                        onClick={() =>
                          this.setState({ sectionType: `stage_${index}` })
                        }
                      />

                      <ButtonToolbar className="financialImpactButtons">
                        <label>Financial Impact</label>
                        <Button
                          value="yes"
                          id="financialImpact"
                          className={`financialImpactButton ${
                            this.state.stages[index].financialImpact !== "yes"
                              ? "unselectedButton"
                              : ""
                          }`}
                          onClick={e => {
                            this.handleStageChange(e, index);
                            this.setState({ sectionType: `stage_${index}` });
                          }}
                        >
                          Yes
                        </Button>
                        <Button
                          value="no"
                          id="financialImpact"
                          className={`financialImpactButton ${
                            this.state.stages[index].financialImpact !== "no"
                              ? "unselectedButton"
                              : ""
                          }`}
                          onClick={e => {
                            this.handleStageChange(e, index);
                            this.setState({ sectionType: `stage_${index}` });
                          }}
                        >
                          No
                        </Button>
                      </ButtonToolbar>
                    </div>

                    <AccountTable
                      accounts={stage.accounts}
                      accountSearchResults={this.state.accountSearchResults}
                      handleAccountChange={(e, accountIndex) =>
                        this.handleAccountChange(index, e, accountIndex)
                      }
                      onClick={() =>
                        this.setState({ sectionType: `stage_${index}` })
                      }
                    />

                    <Button
                      className="newAccountButton"
                      onClick={() => this.addAccount(index)}
                    >
                      <i className="fas fa-plus" />
                    </Button>
                  </div>
                ))}
                <Button
                  className="newStageButton"
                  onClick={() => {
                    this.addStage();
                    this.setState({ sectionType: `stage_0` });
                  }}
                >
                  New Stage
                </Button>
              </div>
            ) : null}
          </Col>
          <Col md={4} className="sideNewEventPanel">
            <h3>Additional Panel Info</h3>
            <SidePanel
              sectionType={this.state.sectionType}
              event={this.state.event}
              stages={this.state.stages}
              handleChange={e => this.handleChange(e)}
              handleStageChange={(e, stageIndex) =>
                this.handleStageChange(e, stageIndex)
              }
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewEventMain;
