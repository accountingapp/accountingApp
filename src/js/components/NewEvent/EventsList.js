import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    axios.get("/events").then(results => {
      console.log("EVENTS: ", results.data);
      this.setState({ events: results.data });
    });
  }

  render() {
    return (
      <div className="eventsList">
        <Table striped hover borderless="true">
          <thead className="eventsListTableHead">
            <tr>
              <th className="">Title</th>
              <th className="">Description</th>
              <th className="">Company</th>
              <th className="">Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.events.length
              ? this.state.events.map((event, i) => (
                  <tr key={`event-${i}`}>
                    <td>{event.title}</td>
                    <td>{event.description}</td>
                    <td>{event.company}</td>
                    <td>{event.date}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default EventsList;