import React, { Component } from 'react';
import ProcessList from './Lists/ProcessList';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Search from './Search';

class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      users: []
    }
  }

  componentDidMount() {
    this.getAccounts();
    this.getUsers();
  }

  getAccounts() {
    axios.get('/accounts')
    .then(results => {
      console.log("ACCOUNTS: ", results.data);
      this.setState({
        accounts: results.data
      })
    })
  }

  getUsers() {
    axios.get('/users')
    .then(results => {
      this.setState({
        users: results.data
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
      <div className="settingsPage">
        <div className="settingsHeader">
            <i className="fas fa-cog"></i>
            <div className="pageInfoText">
              <h2>Settings</h2>
            </div>
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="users">
          <Row>
            <Col sm={3} className="settingsTabs">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="users" className="tab">Users</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="accounts" className="tab">Accounts</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} className="tabContent">
              <Tab.Content>
                <Tab.Pane eventKey="users">
                <div className="userSettings">
                  <h3>Users</h3>
                  {this.state.users.length ? (
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.users.map((user, i) => (
                        <tr key={user.name}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                        </tr>
                      ))}
                      </tbody>
                    </Table>
                  ):null}
                </div>
                </Tab.Pane>
                <Tab.Pane eventKey="accounts">
                  <div className="accountSettings">
                    <h3>Accounts</h3>
                    {this.state.accounts.length ? (
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Description</th>
                            <th>Natural</th>
                            <th>Module</th>
                            <th>Owner</th>
                          </tr>
                        </thead>
                        <tbody>
                        {this.state.accounts.map((account, i) => (
                          <tr key={`${account.description}_${i}`}>
                            <td>{account.id}</td>
                            <td>{account.description}</td>
                            <td>{account.natural}</td>
                            <td>{account.module}</td>
                            <td>{account.name}</td>
                          </tr>
                        ))}
                        </tbody>
                      </Table>
                    ):null}
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    )
  }
}

export default Settings;