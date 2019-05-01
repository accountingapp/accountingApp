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
      users: [],
      modules: [],
      activeKey: 'users',
      creatingNewItem: false,
      newName: '',
      newEmail: ''
    }
  }

  componentDidMount() {
    this.getAccounts();
    this.getUsers();
    this.getModules();
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

  getModules() {
    axios.get('/modules')
    .then(results => {
      this.setState({
        modules: results.data
      })
    })
  }

  createNewItem(activeKey) {
    if (activeKey === "users") {
      let newUser = {
        name: this.state.newName,
        email: this.state.newEmail
      };

      axios.post('/newUser', newUser)
      .then(() => {
        console.log("Created new user");
        this.setState({
          creatingNewItem: false,
          newEmail: '',
          newUser: ''
        })
        this.getUsers();
      })
    }
    else if(activeKey === "modules") {
      axios.post('/createModule', {module: this.state.newModule})
      .then(() => {
        console.log("Created new module");
        this.setState({
          creatingNewItem: false,
          newModule: ''
        })
        this.getModules();
      })
    }
  } 
  

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    return(
      <div className="settingsPage">
        <Tab.Container id="left-tabs-example" defaultActiveKey="users">
          <Row>
            <Col sm={3} className="settingsTabs">
            <div className="settingsTitle">
              <i className="fas fa-cog"></i>
              <h2>Settings</h2>
            </div>
              <Nav variant="pills" className="flex-column"
                onSelect={activeKey => this.setState({activeKey})}
              >
                <Nav.Item>
                  <Nav.Link 
                    eventKey="users" 
                    className="tab"
                  >
                    Users
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    eventKey="modules" 
                    className="tab"
                  >
                    Modules
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    eventKey="accounts"
                    className="tab"
                  >
                    Accounts
                  </Nav.Link>
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
                      {this.state.creatingNewItem ? (
                        <tr key="newItem">
                          <td></td>
                          <td>
                            <FormControl
                              id='newName'
                              value={this.state.newName}
                              placeholder='Enter a first and last name'
                              onChange={(e)=>this.handleChange(e)}
                            />
                          </td>
                          <td>
                            <FormControl
                              id='newEmail'
                              value={this.state.newEmail}
                              placeholder="Enter the user's email"
                              onChange={(e)=>this.handleChange(e)}
                            />
                          </td>
                        </tr>
                      ):null}
                      </tbody>
                    </Table>
                  ):null}
                </div>
                </Tab.Pane>
                <Tab.Pane eventKey="modules">
                <div className="moduleSettings">
                  <h3>Modules</h3>
                  {this.state.modules.length ? (
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Module</th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.modules.map((module, i) => (
                        <tr key={module.module}>
                          <td>{module.id}</td>
                          <td>{module.module}</td>
                        </tr>
                      ))}
                      {this.state.creatingNewItem ? (
                        <tr key="newItem">
                          <td></td>
                          <td>
                            <FormControl
                              id='newModule'
                              autoFocus
                              value={this.state.newModule}
                              placeholder='Enter a new module'
                              onChange={(e)=>this.handleChange(e)}
                            />
                          </td>
                        </tr>
                      ):null}
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
                        {this.state.creatingNewItem ? (
                        <tr key="newItem">
                          <td></td>
                          <td>
                            <FormControl
                              id='newAccountDescription'
                              value={this.state.newAccountDescription}
                              placeholder='Enter a new account name'
                              onChange={(e)=>this.handleChange(e)}
                            />
                          </td>
                          <td>
                            <FormControl
                              id='newAccountNatural'
                              value={this.state.newAccountNatural}
                              placeholder="Enter an account natural"
                              onChange={(e)=>this.handleChange(e)}
                            />
                          </td>
                        </tr>
                      ):null}
                        </tbody>
                      </Table>
                    ):null}
                  </div>
                </Tab.Pane>
              </Tab.Content>
              {!this.state.creatingNewItem ? (
                <Button
                  className="createNewSettingButton"
                  onClick={()=>this.setState({creatingNewItem: true})}
                >
                New
              </Button>
              ): (
                <>
                  <Button
                    className="submitNewItem"
                    onClick={()=>this.createNewItem(this.state.activeKey)}
                  >
                    Submit
                  </Button>
                  <Button
                    className="cancelNewItem"
                    onClick={()=>this.setState({creatingNewItem: false})}
                  >
                    Cancel
                  </Button>
                </>
              )}
            </Col>
          </Row>
        </Tab.Container>
      </div>
    )
  }
}

export default Settings;