import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Table } from "react-bootstrap";
import TChart from "./TChart";

class TChartMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credits: [],
      debits: [],
      accounts: []
    };
    // console.log("T CHART PROPS: ", props);
    this.transformAccountArray = this.transformAccountArray.bind(this);
  }

  componentDidMount() {
    this.transformAccountArray(this.props.selectedEvent);
  }

  transformAccountArray(selectedEvent) {
    console.log("SELECTED EVENT: ", selectedEvent);
    // let example = {
    //   "Cost of Goods Sold": {
    //     "stages": [
    //       {
    //         "stage": 2,
    //         "debitCredit": "debit",
    //         "amount": "4,500.00"
    //       }
    //     ],
    //     "total": "4,500.00"
    //   },
    //   "Inventory": {
    //     "stages": [
    //       {
    //         "stage": 2,
    //         "debitCredit": "credit",
    //         "amount": "4,500.00"
    //       }
    //     ],
    //     "total": "4,500.00"
    //   },
    //   "AccountReceivable": {
    //     "stages": [
    //       {
    //         "stage": 2,
    //         "debitCredit": "debit",
    //         "amount": "9742.50"
    //       },
    //       {
    //         "stage": 3,
    //         "debitCredit": "credit",
    //         "amount": "9742.50"
    //       }
    //     ],
    //     "total": "0"
    //   }
    // }
    let transformedAccountObject = {};
    selectedEvent.stages.forEach((stage, stageIndex) => {
      if (stage.financialImpact === "no") return;
      stage.accounts.forEach((account, accountIndex) => {
        let stageInfo = {
          stage: stageIndex + 1,
          debitCredit: account.debitCredit,
          amount: account.amount
        };
        if (!transformedAccountObject[account.accountDescription]) {
          transformedAccountObject[account.accountDescription] = {
            stages: [stageInfo],
            total: stageInfo.amount
          };
        } else {
          transformedAccountObject[
            account.accountDescription
          ].stages = transformedAccountObject[
            account.accountDescription
          ].stages.concat(stageInfo);
          transformedAccountObject[account.accountDescription].total +=
            stageInfo.amount;
        }
      });
    });
    console.log("TRANSFORMED: ", transformedAccountObject);
    return transformedAccountObject;
  }

  render() {
    const { selectedEvent } = this.props;

    return (
      <div>
        <ol className="stageDescriptionList">
          {selectedEvent.stages.map(stage => (
            <li>{stage.stageDescription}</li>
          ))}
        </ol>
        <Container>
          <Row>
            <Col md={4}>
              <TChart />
            </Col>
            <Col md={4}>
              <TChart />
            </Col>
            <Col md={4}>
              <TChart />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <TChart />
            </Col>
            <Col md={4}>
              <TChart />
            </Col>
            <Col md={4}>
              <TChart />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TChartMain;
