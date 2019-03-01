import React, { Component } from 'react';
import AccountList from './AccountList';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      currentSearch: "",
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
        <InputGroup className="mb-3 accountSearch">
          <FormControl
            placeholder="Search for an account, owner, application, best practices &amp; more"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={this.state.currentSearch}
            onChange={(e) => this.handleChange(e)}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary"><i className="fa fa-search" /></Button>
          </InputGroup.Append>
        </InputGroup>

        <ListGroup>
        {this.state.searchResults.length ? this.state.searchResults.map(account => (
          <ListGroup.Item key={account.description}>{account.description}</ListGroup.Item>
        )): null}
        </ListGroup>

        <div className="accountList">
          <AccountList title="Your Processes" />
          <AccountList title="Your Accounts" />
          <AccountList title="Your Accounts" />
          <AccountList title="Your Applications" />
        </div>
      </div>
    )
  }
}

export default Home;