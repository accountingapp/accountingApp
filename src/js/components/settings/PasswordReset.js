import React from "react";
import Switch from "react-switch";
import axios from "axios";

class PasswordReset extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.user || "",
      currentPassword: "",
      invalidCurrentPasswordFeedback: "",
      newPassword1: "",
      newPassword2: "",
      invalidNewPasswordFeedback: "",
      show: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }

  handleInputChange(e) {
    const fieldName = e.target.name;

    this.setState(
      {
        [fieldName]: e.target.value,
        invalidCurrentPasswordFeedback: ""
      },
      () => {
        this.props.settinghaschanges();
        if (fieldName.includes("newPassword")) {
          this.validatePassword(fieldName);
        }
      }
    );
  }

  toggleShow() {
    this.setState({
      show: !this.state.show
    });
  }

  validatePassword(fieldName) {
    const input = this.state[fieldName];
    const pwdReqRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-])(?=.{8,})"
    ).test(input);
    const pwdMatch = this.state.newPassword1 === this.state.newPassword2;
    const newNotSameAsOld =
      this.state.newPassword1 !== this.state.currentPassword;

    let invalidFeeback = "";

    if (!newNotSameAsOld)
      invalidFeeback =
        "Your new password cannot be the same as your current password.";
    if (!pwdMatch && this.state.newPassword2)
      invalidFeeback = "New passwords do not match.";
    if (!pwdReqRegex && !this.state.newPassword2)
      invalidFeeback =
        "Password does not meet minimum requirements(see below).";

    this.setState({
      invalidNewPasswordFeedback: invalidFeeback
    });
  }

  resetPassword(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.currentPassword,
      newPassword: this.state.newPassword1
    };

    axios
      .patch("/resetPassword", { user })
      .then(res => {
        // TODO: make a proper modal for this
        alert(
          "Password successfully updated!  Please login with your new password."
        );
        location.replace("/logout");
      })
      .catch(err => {
        this.setState({
          invalidCurrentPasswordFeedback:
            err.response.data ||
            "Password reset failed.  The password you've entered may be incorrect"
        });
      });
  }

  render() {
    return (
      <div className="passwordResetForm">
        <h3>Password Reset</h3>
        <p>
          Enter your credentials below, and select OK to reset your password
        </p>
        <form onSubmit={this.resetPassword}>
          <div className="form-group">
            <input
              className={`form-control ${
                this.state.invalidCurrentPasswordFeedback &&
                this.state.currentPassword
                  ? "is-invalid"
                  : ""
              }`}
              type={this.state.show ? "text" : "password"}
              name="currentPassword"
              placeholder="Current password..."
              onChange={this.handleInputChange}
              value={this.state.currentPassword}
            />
            <div className="invalid-feedback">
              {this.state.invalidCurrentPasswordFeedback}
            </div>
          </div>
          <div className="form-group">
            <input
              className={`form-control ${
                this.state.newPassword1
                  ? !this.state.newPassword2 &&
                    this.state.invalidNewPasswordFeedback
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              type={this.state.show ? "text" : "password"}
              name="newPassword1"
              placeholder="New password..."
              onChange={this.handleInputChange}
              value={this.state.newPassword1}
            />
            <div className="invalid-feedback">
              {this.state.invalidNewPasswordFeedback}
            </div>
          </div>
          <div className="form-group">
            <input
              className={`form-control ${
                this.state.newPassword2
                  ? this.state.invalidNewPasswordFeedback
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              type={this.state.show ? "text" : "password"}
              name="newPassword2"
              placeholder="New password again..."
              onChange={this.handleInputChange}
              value={this.state.newPassword2}
            />
            <div className="invalid-feedback">
              {this.state.invalidNewPasswordFeedback}
            </div>
          </div>
          <p className="passwordResetRequirements">
            Your new password must be 8 characters or longer and contain at
            least 1 of each of the following: an uppercase character, a
            lowercase character, a number, a special character
          </p>
          <div>
            <span className="showPasswordToggle">
              <Switch onChange={this.toggleShow} checked={this.state.show} />
              <div>{`(${this.state.show ? "Hide" : "Show"} passwords)`}</div>
            </span>
            <input
              type="submit"
              className="btn passwordResetBtn"
              value="OK"
              disabled={this.state.invalidNewPasswordFeedback}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default PasswordReset;
