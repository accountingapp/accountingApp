import React, { Component } from 'react';
import AccountList from './AccountList';
import ProcessList from './ProcessList';
import ApplicationList from './ApplicationList';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Link} from 'react-router-dom';
import axios from 'axios';

import Search from './Search';

class Owner extends Component {

  constructor(props) {
    super(props);
    let currentOwner = props.match.params.ownerId;
    console.log("currentOwner: ", currentOwner);
    this.getOwnerDependencies(currentOwner);
    this.getOwner(currentOwner);
    this.state = {
      searchResults: [],
      ownerResults: [],
      ownerName: '',
      email: '',
      currentSearch: "",
      processes: ['Process 1','Process 2','Process 3','Process 4','Process 5','Process 6'],
      accounts: [],
      applications: ['Application 1','Application 2','Application 3','Application 4','Application 5','Application 6'],
    }
  }

  getOwnerDependencies(ownerId) {
    axios.get(`/ownerDependencies/${ownerId}`)
    .then(results => {
      this.setState({
        accounts: results.data.data 
      })
    })
  }

  getAccounts(searchCriteria) {
    axios.post('/account', {description: searchCriteria})
    .then(results => {
      this.setState({
        searchResults: this.state.currentSearch ? results.data.data : []
      })
    })
  }

  getOwner(ownerId) {
    axios.get(`/ownerDetails/${ownerId}`)
    .then(results => {
      this.setState({
        ownerName: `${results.data.data[0].firstName} ${results.data.data[0].lastName}`,
        email: results.data.data[0].email
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

        <div className="ownerInfo">
          <Row>
            <Col md={1} className="userImage">
              <i className="fa fa-user" />
            </Col>
            <Col md={2} className="ownerText">
              <h2>Owner</h2>
              <h3>{this.state.ownerName}</h3>
              <h3>{this.state.email}</h3>
            </Col>
          </Row>
        </div>
        
        <div className="accountList">
          <ProcessList 
            title="Your Processes" 
            listType="process"
            dependencies={this.state.processes}
          />
          <AccountList 
            title="Your Accounts" 
            listType="account"
            accounts={this.state.accounts}
          />
          <ApplicationList 
            title="Your Applications" 
            listType="application"
            dependencies={this.state.applications}
          />
        </div>
      </div>
    )
  }
}

export default Owner;