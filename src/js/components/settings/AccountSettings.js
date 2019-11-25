import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import PasswordReset from "./PasswordReset";
import AddAccounts from "./AddAccounts";

class AccountSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSetting: "",
      selectedSettingIdx: "",
      changeToSetting: "",
      changeToSettingIdx: "",
      settingHasChanges: false,
      showModal: false
    };

    this.selectSetting = this.selectSetting.bind(this);
    this.renderSelectedComponent = this.renderSelectedComponent.bind(this);
    this.settingHasChanges = this.settingHasChanges.bind(this);
    this.handleModal = this.handleModal.bind(this);
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
      case "Add Accounts 💲":
        return (
          <AddAccounts
            {...this.props}
            settingHasChanges={this.settingHasChanges}
          />
        );
      default:
        return <div>Placeholder</div>;
    }
  }

  // This function should be passed to all settings child components (see renderSelectedComponent above), who should in turn call it whenever changes are made in the respective component.
  // Doing this will set a trigger for a modal that will notify the user that their changes will be lost if they continue.
  settingHasChanges() {
    this.setState({
      settingHasChanges: true
    });
  }

  selectSetting(setting, idx) {
    if (this.state.settingHasChanges) {
      this.setState({
        showModal: true,
        changeToSetting: setting,
        changeToSettingIdx: idx
      });
    } else {
      this.setState({
        selectedSetting: setting,
        selectedSettingIdx: idx
      });
    }
  }

  handleModal(e) {
    const { id } = e.target;

    if (id === "cancel") {
      this.setState({
        showModal: false
      });
    } else if (id === "OK") {
      this.setState(
        {
          showModal: false,
          settingHasChanges: false
        },
        () => {
          this.selectSetting(
            this.state.changeToSetting,
            this.state.changeToSettingIdx
          );
        }
      );
    }
  }

  render() {
    const settings = [
      "Password Reset 🔒",
      "Update Email ✉️",
      "Add Accounts 💲"
      // Add setting string here, then add matching component to renderSelectedComponent() above;
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
            lg={2}
          >
            {settings.map((setting, idx) => (
              <div
                key={setting}
                style={{ paddingTop: "0.5rem", paddingLeft: "0.5rem" }}
              >
                <Modal show={this.state.showModal}>
                  <Modal.Title>
                    Are you sure you want to leave this page?
                  </Modal.Title>
                  <Modal.Body>Your changes here will be lost</Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      id="cancel"
                      onClick={e => this.handleModal(e)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      id="OK"
                      onClick={e => this.handleModal(e)}
                    >
                      OK
                    </Button>
                  </Modal.Footer>
                </Modal>
                <div
                  onClick={() => this.selectSetting(setting, idx)}
                  style={
                    this.state.selectedSetting === setting
                      ? { fontWeight: "bold" }
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
