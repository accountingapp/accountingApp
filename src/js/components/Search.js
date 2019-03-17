import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';

import CalloutsContainer from '../container/callouts';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state={
      activeKey: 'accounts',
      currentSearch: ''
    }
    this.currentSearch = props.currentSearch;
  }

  handleChange(callouts, activeKey, inputValue) {
    this.setState({
      currentSearch: inputValue
    });
    
    switch(activeKey) {
      case "accounts":
        callouts.getAccountByDescription(inputValue);
        break;
      case "users":
        callouts.getOwnerByName(inputValue);
        break;
      case "processes":
        callouts.getProcessByTitle(inputValue)
        break;
    }
  }

  renderSearchBar(callouts, activeKey) {
    
    const searchResults = {
      accounts: {
        background: "#378eaf",
        link: "account",
        name: "description",
      },
      users:  {
        background: "#a6a6a6",
        link: "owner",
        name: "name"
      },
      processes: {
        background: "#a2c3cc",
        link: "process",
        name: "title"
      }
    }
    
    return (
      <div>
          <InputGroup 
            className="mb-3 searchInput"
            style={{
              background: searchResults[this.state.activeKey].background
            }}
          >
            <FormControl
              placeholder="Search for an account, owner, application, best practices &amp; more"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={this.state.currentSearch}
              onChange={(e) => this.handleChange(callouts, this.state.activeKey, e.target.value)}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary"><i className="fa fa-search" /></Button>
            </InputGroup.Append>
          </InputGroup>
  
          <ListGroup className="listSearchResults">
            {callouts.state.searchResults.length && this.state.currentSearch ? callouts.state.searchResults.map((result,i) => (
              <Link 
                key={`${i}-${result[searchResults[this.state.activeKey].name]}`} 
                to={`/${searchResults[this.state.activeKey].link}/${result.id}`}
                onClick={()=> this.setState({currentSearch:""})}
              >
                <ListGroup.Item>{result[searchResults[this.state.activeKey].name]}</ListGroup.Item>
              </Link>
            )): null}
          </ListGroup>
      </div>
    )
  }

  render() {
    let tabs = [
      {
        eventKey: "accounts",
        title: "Accounts",
        className: "accountsTab"
      },
      {
        eventKey: "users",
        title: "Users",
        className: "usersTab"
      },
      {
        eventKey: "processes",
        title: "Processes",
        className: "processesTab"
      }
    ]
    return (
      <Subscribe to={[CalloutsContainer]}>
      {(callouts) => (
        <div className = "searchContainer">
          <Tabs
            activeKey={this.state.activeKey}
            onSelect={activeKey => {
              this.setState({activeKey})
              this.handleChange(callouts, activeKey, this.state.currentSearch)
            }}
          >

          {tabs.map((tab, i) => {
            return (
              <Tab 
                key={tab.eventKey}
                eventKey={tab.eventKey} 
                title={tab.title}
                className={tab.className}
              >
                {this.renderSearchBar(callouts)}
              </Tab>
            )
          })}
          </Tabs>
        </div>
      )}
      </Subscribe>
    )
  }
}

export default Search;