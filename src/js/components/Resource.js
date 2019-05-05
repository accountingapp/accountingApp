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
      resource: {}
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
    return(
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
    )
  }
}

export default withRouter(Resource);