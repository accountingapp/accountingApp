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
      allAccounts: [],
      accountSearchResults: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleStageChange = this.handleStageChange.bind(this);
    this.handleAccountChange = this.handleAccountChange.bind(this);
    this.getAccountByDescription = this.getAccountByDescription.bind(this);
    this.addStage = this.addStage.bind(this);
    this.deleteStage = this.deleteStage.bind(this);
    this.addAccount = this.addAccount.bind(this);
  }

  componentDidMount() {
    //TODO: fetch accounts by userId or company instead of all accounts?
    axios
      .get("/accounts")
      .then(results => this.setState({ allAccounts: results.data }))
      .catch(console.log);
  }

  handleChange(e) {
    let eventObject = this.state.event;
    eventObject[e.target.id] = e.target.value;
    this.setState({
      event: eventObject
    });
  }

  handleStageChange(e, stageIndex) {
    const { stages } = this.state;
    stages[stageIndex][e.target.id] = e.target.value;

    this.setState({
      stages,
      sectionType: `stage_${stageIndex}`
    });
  }

  handleAccountChange(stageIndex, e, accountIndex) {
    const { stages } = this.state;
    stages[stageIndex].accounts[accountIndex][e.target.id] = e.target.value;

    this.setState(
      {
        stages,
        sectionType: "account"
      },
      this.getAccountByDescription(stageIndex, e.target.value, accountIndex)
    );
  }

  getAccountByDescription(stageIndex, searchCriteria, accountIndex) {
    const { allAccounts, accountSearchResults } = this.state;

    const filteredByDescription = allAccounts.filter(acct =>
      acct.description.toLowerCase().includes(searchCriteria.toLowerCase())
    );

    if (
      filteredByDescription.length &&
      filteredByDescription[0].description === searchCriteria
    ) {
      searchCriteria = null;
      // ^ this is so that when a user clicks an account option, the dropdown will go away
    }

    accountSearchResults[stageIndex] = accountSearchResults[stageIndex] || {};
    accountSearchResults[stageIndex][accountIndex] = searchCriteria
      ? filteredByDescription
      : [];

    this.setState({
      accountSearchResults
    });
  }

  addStage() {
    const { stages } = this.state;
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
    stages.push(stageObject);

    this.setState({
      stages
    });
  }

  deleteStage(e, index) {
    const { stages } = this.state;
    stages.splice(index, 1);
    this.setState({
      stages
    });
  }

  addAccount(stageIndex) {
    const { stages } = this.state;
    let accountObject = {
      accountDescription: "",
      debitCredit: "",
      amount: "",
      currency: "",
      accountType: "",
      increaseDecrease: ""
    };

    stages[stageIndex].accounts.push(accountObject);

    this.setState({
      stages
    });
  }

  deleteAccount(stageIndex, accountIndex) {
    const currentStages = this.state.stages;
    currentStages[stageIndex].accounts.splice(accountIndex, 1);

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
                      accountSearchResults={
                        this.state.accountSearchResults[index]
                      }
                      handleAccountChange={(e, accountIndex) =>
                        this.handleAccountChange(index, e, accountIndex)
                      }
                      deleteAccount={accountIndex =>
                        this.deleteAccount(index, accountIndex)
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
