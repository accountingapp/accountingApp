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
    axios.patch(`/processDetails/process/${processId}`, currentProcess)
    .then(results => {
      this.setState({
        processSteps: currentProcess
      })
    })
  }

  updateOwnerOrTitle(field, updatedValue) {
    axios.patch(`/processDetails/${field}/${processId}`, updatedValue)
    .then(results => {
      console.log(`Successfully updated ${field} to ${updatedValue}`)
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
            placeholder=
              {this.state.activeKey === 'video' ? 
              'Add a link to a video. \n Example: "https://www.youtube.com/embed/-WAEzokHSJM"' : 
              this.state.activeKey === 'image' ?
              'Add a link to an image. \n Example: "https://www.smartsheet.com/sites/default/files/AccountsReceivableAging1.jpg"' :
              'Type your step information here.'
            }
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
              <div className="pageInfo">
                <i className="fas fa-clipboard-list icon"></i>
                <div className="pageInfoText">
                  <h2>Process</h2>
                    <h3>{this.state.processTitle}</h3>
                    <h3>Owner: {this.state.ownerName}</h3>
                </div>
              </div>
            </div>
            <div className="processBody">
              <Row>
                <Col md={5} className="steps">
                  {this.state.processSteps.map((step, i) => (
                    <div key={i}>
                      {step.type === 'step' || step.type === 'note' || step.type === 'tip' ? (
                        <>
                          <div 
                            className="stepData"
                          >
                              <span className="stepName">{`${step.name}: `}</span> 
                              {step.data}
                          </div>
                        </>
                      ) : 
                      step.type === 'image' ? (
                        <>
                          <div className="processImageTitle">{step.name}</div>
                          <img src={step.data} title='image'/>
                        </>
                      ) : 
                      step.type === 'video'? (
                        <>
                          <div className="processVideoTitle">{step.name}</div>
                          <iframe src={step.data}
                            className="processVideo"
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                        </>
                      ): null}
                    </div>
                  ))}  
                </Col>
                <Col md={{ span: 6, offset: 1 }} className="processInput">
                  <>
                    <div className="editProcessInfo">
                      <h2>Process Information</h2>

                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            id='processTitle'
                            value={this.state.processTitle}
                            onChange={(e)=>this.setState({processTitle: e.target.value})}
                          />
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">Owner</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            id='ownerName'
                            value={this.state.ownerName}
                            onChange={(e)=>this.setState({ownerName: e.target.value})}
                        />
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">Accounts</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          id='accounts'
                          placeholder='Accounts'
                        />
                      </InputGroup>
                    </div>
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
                  </>
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