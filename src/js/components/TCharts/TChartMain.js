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
      charts: {}
    };
    // console.log("T CHART PROPS: ", props);
    this.transformAccountArray = this.transformAccountArray.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  componentDidMount() {
    this.transformAccountArray(this.props.selectedEvent);
  }

  transformAccountArray(selectedEvent) {
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
            total: this.calculateTotal(stageInfo)
          };
        } else {
          transformedAccountObject[
            account.accountDescription
          ].stages = transformedAccountObject[
            account.accountDescription
          ].stages.concat(stageInfo);
          transformedAccountObject[
            account.accountDescription
          ].total = this.calculateTotal(
            stageInfo,
            transformedAccountObject[account.accountDescription].total
          );
        }
      });
    });
    this.setState({ charts: transformedAccountObject });
    return transformedAccountObject;
  }

  calculateTotal(newStage, currentTotal = 0) {
    let newAmount =
      newStage.debitCredit === "Credit"
        ? `-${newStage.amount.trim()}`
        : `+${newStage.amount.trim()}`;
    newAmount = Number(parseFloat(newAmount).toFixed(2));
    let total = Number(parseFloat(currentTotal).toFixed(2)) + newAmount;
    console.log("CALCULATE: ", total);
    return total;
  }

  render() {
    const { selectedEvent } = this.props;
    return (
      <div>
        <ol className="stageDescriptionList">
          {selectedEvent.stages.map((stage, i) => (
            <li key={`stage_${i}`}>{stage.stageDescription}</li>
          ))}
        </ol>
        <Container>
          <Row>
            {!!Object.keys(this.state.charts).length &&
              Object.keys(this.state.charts).map(account => (
                <Col md={4} key={account}>
                  <TChart
                    chart={Object.assign(
                      {},
                      { account },
                      this.state.charts[account]
                    )}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default TChartMain;
