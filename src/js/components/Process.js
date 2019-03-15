import React, { Component } from 'react';
import ProcessList from './Lists/ProcessList';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Search from './Search';

class Home extends Component {

  constructor(props) {
    super(props);
    let currentProcess = props.match.params.processId;
    this.getProcess(currentProcess);
    this.state = {
      title: '',
      process: [],
      ownerName: ''
    }
  }

  getProcess(processId) {
    axios.get(`/processDetails/${processId}`)
    .then(results => {
      this.setState({
        title: results.data.data[0].title,
        ownerName: `${results.data.data[0].firstName} ${results.data.data[0].lastName}`,
        process: results.data.data[0].process
      })
    })
  }

  handleChange(e) {
    this.setState({
      currentSearch: e.target.value
    });
    this.getAccounts(e.target.value)
  }

  render() {
    return(
      <div>
        <h2>PROCESS PAGE</h2>
        {this.state.process ? (
          <div className="processWrap">
            <h3>{this.state.title}</h3>
            <h3>Owner: {this.state.ownerName}</h3>

            {this.state.process.map((step, i) => (
              <div key={i}>
                <div>{step.name}</div>
                <div>{step.data}</div>
              </div>
            ))}
          </div>
        ) : null }
      </div>
    )
  }
}

export default Home;