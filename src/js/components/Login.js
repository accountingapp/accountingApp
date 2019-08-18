/*eslint-disable*/
import React from "react";
import { Button, Row, Container, Form, Modal } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";
import AppContainer from "../container/AppContainer";
import forbiddenDomains from "./Lists/forbiddenDomains";
import { Subscribe } from "unstated";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      registerEmail: "",
      company: "",
      loginEmail: "",
      loginPassword: "",
      showModal: false,
      modalEmail1: "",
      modalEmail2: "",
      modalInvalidFeedback: "",
      loginNeedsValidation: false,
      registrationNeedsValidation: false,
      spinner: false,
      forgotPasswordResults: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.isValid = this.isValid.bind(this);
    this.isValidEmail = this.isValidEmail.bind(this);
    this.checkAllValuesForValidity = this.checkAllValuesForValidity.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.toggleShowModal = this.toggleShowModal.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
  }

  handleChange(e) {
    let { modalInvalidFeedback } = this.state;
    if (e.target.name.includes("modal")) {
      modalInvalidFeedback = "";
    }
    this.setState({
      [e.target.name]: e.target.value.trim(),
      modalInvalidFeedback
    });
  }

  loginUser(e, app) {
    e.preventDefault();
    this.setState(
      {
        loginNeedsValidation: true
      },
      () => {
        if (this.checkAllValuesForValidity("loginEmail")) {
          const credentials = {
            email: this.state.loginEmail.toLowerCase(),
            password: this.state.loginPassword
          };
          axios
            .post("/loginUser", { credentials })
            .then(resp => {
              app.updateAuthenticationStatus();
            })
            .catch(e => {
              const message = e.response.data;
              if (message.includes("incorrect")) {
                this.setState({
                  loginPassword: "is-invalid"
                });
              } else {
                alert(e.response.data);
                location.reload("/");
              }
            });
        }
      }
    );
  }

  registerUser(e) {
    e.preventDefault();

    this.setState(
      {
        registrationNeedsValidation: true
      },
      () => {
        if (
          this.checkAllValuesForValidity(
            "firstName",
            "lastName",
            "registerEmail",
            "company"
          )
        ) {
          const { firstName, lastName, registerEmail, company } = this.state;
          const user = {
            name: `${firstName} ${lastName}`,
            email: registerEmail.toLowerCase(),
            company
          };
          setTimeout(() => {
            axios
              .post("/registerUser", { user })
              .then(resp => {
                console.log("resp", resp.data);
                setTimeout(() => {
                  alert(
                    `${
                      resp.data
                    }\nLogin credentials have been sent to your email`
                  );
                  location.reload("/");
                }, 1000);
              })
              .catch(error => {
                console.log("registration error =", error.response);
                setTimeout(() => {
                  alert(error.response.data.detail);
                }, 1000);
              });
          }, 1000);
        }
      }
    );
  }

  handleModal(e) {
    if (!e || e.target.id === "cancel") {
      this.toggleShowModal();
      return;
    }

    if (e.target.id === "send") {
      const { modalEmail1, modalEmail2 } = this.state;
      if (modalEmail1 === modalEmail2) {
        if (this.checkAllValuesForValidity("modalEmail1", "modalEmail2")) {
          this.setState(
            {
              modalInvalidFeedback: "",
              spinner: true
            },
            this.forgotPassword()
          );
        } else {
          this.setState({
            modalInvalidFeedback:
              "Please enter a valid company or school email address."
          });
        }
      } else {
        this.setState({
          modalInvalidFeedback: "Emails do not match"
        });
      }
    }
  }

  toggleShowModal() {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal,
      modalEmail1: "",
      modalEmail2: "",
      spinner: false,
      modalInvalidFeedback: "",
      forgotPasswordResults: ""
    });
  }

  forgotPassword(e) {
    axios
      .post("/forgotPassword", { email: this.state.modalEmail1 })
      .then(resp => {
        this.setState({ forgotPasswordResults: resp.data });
      })
      .catch(error => {
        console.log("FORGOT PASSWORD ERROR\n", error.response);
        this.setState({
          forgotPasswordResults: error.response.data
        });
      });
  }

  checkAllValuesForValidity() {
    return [...arguments].every(value =>
      this.isValid(value).includes("is-valid")
    );
  }

  // Add notes for these functions --> how these accept REFERENCES to the values in state, not the values themselves.
  isValid(value) {
    const inputVal = this.state[value];

    if (value.includes("Email")) {
      return this.isValidEmail(inputVal) ? "is-valid" : "is-invalid";
    }

    if (value.includes("Password")) {
      return this.state.loginPassword;
    }

    // this is just a 'required' field check
    return inputVal ? "is-valid" : "is-invalid";
  }

  isValidEmail(email) {
    const hasValidFormatting = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
    const onlyIncludesASCiiChars = /^[\x00-\x7F]+$/.test(email);
    const notAForbiddenDomain = () => {
      if (this.state.company === "FINSTATED ADMIN") return true;
      const domains = email.split("@")[1].split(".");
      return domains.every(domain => !(domain in forbiddenDomains));
    };

    return (
      hasValidFormatting && onlyIncludesASCiiChars && notAForbiddenDomain()
    );
  }

  render() {
    const { loginNeedsValidation, registrationNeedsValidation } = this.state;
    return (
      <Subscribe to={[AppContainer]}>
        {app => {
          return app.isAuthenticated() ? (
            <Redirect to="/" />
          ) : (
            <div className="top-content">
              <Modal show={this.state.showModal} onHide={this.toggleShowModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Forgot Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {this.state.forgotPasswordResults ? (
                    <div>{this.state.forgotPasswordResults}</div>
                  ) : this.state.spinner ? (
                    <div className="spinner-border" role="status" />
                  ) : (
                    <div>
                      <p>Enter your email address</p>
                      <div className="form-group">
                        <input
                          className={`modalEmail1 form-control ${
                            this.state.modalInvalidFeedback ? "is-invalid" : ""
                          }`}
                          onChange={this.handleChange}
                          type="text"
                          name="modalEmail1"
                          placeholder="Email..."
                          value={this.state.modalEmail1}
                        />
                        <div className="invalid-feedback" />
                      </div>
                      <div className="form-group">
                        <input
                          className={`modalEmail2 form-control ${
                            this.state.modalInvalidFeedback ? "is-invalid" : ""
                          }`}
                          onChange={this.handleChange}
                          type="text"
                          name="modalEmail2"
                          placeholder="Confirm Email..."
                          value={this.state.modalEmail2}
                        />
                        <div className="invalid-feedback">
                          {this.state.modalInvalidFeedback}
                        </div>
                      </div>
                    </div>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  {this.state.forgotPasswordResults ? (
                    <Button
                      variant="primary"
                      id="close"
                      onClick={this.toggleShowModal}
                    >
                      Close
                    </Button>
                  ) : (
                    <div className="form-group">
                      <Button
                        variant="secondary"
                        id="cancel"
                        onClick={this.toggleShowModal}
                      >
                        Cancel
                      </Button>
                      <div className="divider" />
                      <Button
                        variant="primary"
                        id="send"
                        onClick={this.handleModal}
                      >
                        Send
                      </Button>
                    </div>
                  )}
                </Modal.Footer>
              </Modal>
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
                            <i className="fa fa-key" />
                          </div>
                        </div>
                        <div className="form-bottom">
                          {/************ LOGIN FORM ************/}
                          <form
                            onSubmit={e => this.loginUser(e, app)}
                            className="login-form"
                          >
                            <div className="form-group">
                              <label className="sr-only">Email</label>
                              <input
                                onChange={this.handleChange}
                                type="text"
                                name="loginEmail"
                                placeholder="Email..."
                                className={`loginEmail form-control ${loginNeedsValidation &&
                                  this.isValid("loginEmail")}`}
                                id="loginEmail"
                                value={this.state.loginEmail}
                              />
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
                                className={`loginPassword form-control ${loginNeedsValidation &&
                                  this.isValid("loginPassword")}`}
                                id="loginPassword"
                                value={this.state.loginPassword}
                              />
                              <div className="invalid-feedback">
                                Incorrect Password.{" "}
                                {
                                  <span
                                    className="forgotPassword"
                                    onClick={this.toggleShowModal}
                                  >
                                    Forgot your password?
                                  </span>
                                }
                              </div>
                            </div>
                            <input
                              type="submit"
                              className="btn"
                              value="Sign In!"
                            />
                          </form>
                          {/**************************************/}
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-1 middle-border" />
                    <div className="col-sm-1" />
                    <div className="col-sm-5">
                      <div className="form-box">
                        <div className="form-top">
                          <div className="form-top-left">
                            <h3>Sign up now</h3>
                            <p>Fill in the form below to get instant access:</p>
                          </div>
                          <div className="form-top-right">
                            <i className="fa fa-pencil" />
                          </div>
                        </div>
                        <div className="form-bottom">
                          {/************ REGISTRATION FORM ************/}
                          <form
                            onSubmit={e => this.registerUser(e)}
                            className="registration-form"
                          >
                            <div className="form-group">
                              <label className="sr-only">First name</label>
                              <input
                                type="text"
                                name="firstName"
                                onChange={this.handleChange}
                                placeholder="First name..."
                                className={`form-first-name form-control ${registrationNeedsValidation &&
                                  this.isValid("firstName")}`}
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
                                className={`form-last-name form-control ${registrationNeedsValidation &&
                                  this.isValid("lastName")}`}
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
                                className={`form-email-register form-control ${registrationNeedsValidation &&
                                  this.isValid("registerEmail")}`}
                                id="form-email-register"
                              />
                              <div className="invalid-feedback">
                                Please enter a valid company or school email
                                address.
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="sr-only">
                                Your Company Name
                              </label>
                              <input
                                type="text"
                                name="company"
                                onChange={this.handleChange}
                                placeholder="Your Company Name..."
                                className={`"form-your-company form-control ${registrationNeedsValidation &&
                                  this.isValid("company")}`}
                                id="form-your-company"
                              />
                            </div>
                            <input
                              type="submit"
                              className="btn"
                              value="Sign Me Up!"
                            />
                          </form>
                          {/**************************************/}
                        </div>
                      </div>
                    </div>
                  </Row>
                </Container>
              </div>
            </div>
          );
        }}
      </Subscribe>
    );
  }
}

export default Login;
