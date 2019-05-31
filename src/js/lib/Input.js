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

class Input extends Component {
  constructor(props) {
    super(props)
    this.state= {
      inputValue: ""
    }
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
    
  render() {
    return (
      <div className="container">
      <InputGroup 
        className="mb-3"
      >
        <FormControl
          placeholder="Input Field"
          aria-describedby="basic-addon2"
          value={this.state.inputValue}
          onChange={(e) => this.handleChange(e)}
          className="inputField"
        />
      </InputGroup>
  </div>
    )
  }
}

export default Input;