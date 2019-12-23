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

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionType: "",
      event: props.selectedEvent,
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
    this.deleteAccount = this.deleteAccount.bind(this);
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
    const { event } = this.state;
    event.stages[stageIndex][e.target.id] = e.target.value;

    this.setState({
      event,
      sectionType: `stage_${stageIndex}`
    });
  }

  handleAccountChange(stageIndex, e, accountIndex) {
    const { event } = this.state;
    event.stages[stageIndex].accounts[accountIndex][e.target.id] =
      e.target.value;

    this.setState(
      {
        event,
        sectionType: "account"
      },
      e.target.id === "accountDescription"
        ? this.getAccountByDescription(stageIndex, e.target.value, accountIndex)
        : () => {}
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
    const { event } = this.state;
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
    event.stages.push(stageObject);

    this.setState({
      event
    });
  }

  deleteStage(e, index) {
    const { event } = this.state;
    event.stages.splice(index, 1);
    this.setState({
      event
    });
  }

  addAccount(stageIndex) {
    const { event } = this.state;
    console.log("EVENT: ", event);
    let accountObject = {
      accountDescription: "",
      debitCredit: "",
      amount: "",
      currency: "",
      accountType: "",
      increaseDecrease: ""
    };
    event.stages[stageIndex].accounts = event.stages[stageIndex].accounts
      ? event.stages[stageIndex].accounts
      : [];
    event.stages[stageIndex].accounts.push(accountObject);

    this.setState({
      event
    });
  }

  deleteAccount(stageIndex, accountIndex) {
    const { event } = this.state;
    event.stages[stageIndex].accounts.splice(accountIndex, 1);

    this.setState({
      event
    });
  }

  createEvent() {
    let newEvent = this.state.event;
    return axios
      .post("/event", newEvent)
      .then(() => {
        console.log("successfully created a new event!!");
      })
      .catch(error => console.log("ERROR: ", error));
  }

  updateEvent() {
    let updatedEvent = this.state.event;
    console.log("updated event client: ", updatedEvent);
    return axios
      .put(`/event/${updatedEvent.id}`, updatedEvent)
      .then(() => {
        console.log("successfully updated an new event!!");
      })
      .catch(error => console.log("ERROR: ", error));
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={this.state.sectionType ? 8 : 12}>
            <div className="Event__MainPanel">
              <div className="Event__eventHeader">
                <h3 className="Event__heading">Overview</h3>
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
              {this.state.event.stages && this.state.event.stages.length
                ? this.state.event.stages.map((stage, index) => (
                    <div key={`stage-${index}`} className="Event__eventHeader">
                      <div className="Event__deleteButton">
                        <i
                          className="far fa-times-circle"
                          aria-hidden="false"
                          onClick={e => this.deleteStage(e, index)}
                          // TODO: Make this trigger a modal to confirm user wants to delete stage
                        />
                      </div>
                      <h3 className="Event__stageHeading">{`Stage ${index +
                        1}`}</h3>
                      <div className="formGroup formGroupStage">
                        <label>Stage Description</label>
                        <input
                          id="stageDescription"
                          value={
                            this.state.event.stages[index].stageDescription
                          }
                          onChange={e => this.handleStageChange(e, index)}
                          className="inputField inputFieldStage"
                          onClick={() =>
                            this.setState({ sectionType: `stage_${index}` })
                          }
                        />

                        <ButtonToolbar className="Event__financialImpactButtons">
                          <label>Financial Impact</label>
                          <Button
                            value="yes"
                            id="financialImpact"
                            className={`Event__financialImpactButton ${
                              this.state.event.stages[index].financialImpact !==
                              "yes"
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
                            className={`Event__financialImpactButton ${
                              this.state.event.stages[index].financialImpact !==
                              "no"
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

                      <div
                        hidden={
                          this.state.event.stages[index].financialImpact !==
                          "yes"
                        }
                      >
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
                    </div>
                  ))
                : null}
              <Button
                className="Event__newStageButton"
                onClick={() => {
                  this.addStage();
                  this.setState({ sectionType: `stage_0` });
                }}
              >
                New Stage
              </Button>
            </div>
          </Col>
          <Col md={4} hidden={!this.state.sectionType}>
            <SidePanel
              sectionType={this.state.sectionType}
              event={this.state.event}
              stages={this.state.event.stages}
              handleChange={e => this.handleChange(e)}
              handleStageChange={(e, stageIndex) =>
                this.handleStageChange(e, stageIndex)
              }
              createEvent={() => this.createEvent()}
              updateEvent={() => this.updateEvent()}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Event;
