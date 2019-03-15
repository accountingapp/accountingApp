import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import OwnerList from './Lists/OwnerList';
import ProcessList from './Lists/ProcessList';
import ApplicationList from './Lists/ApplicationList';
import ChartList from './Lists/ChartList';

import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Link} from 'react-router-dom';
import axios from 'axios';


import CalloutsContainer from '../container/callouts';
import Search from './Search';

class Account extends Component {

  constructor(props) {
    super(props);
    let currentAccount = props.match.params.accountId;
    console.log("CURRENT ACCOUNT: ", currentAccount);
    this.getAccountDependencies(currentAccount);
    this.state = {
      searchResults: [],
      ownerResults: [],
      account: {},
      owner: {},
      currentSearch: "",
      processes: [],
      charts: ['Chart 1','Chart 2','Chart 3','Chart 4','Chart 5','Chart 6'],
      owner: {},
      contributors: [],
      applications: ['Application 1','Application 2','Application 3','Application 4','Application 5','Application 6'],
    }
  }

  getAccountDependencies(accountId) {
    axios.get(`/accountDependencies/${accountId}`)
    .then(results => {
      console.log("ACCOUNT DEPENDENCIES: ", results);
      this.getContributors(results.data.data[0].contributors);
      this.getProcesses(results.data.data[0].processes);
      let accountDetails = {
        description: results.data.data[0].description,
        natural: results.data.data[0].natural,
        module: results.data.data[0].module,
      }
      let ownerDetails = {
        name: `${results.data.data[0].firstName} ${results.data.data[0].lastName}`,
        id: results.data.data[0].ownerId
      }
      this.setState({
        account: accountDetails,
        owner: ownerDetails
      })
    })
  }

  getContributors(contributorIds) {
    axios.post(`/contributors`, {contributors: contributorIds})
    .then(results => {
      this.setState({
        contributors: results.data.data
      })
    })
  }

  getProcesses(processIds) {
    axios.post(`/processes`, {processes: processIds})
    .then(results => {
      console.log("PROCESS RESULTS: ", results.data.data);
      this.setState({
        processes: results.data.data
      })
    })
  }

  handleChange(callouts, e) {
    this.setState({
      currentSearch: e.target.value
    });
    callouts.getAccounts(e.target.value)
  }

  render() {
    return(
      <Subscribe to={[CalloutsContainer]}>
        {(callouts) => (
          <div>
            <div className="search">
              <Search
                currentSearch = {this.state.currentSearch}
                handleChange = {e => this.handleChange(callouts, e)}
              />

              
              <ListGroup>
                {callouts.state.searchResults.length ? callouts.state.searchResults.map(account => (
                  <Link to={`/account/${account.id}`}>
                    <ListGroup.Item key={account.description}>{account.description}</ListGroup.Item>
                  </Link>
                )): null}
              </ListGroup>
            </div>

            <div className="ownerInfo">
              <Row>
                <Col md={1} className="dependency">
                <i class="fas fa-balance-scale icon"></i>
                </Col>
                <Col md={2} className="ownerText">
                  <h2>Account</h2>
                  <h2>{this.state.account.description}</h2>
                  <h2>{this.state.account.natural}</h2>
                  <h2>{this.state.account.module}</h2>
                </Col>
              </Row>
            </div>
            
            <div className="accountList">
              <OwnerList 
                title="Owners/Contributors" 
                listType="owner"
                owner={this.state.owner}
                contributors={this.state.contributors}
              />
              <ChartList 
                title="Charts" 
                listType="chart"
                dependencies={this.state.charts}
              />
              <ProcessList 
                title="Processes" 
                listType="process"
                dependencies={this.state.processes}
              />
              <ApplicationList 
                title="Applications" 
                listType="application"
                dependencies={this.state.applications}
              />
            </div>
          </div>
        )}
      </Subscribe>  
    )
  }
}

export default Account;