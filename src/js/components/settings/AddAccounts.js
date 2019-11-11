import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

class AddAccounts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allAccounts: [],
      description: "",
      natural: "",
      deleteXIdx: null
    };

    this.sortByNatural = (a, b) => a.natural - b.natural;
    this.handleAcctInput = this.handleAcctInput.bind(this);
    this.getAccounts = this.getAccounts.bind(this);
    this.addAccount = this.addAccount.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  componentDidMount() {
    this.getAccounts();
  }

  handleAcctInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleHover(e, i) {
    this.setState({
      deleteXIdx: i
    });
  }

  getAccounts() {
    axios
      .get("/accountsByEmail", { params: { email: this.props.user } })
      .then(results => {
        this.setState({
          allAccounts: results.data,
          description: "",
          natural: ""
        });
      })
      .catch(console.log);
  }

  addAccount(e) {
    e.preventDefault();
    const { natural, description } = this.state;
    const payload = {
      description,
      natural,
      email: this.props.user,
      moduleId: "37",
      processes: "{1,2}",
      contributors: "{1,2}"
    };
    axios
      .post("/account", payload)
      .then(this.getAccounts)
      .catch(console.log);
  }

  deleteAccount(e) {
    const { allAccounts, deleteXIdx } = this.state;

    axios
      .delete("/deleteAccount", { data: allAccounts[deleteXIdx] })
      .then(this.getAccounts)
      .catch(console.log);
  }

  render() {
    const user = this.props.user || "";
    const accounts = this.state.allAccounts.sort(this.sortByNatural);
    const div =
      accounts.length > 10 ? Math.round(accounts.length / 2) : accounts.length;
    const col1 = accounts.slice(0, div);
    const col2 = accounts.slice(div);
    //TODO: clean up formatting (make proper table headers)
    return (
      <div>
        <Row>
          <Col>
            <form
              onSubmit={this.addAccount}
              className="add-account"
              style={{ position: "sticky", top: "2rem" }}
            >
              <h3>
                <u>Add a New Account Here</u>
              </h3>
              <div className="form-group">
                <input
                  onChange={this.handleAcctInput}
                  type="text"
                  name="description"
                  value={this.state.description}
                  placeholder="account name / description..."
                />
              </div>
              <div className="form-group">
                <input
                  onChange={this.handleAcctInput}
                  type="text"
                  name="natural"
                  value={this.state.natural}
                  placeholder="account natural..."
                />
              </div>
              <div className="form-group">
                <input type="submit" className="btn" value="Add Account" />
              </div>
            </form>
          </Col>
          <Col className="text-left">
            <h3>
              <u>Accounts</u>
              {` (${this.state.allAccounts.length})`}
            </h3>
            {col1.map((acct, i) => (
              <div
                onMouseEnter={e => this.handleHover(e, i)}
                style={{ fontSize: 14, cursor: "pointer" }}
                key={i}
              >
                <b>{`${i + 1}) `}</b>
                {` ${acct.description.slice(0, 35)}${
                  acct.description.length >= 34 ? "..." : ""
                } ${acct.natural} `}
                {
                  <button
                    onClick={this.deleteAccount}
                    style={{
                      cursor: "pointer",
                      margin: "5px",
                      visibility: `${
                        i === this.state.deleteXIdx ? "" : "hidden"
                      }`
                    }}
                    className="fas fa-times"
                  />
                }
              </div>
            ))}
          </Col>
          <Col className="text-left">
            {col2.map((acct, i) => (
              <div
                onMouseEnter={e => this.handleHover(e, i + div)}
                style={{ fontSize: 14, cursor: "pointer" }}
                key={i + div}
              >
                <b>{`${i + 1 + div}) `}</b>
                {` ${acct.description.slice(0, 35)}${
                  acct.description.length >= 34 ? "..." : ""
                } ${acct.natural}`}
                {
                  <button
                    onClick={this.deleteAccount}
                    style={{
                      cursor: "pointer",
                      margin: "5px",
                      visibility: `${
                        i + div === this.state.deleteXIdx ? "" : "hidden"
                      }`
                    }}
                    className="fas fa-times"
                  />
                }
              </div>
            ))}
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddAccounts;
