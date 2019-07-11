import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import NewEventMain from "./NewEvent/NewEventMain";
import TChartMain from "./TCharts/TChartMain";
import axios from "axios";

class EventsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange(e) {
    this.setState({
      currentSearch: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey="events" id="tabNavigation">
          <Tab eventKey="events" title="Events">
            <Link to={`/newEvent`} className="newEventButton">
              Create a new event!
            </Link>
          </Tab>
          <Tab className="navItem" eventKey="newEvent" title="New Event">
            <NewEventMain />
          </Tab>
          <Tab eventKey="t-charts" title="T-Charts">
            <TChartMain />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default EventsMain;
