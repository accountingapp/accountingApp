import React, { Component } from 'react';
import AccountList from './AccountList';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <InputGroup className="mb-3 accountSearch">
          <FormControl
            placeholder="Search for an account, owner, application, best practices &amp; more"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary"><i className="fa fa-search" /></Button>
          </InputGroup.Append>
        </InputGroup>

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