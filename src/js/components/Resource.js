import React, { Component } from 'react';
import ProcessList from './Lists/ProcessList';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import {withRouter, Link} from 'react-router-dom';
import axios from 'axios';

import Search from './Search';

class Resource extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resource: {},
      resourceDescription: '',
      resourceLink: ''
    }
    this.resourceId=this.props.match.params.resourceId;
  }

  componentDidMount() {
    this.getResource(this.resourceId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.resourceId !== prevProps.match.params.resourceId) {
      this.getResource(this.resourceId);
    }
  }

  getResource(resourceId) {
    axios.get(`/resourceDetails/${resourceId}`)
    .then(results => {
      this.setState({
        resource: results.data[0]
      })
    })
  }

  render() {
    return (
      <div>
      {this.resourceId === 'new' ? (
        <div>
          <h2>NEW Resource</h2>
            <Row>
            <Col md={6}>
            <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                id='resourceDescription'
                value={this.state.resourceDescription}
                onChange={(e)=>this.setState({resourceDescription: e.target.value})}
              />
          </InputGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Link</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                id='resourceLink'
                value={this.state.resourceLink}
                onChange={(e)=>this.setState({resourceLink: e.target.value})}
              />
          </InputGroup>
            </Col>
            <Col md={6}>
            Notes
            </Col>
              </Row>

          <Button>Find Resource</Button>
        </div>
      ) : (
        <>
        <h2>{this.state.resource.description}</h2>
        <Container>
          <Row>
            <Col md={6}>
              <iframe src={this.state.resource.link} />
            </Col>
            <Col md={6}>
              Notes
            </Col>
          </Row>
        </Container>
      </>
      )}
    </div>
    )
  }
}

export default withRouter(Resource);