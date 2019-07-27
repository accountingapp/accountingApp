import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";

class EventsHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    axios.get("/events").then(results => {
      this.setState({ events: results.data });
    });
  }

  handleRowClick(event) {
    this.props.history.push(`/event-details/${event.id}`);
  }

  render() {
    return (
      <div className="eventsList">
        <Table striped hover borderless="true">
          <thead className="eventsListTableHead">
            <tr>
              <th className="">#</th>
              <th className="">Title</th>
              <th className="">Description</th>
              <th className="">Company</th>
              <th className="">Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.events.length
              ? this.state.events.map((event, i) => (
                  <tr key={`event-${event.id}`} className="eventsListRow">
                    <td
                      id={`event-${event.id}`}
                      onClick={() => this.handleRowClick(event)}
                    >
                      {i + 1}
                    </td>
                    <td
                      id={`event-${event.id}`}
                      onClick={() => this.handleRowClick(event)}
                    >
                      {event.title}
                    </td>
                    <td
                      id={`event-${event.id}`}
                      onClick={() => this.handleRowClick(event)}
                    >
                      {event.description}
                    </td>
                    <td
                      id={`event-${event.id}`}
                      onClick={() => this.handleRowClick(event)}
                    >
                      {event.company}
                    </td>
                    <td
                      id={`event-${event.id}`}
                      onClick={() => this.handleRowClick(event)}
                    >
                      {event.date}
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
        <Button onClick={() => this.props.history.push(`/event-details/new`)}>
          Create Event
        </Button>
      </div>
    );
  }
}

export default EventsHome;
