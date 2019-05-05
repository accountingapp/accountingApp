import React, { PureComponent } from 'react';
import { Subscribe } from 'unstated';
import {Link, withRouter} from 'react-router-dom';

import AccountList from './Lists/AccountList';
import ProcessList from './Lists/ProcessList';
import ApplicationList from './Lists/ApplicationList';
import ChartList from './Lists/ChartList';
import ResourceList from './Lists/ResourceList';

import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';


import CalloutsContainer from '../container/callouts';
import Search from './Search';

class Owner extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      ownerName: '',
      email: '',
      processes: [],
      charts: ['Chart 1','Chart 2','Chart 3','Chart 4','Chart 5','Chart 6'],
      accounts: [],
      resources: [],
      applications: [{name: 'slack', icon: 'fab fa-slack'}, {name: 'google', icon: 'fab fa-google'},{name: 'excel', icon: 'fas fa-file-excel'},{name: 'linkedin', icon: 'fab fa-linkedin'},{name: 'reddit', icon: 'fab fa-reddit'},{name: 'stack overflow', icon: 'fab fa-stack-overflow'}],
    }
    this.ownerId=this.props.match.params.ownerId;
  }

  componentDidMount() {
    this.getOwnerDependencies(this.ownerId);
    this.getOwner(this.ownerId);
    this.getProcesses(this.ownerId);
    this.getResources();
  }

  componentDidUpdate(prevProps) {
    if (this.ownerId !== prevProps.match.params.ownerId) {
      this.getOwnerDependencies(this.ownerId);
      this.getOwner(this.ownerId);
      this.getProcesses(this.ownerId);
      this.getResources();
    }
  }

  getOwnerDependencies(ownerId) {
    if (ownerId) {
      axios.get(`/ownerDependencies/${ownerId}`)
      .then(results => {
        this.setState({
          accounts: results.data.data 
        })
      })
    }
  }

  getOwner(ownerId) {
    if (ownerId) {
      axios.get(`/ownerDetails/${ownerId}`)
      .then(results => {
        this.setState({
          ownerName: results.data.data[0].name,
          email: results.data.data[0].email
        })
      })
    }
  }

  getProcesses(ownerId) {
    axios.get(`/processOwner/${ownerId}`)
    .then(results => {
      this.setState({
        processes: results.data
      })
    })
  }

  getResources() {
    axios.get(`/resources`)
    .then(results => {
      console.log("RESOURCES: ", results.data);
      this.setState({
        resources: results.data
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
            <Search />

            {this.state.ownerName ? (
              <div>
                <div className="pageInfo">
                  <i className="fa fa-user icon ownerGlyph"></i>
                  <div className="pageInfoText">
                    <h2>Owner</h2>
                      <h3>{this.state.ownerName}</h3>
                      <h3>{this.state.email}</h3>
                  </div>
                </div>
                
                <div className="accountList">
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
                  <AccountList 
                    title="Accounts" 
                    listType="account"
                    accounts={this.state.accounts}
                  />
                  <ApplicationList 
                    title="Applications" 
                    listType="application"
                    dependencies={this.state.applications}
                  />
                  <ResourceList
                    title="Resources" 
                    listType="resource"
                    dependencies={this.state.resources}
                  />
                </div>
              </div>

            ):null}

          </div>
        )}
      </Subscribe>  
    )
  }
}

export default withRouter(Owner);