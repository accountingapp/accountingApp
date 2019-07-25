import React, { PureComponent } from "react";
import { Subscribe } from "unstated";
import { Link, withRouter } from "react-router-dom";
import saveAs from "file-saver";
import XLSX from "xlsx";

import AccountList from "./Lists/AccountList";
import ProcessList from "./Lists/ProcessList";
import ApplicationList from "./Lists/ApplicationList";
import ChartList from "./Lists/ChartList";
import ResourceList from "./Lists/ResourceList";

import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

import CalloutsContainer from "../container/callouts";
import Search from "./Search";

class Owner extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ownerName: "",
      email: "",
      processes: [
        "Process 1",
        "Process 2",
        "Process 3",
        "Process 4",
        "Process 5",
        "Process 6"
      ],
      charts: [
        "Chart 1",
        "Chart 2",
        "Chart 3",
        "Chart 4",
        "Chart 5",
        "Chart 6"
      ],
      accounts: [],
      resources: [],
      applications: [
        { name: "slack", icon: "fab fa-slack" },
        { name: "google", icon: "fab fa-google" },
        { name: "excel", icon: "fas fa-file-excel" },
        { name: "linkedin", icon: "fab fa-linkedin" },
        { name: "reddit", icon: "fab fa-reddit" },
        { name: "stack overflow", icon: "fab fa-stack-overflow" }
      ]
    };
    this.ownerId = this.props.match.params.ownerId;
  }

  componentDidMount() {
    this.getOwnerDependencies(this.ownerId);
    this.getOwner(this.ownerId);
    this.getProcesses(this.ownerId);
    this.getResources();
  }

  componentDidUpdate(prevProps) {
    if (this.ownerId !== prevProps.match.params.ownerId) {
      this.getOwnerDependencies(this.ownerId);
      this.getOwner(this.ownerId);
      this.getProcesses(this.ownerId);
      this.getResources();
    }
  }

  getOwnerDependencies(ownerId) {
    if (ownerId) {
      axios.get(`/ownerDependencies/${ownerId}`).then(results => {
        this.setState({
          accounts: results.data.data
        });
      });
    }
  }

  getOwner(ownerId) {
    if (ownerId) {
      axios.get(`/ownerDetails/${ownerId}`).then(results => {
        this.setState({
          ownerName: results.data.data[0].name,
          email: results.data.data[0].email
        });
      });
    }
  }

  getProcesses(ownerId) {
    axios.get(`/processOwner/${ownerId}`).then(results => {
      this.setState({
        processes: results.data.length ? results.data : this.state.processes
      });
    });
  }

  getResources() {
    axios.get(`/resources`).then(results => {
      console.log("RESOURCES: ", results.data);
      this.setState({
        resources: results.data
      });
    });
  }

  handleChange(callouts, e) {
    this.setState({
      currentSearch: e.target.value
    });
    callouts.getAccounts(e.target.value);
  }

  // This should be moved elsewhere if it's not being passed as a prop to the account component;
  // saveToS3(event) {
  //   event.persist()
  //   console.log("FILE BEFORE SEND", event.target.value);
  //   axios.post('/charts', {file: event.target.value})
  //   .then(results => {
  //     // const newCharts = this.state.charts;
  //     console.log('SAVED TO S3 -->', results);
  //     // newCharts.push(results)
  //     this.setState({})
  //   })
  // }
  /*eslint-disable*/
  createExcelWorkbook() {
    const wb = XLSX.utils.book_new();

    wb.Props = {
      Title: "FS excel sheet",
      Subject: "Test file",
      Author: "Financially Stated",
      CreatedDate: new Date()
    };

    wb.SheetNames.push("Test Sheet");
    const ws_data = [["hello", "world"]];
    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    wb.Sheets["Test Sheet"] = ws;
    const wbOut = XLSX.write(wb, {
      bookType: "xlsx",
      type: "binary"
    });

    const s2ab = s => {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
      return buf;
    };

    saveAs(
      new Blob([s2ab(wbOut)], { type: "application/octet-stream" }),
      "test.xlsx"
    );
  }

  render() {
    return (
      <Subscribe to={[CalloutsContainer]}>
        {callouts => (
          <div>
            <Search />

            {this.state.ownerName ? (
              <div>
                <div className="pageInfo">
                  <i className="fa fa-user icon ownerGlyph" />
                  <div className="pageInfoText">
                    <h2>Owner</h2>
                    <h3>{this.state.ownerName}</h3>
                    <h3>{this.state.email}</h3>
                  </div>
                </div>

                <div className="accountList">
                  <ChartList
                    title="Charts"
                    listType="chart"
                    dependencies={this.state.charts}
                    createExcelWorkbook={this.createExcelWorkbook}
                  />
                  <ProcessList
                    title="Processes"
                    listType="process"
                    dependencies={this.state.processes}
                  />
                  <AccountList
                    title="Accounts"
                    listType="account"
                    dependencies={this.state.accounts.slice(0, 10)}
                  />
                  <ApplicationList
                    title="Applications"
                    listType="application"
                    dependencies={this.state.applications}
                  />
                  <ResourceList
                    title="Resources"
                    listType="resource"
                    dependencies={this.state.resources}
                    new={false}
                  />
                </div>
              </div>
            ) : null}
          </div>
        )}
      </Subscribe>
    );
  }
}

export default withRouter(Owner);
