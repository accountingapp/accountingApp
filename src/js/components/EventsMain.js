import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';
import axios from 'axios';

class EventsMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleChange(e) {
    this.setState({
      currentSearch: e.target.value
    });
  }

  render() {
    return(
      <div>
        <Link to={`/newEvent`} className="newEventButton">
          Create a new event!
        </Link>
      </div>
    )
  }
}

export default EventsMain;