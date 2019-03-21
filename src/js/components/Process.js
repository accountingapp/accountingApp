import React, { Component } from 'react';
import ProcessList from './Lists/ProcessList';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import {withRouter, Link} from 'react-router-dom';
import axios from 'axios';

import Search from './Search';

class Process extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      process: [],
      ownerName: '',
      activeKey: 'step'
    }
  }

  componentDidMount() {
    this.getProcess(this.props.match.params.processId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.processId !== prevProps.match.params.processId) {
      this.getProcess(this.props.match.params.processId);
    }
  }

  getProcess(processId) {
    axios.get(`/processDetails/${processId}`)
    .then(results => {
      this.setState({
        title: results.data.data[0].title,
        ownerName: results.data.data[0].name,
        process: results.data.data[0].process
      })
    })
  }

  handleChange(e) {
    this.setState({
      currentSearch: e.target.value
    });
    this.getAccounts(e.target.value)
  }

  renderTextArea() {
    return(
      <Form>
        <Form.Group>
          <Form.Control as="textarea" rows="4" />
        </Form.Group>
        <Button variant="outline-secondary">Add</Button>
      </Form>

    )
  }

  render() {
    const indentStyle = {
      0: "0px",
      1: "30px",
      2: "60px",
      3: "90px"
    }
    const actions = ["Step", "Note", "Tip", "Image", "Video", "File", "Link"]
    return(
      <div className="processWrap">
        {this.state.process ? (
          <div>
            <div className="processHeader">
              <h3>{this.state.title}</h3>
              <h3>Owner: {this.state.ownerName}</h3>
            </div>
            <div className="processBody">
              <Row>
                <Col md={5} className="steps">
                  {this.state.process.map((step, i) => (
                    <div key={i}>
                      <div 
                        className="stepData"
                        style={{paddingLeft: indentStyle[step.indention]}}
                      >
                          <span className="stepName">{`${step.name}: `}</span> 
                          {step.data}
                      </div>
                    </div>
                  ))}
                </Col>
                <Col md={{ span: 6, offset: 1 }} className="processInput">
                  <Tabs
                    activeKey={this.state.activeKey}
                    onSelect={activeKey => this.setState({activeKey})}
                  >
                    {actions.map((tab,i) => {
                      return (
                        <Tab
                          key={tab}
                          eventKey={tab.toLowerCase()}
                          title={tab}
                          className={`tab${tab}`}
                        >
                          {this.renderTextArea()}
                        </Tab>
                      )
                    })}
                  </Tabs>
                </Col>
              </Row>
            </div>
          </div>
        ) : null }
      </div>
    )
  }
}

export default withRouter(Process);