import React from "react";
import { Table } from "react-bootstrap";

class TChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { chart } = this.props;
    let totalLeft = "";
    let totalRight = "";
    if (chart.total.toString()[0] === "-") {
      totalRight = chart.total.toFixed(2).slice(1);
    } else if (chart.total !== 0) {
      totalLeft = chart.total.toFixed(2);
    }
    return (
      <div className="TChart">
        <Table className="TChart__table">
          <thead>
            <tr>
              <th className="TChart__headerStage" />
              <th colspan="2" className="TChart__header">
                {chart.account}
              </th>
            </tr>
            <tr>
              <th className="TChart__headerStage" />
              <th className="TChart__header--column">Debit</th>
              <th className="TChart__header--column">Credit</th>
            </tr>
          </thead>
          <tbody>
            {chart.stages.map(currentStage => {
              let { amount, debitCredit, stage } = currentStage;
              return (
                <tr key={stage}>
                  <td className="TChart__cell--stageNumber">{stage}</td>
                  <td className="TChart__cell--debit">
                    {debitCredit === "Debit" ? amount : null}
                  </td>
                  <td className="TChart__cell--credit border-left">
                    {debitCredit === "Credit" ? amount : null}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td className="TChart__cell--stageNumber" />
              <td className="TChart__cell--totalLeft">{totalLeft}</td>
              <td className="TChart__cell--totalRight">{totalRight}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TChart;
