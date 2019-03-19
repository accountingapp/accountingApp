import React, { PureComponent } from 'react';
import { Subscribe } from 'unstated';
import {Link} from 'react-router-dom';

import AccountList from './Lists/AccountList';
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
import axios from 'axios';


import CalloutsContainer from '../container/callouts';
import Search from './Search';

class Owner extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      ownerName: '',
      email: '',
      processes: ['Process 1','Process 2','Process 3','Process 4','Process 5','Process 6'],
      charts: ['Chart 1','Chart 2','Chart 3','Chart 4','Chart 5','Chart 6'],
      accounts: [],
      applications: ['Application 1','Application 2','Application 3','Application 4','Application 5','Application 6'],
    }
  }

  componentDidMount() {
    this.getOwnerDependencies(this.props.computedMatch.params.ownerId);
    this.getOwner(this.props.computedMatch.params.ownerId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.computedMatch.params.ownerId !== prevProps.computedMatch.params.ownerId) {
      this.getOwnerDependencies(this.props.computedMatch.params.ownerId);
      this.getOwner(this.props.computedMatch.params.ownerId);
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
                <div className="ownerInfo">
                  <Row>
                    <Col md={1}>
                      <i className="fa fa-user icon ownerGlyph" />
                    </Col>
                    <Col md={2} className="ownerText">
                      <h2>Owner</h2>
                      <h3>{this.state.ownerName}</h3>
                      <h3>{this.state.email}</h3>
                    </Col>
                  </Row>
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
                </div>
              </div>

            ):null}

          </div>
        )}
      </Subscribe>  
    )
  }
}

export default Owner;