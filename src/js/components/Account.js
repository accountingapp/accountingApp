import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import OwnerList from './Lists/OwnerList';
import ProcessList from './Lists/ProcessList';
import ApplicationList from './Lists/ApplicationList';
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
      processes: ['Process 1','Process 2','Process 3','Process 4','Process 5','Process 6'],
      owner: {},
      applications: ['Application 1','Application 2','Application 3','Application 4','Application 5','Application 6'],
    }
  }

  getAccountDependencies(accountId) {
    axios.get(`/accountDependencies/${accountId}`)
    .then(results => {
      console.log("RESULTS: ", results)
      let accountDetails = {
        description: results.data.data[0].description,
        natural: results.data.data[0].natural,
        module: results.data.data[0].module,
      }
      let ownerDetails = {
        name: `${results.data.data[0].firstName} ${results.data.data[0].lastName}`,
        id: results.data.data[0].owner
      }
      console.log("owner details: ", ownerDetails)
      this.setState({
        account: accountDetails,
        owner: ownerDetails
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
                <Col md={1} className="userImage">
                  <i className="fa fa-briefcase" />
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
                title="Owner" 
                listType="owner"
                owner={this.state.owner}
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