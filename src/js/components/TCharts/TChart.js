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
          <h5 style={{ color: "LightBlue", fontWeight: "bold" }}>2</h5>
          <h3>GL account from props</h3>
        </div>
        <Table>
          <thead>
            <tr>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="debit">4500</td>
              <td className="credit border-left" />
            </tr>
            <tr>
              <td className="debit" />
              <td className="credit border-left">(1300)</td>
            </tr>
            <tr>
              <td className="border-top" />
              <td className="border-top" />
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TChart;
