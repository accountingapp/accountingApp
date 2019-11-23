import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import Event from "./EditEvent/Event";
import TChartMain from "./TCharts/TChartMain";
import axios from "axios";

class EventTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvent: {
        title: "",
        description: "",
        // user: "",
        company: "",
        date: "",
        documentNumber: "",
        customer: "",
        vendor: "",
        invoice: "",
        localCurrency: "",
        stages: []
      },
      status: ""
    };
    this.event = props.match.params.eventId;
  }

  componentDidMount() {
    if (this.event !== "new") {
      return axios
        .get(`/event/${this.event}`)
        .then(results => {
          this.setState({ selectedEvent: results.data, status: "RETRIEVED" });
        })
        .catch(error => console.log("ERROR: ", error));
    } else {
      this.setState({ status: "NEW" });
    }
  }

  render() {
    return (
      <div>
        {this.state.status ? (
          <div className="EventTabs">
            <div className="EventTabs__Header">
              {/* <h2 className="EventTabs__Title">
                {this.state.selectedEvent.title || "Create a New Event"}
              </h2> */}
              <Link to={`/`}>
                <Button className="EventTabs__Back__Button">
                  <i className="fas fa-arrow-left" />
                  All Events
                </Button>
              </Link>
            </div>
            <Tabs defaultActiveKey="event" className="EventTabs__Tabs">
              <Tab eventKey="event" title="Event">
                <Event selectedEvent={this.state.selectedEvent} />
              </Tab>
              <Tab eventKey="t-charts" title="T-Charts">
                <TChartMain selectedEvent={this.state.selectedEvent} />
              </Tab>
              <Tab eventKey="summary" title="Summary" />
            </Tabs>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(EventTabs);
