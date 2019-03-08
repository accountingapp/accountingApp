import React, { Component } from 'react';
import ProcessList from './ProcessList';
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
    this.state = {
      searchResults: [],
      currentSearch: "",
      processes: ['Process 1','Process 2','Process 3','Process 4','Process 5','Process 6'],
      accounts: ['Account 1','Account 2','Account 3','Account 4','Account 5','Account 6'],
      applications: ['Application 1','Application 2','Application 3','Application 4','Application 5','Application 6'],
    }
  }

  getAccounts(searchCriteria) {
    axios.post('/account', {description: searchCriteria})
    .then(results => {
      this.setState({
        searchResults: this.state.currentSearch ? results.data.data : []
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
        <div className="search">
          <Search
            currentSearch = {this.state.currentSearch}
            handleChange = {e => this.handleChange(e)}
          />

          <ListGroup>
          {this.state.searchResults.length ? this.state.searchResults.map(account => (
            <ListGroup.Item key={account.description}>{account.description}</ListGroup.Item>
          )): null}
          </ListGroup>
        </div>
        
        <div className="accountList">
          <ProcessList 
            title="Your Processes" 
            listType="process"
            dependencies={this.state.processes}
          />
          <ProcessList 
            title="Your Accounts" 
            listType="account"
            dependencies={this.state.accounts}
          />
          <ProcessList 
            title="Your Applications" 
            listType="application"
            dependencies={this.state.applications}
          />
        </div>
      </div>
    )
  }
}

export default Home;