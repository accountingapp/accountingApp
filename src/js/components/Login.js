/*eslint-disable*/
import React from 'react';
import {Row, Container, Form} from 'react-bootstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: '',
      loginPassword: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  loginUser(e) {
    e.preventDefault();
  }

  registerUser(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="top-content">

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
                    <Form onSubmit={this.loginUser} className="login-form">
                      <div className="form-group">
                        <label className="sr-only">Email</label>
                        <input
                          onChange={this.handleChange}
                          type="text" 
                          name="loginEmail" 
                          placeholder="Email..." 
                          className="loginEmail form-control" 
                          id="loginEmail"
                          value={this.state.loginEmail}/>
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
                    </Form>
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
                    <Form onSubmit={this.registerUser} className="registration-form">
                      <div className="form-group">
                        <label className="sr-only">First name</label>
                        <input type="text" name="form-first-name" placeholder="First name..." className="form-first-name form-control" id="form-first-name"/>
                      </div>
                      <div className="form-group">
                        <label className="sr-only">Last name</label>
                        <input type="text" name="form-last-name" placeholder="Last name..." className="form-last-name form-control" id="form-last-name"/>
                      </div>
                      <div className="form-group">
                        <label className="sr-only">Email</label>
                        <input type="text" name="form-email-register" placeholder="Email..." className="form-email-register form-control" id="form-email-register"/>
                      </div>
                      <div className="form-group">
                        <label className="sr-only">Your Company Name</label>
                        <textarea name="form-your-company" placeholder="Your Company Name..."
                          className="form-your-company form-control" id="form-your-company"></textarea>
                      </div>
                      <input type="submit" className="btn" value="Sign Me Up!"/>
                    </Form>
                  </div>
                </div>
                      
              </div>
            </Row>

          </Container>
        </div>

      </div>
    )
  }
}

export default Login;