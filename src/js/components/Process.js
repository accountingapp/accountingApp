import React, { Component } from 'react';
import ProcessList from './Lists/ProcessList';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
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
      processSteps: [],
      ownerName: '',
      processTitle: '',
      stepTextField: '',
      newStepTitle: '',
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
        processSteps: results.data.data[0].process,
        ownerName: results.data.data[0].name,
        processTitle: results.data.data[0].title,
      })
    })
  }

  addProcessStep(processId, newProcess) {
    let currentProcess = this.state.processSteps;
    currentProcess.push(newProcess);
    axios.patch(`/processDetails/${processId}`, currentProcess)
    .then(results => {
      this.setState({
        processSteps: currentProcess
      })
    })
  }

  renderTextArea() {
    return(
      <div>
      <InputGroup>
          <FormControl
            placeholder="Step Title"
            value={this.state.newStepTitle}
            onChange={(e)=>this.setState({newStepTitle: e.target.value})}
          />
      </InputGroup>
      <InputGroup>
          <FormControl 
            as="textarea" 
            rows="4"
            value={this.state.stepTextField}
            onChange={(e => this.setState({stepTextField: e.target.value}))}
          />
        </InputGroup>
        <Button 
          variant="outline-secondary"
          onClick={()=>{
            let newProcessStep = {
              type: this.state.activeKey,
              name: this.state.newStepTitle,
              indention: '0',
              data: this.state.stepTextField
            }
            this.addProcessStep(this.props.match.params.processId, newProcessStep);
            this.setState({
              stepTextField: '',
              newStepTitle: '',
            })
          }}
        >
          Add
        </Button>
      </div>

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
        {this.state.processSteps ? (
          <div>
            <div className="processHeader">
              <h3>{this.state.processTitle}</h3>
              <h3>Owner: {this.state.ownerName}</h3>
            </div>
            <div className="processBody">
              <Row>
                <Col md={5} className="steps">
                  {this.state.processSteps.map((step, i) => (
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