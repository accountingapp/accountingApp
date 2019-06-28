import React from "react";
import { Table } from "react-bootstrap";

class TChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credits: [],
      debits: []
    };
  }

  render() {
    const { props } = this.props;
    return (
      <div className="tChart">
        <br />
        <div className="tChartHeader">
          <h3>GL account from props</h3>
        </div>
        <Table>
          {/* <thead>
            <tr>
              <th>Debit</th>
              <th>Credit</th>
            </tr>
          </thead> */}
          <tbody className="tChartBody">
            <tr>
              <td className="debit">4500</td>
              <td className="credit border-left" />
            </tr>
            <tr>
              <td className="debit" />
              <td className="credit border-left">1300</td>
            </tr>
            <tr>
              <td className="total" />
              <td className="total">3200</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TChart;
