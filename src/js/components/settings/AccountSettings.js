import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import PasswordReset from "./PasswordReset";

class AccountSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSetting: "",
      selectedSettingIdx: ""
    };

    this.selectSetting = this.selectSetting.bind(this);
    this.renderSelectedComponent = this.renderSelectedComponent.bind(this);
  }

  selectSetting(setting, idx) {
    this.setState({
      selectedSetting: setting,
      selectedSettingIdx: idx
    });
  }

  renderSelectedComponent() {
    const setting = this.state.selectedSetting;
    switch (setting) {
      case "Password Reset 🔒":
        return <PasswordReset {...this.props} />;
      default:
        return <div>Placeholder</div>;
    }
  }

  render() {
    const settings = [
      "Password Reset 🔒",
      "Update Email Address ✉️",
      "Change Something else"
    ];
    return (
      <div>
        <Row>
          <Col
            style={{ paddingBottom: "100%", backgroundColor: "#F0F0F0" }}
            md={2}
          >
            {settings.map((setting, idx) => (
              <div key={setting} style={{ paddingTop: "0.5rem" }}>
                <div
                  onClick={() => this.selectSetting(setting, idx)}
                  style={
                    this.state.selectedSetting === setting
                      ? { backgroundColor: "#C8C8C8", fontWeight: "bold" }
                      : null
                  }
                >
                  {setting}
                </div>
              </div>
            ))}
          </Col>
          <Col style={{ textAlign: "center", paddingTop: "3rem" }}>
            {this.renderSelectedComponent()}
          </Col>
        </Row>
      </div>
    );
  }
}

export default AccountSettings;
