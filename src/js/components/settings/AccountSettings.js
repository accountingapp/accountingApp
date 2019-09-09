import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import PasswordReset from "./PasswordReset";

class AccountSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSetting: "",
      selectedSettingIdx: "",
      settingHasChanges: false,
      showModal: false
    };

    this.selectSetting = this.selectSetting.bind(this);
    this.renderSelectedComponent = this.renderSelectedComponent.bind(this);
    this.settingHasChanges = this.settingHasChanges.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  selectSetting(setting, idx) {
    if (this.state.settingHasChanges) {
      this.setState({
        showModal: true
      });
    } else {
      this.setState({
        selectedSetting: setting,
        selectedSettingIdx: idx,
        settingHasChanges: false,
        showModal: false
      });
    }
  }

  // Add any new setting component here.  See first case (PasswordReset) for example.
  renderSelectedComponent() {
    const setting = this.state.selectedSetting;
    switch (setting) {
      case "Password Reset 🔒":
        return (
          <PasswordReset
            {...this.props}
            settinghaschanges={this.settingHasChanges}
          />
        );
      default:
        return <div>Placeholder</div>;
    }
  }

  // This function should be passed to all settings child components, who should in turn call it whenever changes are made in the respective component.
  // Doing this will cause a modal to be triggered (as of now just an alert) in order to prevent a user from navigating away from a setting and losing their changes
  settingHasChanges() {
    this.setState({
      settingHasChanges: true
    });
  }

  handleModal(e, setting, idx) {
    e.persist();
    const { id } = e.target;
    this.setState(
      {
        showModal: !this.state.showModal
      },
      () => {
        if (id === "OK") {
          this.setState(
            {
              settingHasChanges: false
            },
            () => this.selectSetting(setting, idx)
          );
        }
      }
    );
  }

  render() {
    const settings = [
      "Password Reset 🔒",
      "Update Email Address ✉️",
      "Change Something else"
    ];
    if (!this.props.user) {
      location.replace("/logout");
    }
    return (
      <div>
        <Row>
          <Col
            style={{
              paddingBottom: "100%",
              backgroundColor: "#F0F0F0",
              cursor: "pointer"
            }}
            md={3}
          >
            {settings.map((setting, idx) => (
              <div
                key={setting}
                style={{ paddingTop: "0.5rem", paddingLeft: "0.5rem" }}
              >
                <Modal show={this.state.showModal} onHide={this.handleModal}>
                  <Modal.Title>
                    Are you sure you want to leave this page?
                  </Modal.Title>
                  <Modal.Body>Your changes here will be lost</Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      id="cancel"
                      onClick={e => this.handleModal(e, setting, idx)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      id="OK"
                      onClick={e => this.handleModal(e, setting, idx)}
                    >
                      OK
                    </Button>
                  </Modal.Footer>
                </Modal>
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
