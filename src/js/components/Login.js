/*eslint-disable*/
import React from 'react';
import {Row, Container, Form} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import AppContainer from '../container/AppContainer'
import forbiddenDomains from './Lists/forbiddenDomains';
import { Subscribe } from 'unstated';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      registerEmail: '',
      company: '',
      loginEmail: '',
      loginPassword: '',
      loginNeedsValidation: false,
      registrationNeedsValidation: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.isValid = this.isValid.bind(this);
    this.isValidEmail = this.isValidEmail.bind(this);
    this.checkAllValuesForValidity = this.checkAllValuesForValidity.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  loginUser(e, app) {
    e.preventDefault();
    this.setState({
      loginNeedsValidation: true
    }, () => {
      if (this.checkAllValuesForValidity('loginEmail')) {
      const credentials = {
        email: this.state.loginEmail.toLowerCase(),
        password: this.state.loginPassword
      }
      axios.post('/loginUser', { credentials })
        .then(resp => {
          console.log('SUCCESSFUL LOGIN', resp);
          app.updateAuthenticationStatus();
        })
        .catch(e => {
          alert(e.response.data);
          location.reload('/');
        })
      }
    })
  }

  registerUser(e) {
    e.preventDefault();

    this.setState({
      registrationNeedsValidation: true
    }, () => {
        if (this.checkAllValuesForValidity('firstName', 'lastName', 'registerEmail', 'company')) {
          const { firstName, lastName, registerEmail, company } = this.state;
          const user = {
            name: `${firstName} ${lastName}`,
            email: registerEmail.toLowerCase(),
            company
          }
        
          axios.post('/newUser', { user })
            .then(resp => {
              setTimeout(() => {
                alert(resp.response.data.detail);
              }, 1000);
            })
            .catch(error => {
              console.log('registration error =', error.response);
              setTimeout(() => {
                alert(error.response.data.detail);
              }, 1000);
            });
        }
    })
  }

  checkAllValuesForValidity() {
    return [...arguments].every(value => this.isValid(value).includes('is-valid'));
  }

  isValid(value) {
      const inputVal = this.state[value];

      if (value.includes('Email')) {
        return this.isValidEmail(inputVal) ? 'is-valid' : 'is-invalid';
      } 

      // this is just a 'required' field check
      return inputVal ? 'is-valid' : 'is-invalid';
    
  }

  isValidEmail(email) {
    const hasValidFormatting = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    const onlyIncludesASCiiChars = /^[\x00-\x7F]+$/.test(email);
    const notAForbiddenDomain = () => {
      if (this.state.company === 'FINSTATED ADMIN') return true;
      const domains = email.split('@')[1].split('.');
      return domains.every(domain => !(domain in forbiddenDomains));
    }
    
    return hasValidFormatting && onlyIncludesASCiiChars && notAForbiddenDomain();
  }

  render() {
    const { loginNeedsValidation, registrationNeedsValidation } = this.state;
    return (
      <Subscribe to={[AppContainer]}>
        {(app) => { 
          return app.isAuthenticated() ? 
            (<Redirect to="/" />) : 
            (<div className="top-content">
                <div className="inner-bg">
                  <Container className="container">
                    <Row className="row">
                      <div className="col-sm-5">
                        <div className="form-box">
                          <div className="form-top">
                            <div className="form-top-left">
                              <h3>Login to our site</h3>
                              <p>Enter email and password to log on:</p>
                            </div>
                            <div className="form-top-right">
                              <i className="fa fa-key"></i>
                            </div>
                          </div>
                          <div className="form-bottom">
          {/************ LOGIN FORM ************/}
                            <form onSubmit={(e) => this.loginUser(e, app)} className="login-form">
                              <div className="form-group">
                                <label className="sr-only">Email</label>
                                <input
                                  onChange={this.handleChange}
                                  type="text" 
                                  name="loginEmail" 
                                  placeholder="Email..." 
                                  className={`loginEmail form-control ${loginNeedsValidation && this.isValid('loginEmail')}`} 
                                  id="loginEmail"
                                  value={this.state.loginEmail}/>
                                <div className="invalid-feedback">
                                  Please enter a valid email address.
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="sr-only">Password</label>
                                <input 
                                  onChange={this.handleChange}
                                  type="password" 
                                  name="loginPassword" 
                                  placeholder="Password..." 
                                  className="loginPassword form-control" 
                                  id="loginPassword"
                                  value={this.state.loginPassword}/>
                              </div>
                              <input type="submit" className="btn" value="Sign In!"/>
                            </form>
          {/**************************************/}
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-1 middle-border"></div>
                      <div className="col-sm-1"></div>
                      <div className="col-sm-5">
                        <div className="form-box">
                          <div className="form-top">
                            <div className="form-top-left">
                              <h3>Sign up now</h3>
                              <p>Fill in the form below to get instant access:</p>
                            </div>
                            <div className="form-top-right">
                              <i className="fa fa-pencil"></i>
                            </div>
                          </div>
                          <div className="form-bottom">
          {/************ REGISTRATION FORM ************/}
                            <form onSubmit={this.registerUser} className="registration-form">
                              <div className="form-group">
                                <label className="sr-only">First name</label>
                                <input 
                                  type="text" 
                                  name="firstName" 
                                  onChange={this.handleChange}
                                  placeholder="First name..." 
                                  className={`form-first-name form-control ${registrationNeedsValidation && this.isValid('firstName')}`} 
                                  id="form-first-name"
                                  />
                              </div>
                              <div className="form-group">
                                <label className="sr-only">Last name</label>
                                <input 
                                  type="text" 
                                  name="lastName" 
                                  onChange={this.handleChange}
                                  placeholder="Last name..." 
                                  className={`form-last-name form-control ${registrationNeedsValidation && this.isValid('lastName')}`}
                                  id="form-last-name"
                                  />
                              </div>
                              <div className="form-group">
                                <label className="sr-only">Email</label>
                                <input 
                                  type="text" 
                                  name="registerEmail"
                                  onChange={this.handleChange}
                                  placeholder="Email..." 
                                  className={`form-email-register form-control ${registrationNeedsValidation && this.isValid('registerEmail')}`}
                                  id="form-email-register"
                                  />
                                  <div className="invalid-feedback">
                                    Please enter a valid company or school email address.
                                  </div>
                              </div>
                              <div className="form-group">
                                <label className="sr-only">Your Company Name</label>
                                <input 
                                  type="text"
                                  name="company"
                                  onChange={this.handleChange}
                                  placeholder="Your Company Name..."
                                  className={`"form-your-company form-control ${registrationNeedsValidation && this.isValid('company')}`} 
                                  id="form-your-company"
                                  />
                              </div>
                              <input type="submit" className="btn" value="Sign Me Up!"/>
                            </form>
          {/**************************************/}
                          </div>
                        </div>    
                      </div>
                    </Row>
                  </Container>
                </div>

            </div>)
        }}
      </Subscribe>
    )
  }
}

export default Login;