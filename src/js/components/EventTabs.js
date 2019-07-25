import React, { Component } from "react";
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
import { NullableBoolean } from "aws-sdk/clients/xray";

class EventTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvent: {}
    };
    this.event = props.match.params.eventId;
    console.log("event id: ", this.event);
  }

  componentDidMount() {
    axios
      .get(`/event/${this.event}`)
      .then(results => {
        console.log("EVENT: ", results.data);
        this.setState({ selectedEvent: results.data });
      })
      .catch(error => console.log("ERROR: ", error));
  }

  render() {
    return (
      <div>
        {this.state.selectedEvent ? (
          <div>
            <h2>Event Title</h2>

            <Tabs defaultActiveKey="event" id="tabNavigation">
              <Tab className="navItem" eventKey="event" title="Event">
                {/* <Event 
                selectedEvent={this.state.selectedEvent}
              /> */}
              </Tab>
              <Tab eventKey="t-charts" title="T-Charts">
                <TChartMain />
              </Tab>
              <Tab eventKey="summary" title="Summary" />
            </Tabs>
          </div>
        ) : null}
      </div>
    );
  }
}

export default EventTabs;
