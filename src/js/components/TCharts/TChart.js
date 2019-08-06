import React from "react";
import { Table } from "react-bootstrap";

class TChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { chart } = this.props;
    return (
      <div className="tChart">
        <Table>
          <thead>
            <tr>
              <th className="stageNumberHeader" />
              <th colspan="2" className="tChartHeader">
                {chart.account}
              </th>
            </tr>
            <tr>
              <th className="stageNumberHeader" />
              <th className="columnHeader">Debit</th>
              <th className="columnHeader">Credit</th>
            </tr>
          </thead>
          <tbody className="tChartBody">
            {chart.stages.map(stage => {
              if (stage.debitCredit === "Debit") {
                return (
                  <tr key={stage.stage}>
                    <td className="stageNumberCell">{stage.stage}</td>
                    <td className="debit">{stage.amount}</td>
                    <td className="credit border-left" />
                  </tr>
                );
              } else if (stage.debitCredit === "Credit") {
                return (
                  <tr key={stage.stage}>
                    <td className="stageNumberCell">{stage.stage}</td>
                    <td className="debit" />
                    <td className="credit border-left">{stage.amount}</td>
                  </tr>
                );
              } else return null;
            })}

            {chart.total === 0 ? (
              <tr>
                <td className="stageNumberCell" />
                <td className="totalLeft">&nbsp;</td>
                <td className="totalRight">&nbsp;</td>
              </tr>
            ) : chart.total.toString()[0] === "-" ? (
              <tr>
                <td className="stageNumberCell" />
                <td className="totalLeft" />
                <td className="totalRight">
                  {chart.total.toFixed(2).slice(1)}
                </td>
              </tr>
            ) : (
              <tr>
                <td className="stageNumberCell" />
                <td className="totalLeft">{chart.total.toFixed(2)}</td>
                <td className="totalRight" />
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TChart;
