import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import axios from "axios";

const AccountTable = ({
  accounts,
  accountSearchResults,
  handleAccountChange,
  onClick
}) => (
  <div className="accountTable">
    <Table striped hover borderless="true">
      <thead className="accountTableHeader">
        <tr>
          <th className="glAccountHeader">GL Account</th>
          <th className="debitCreditHeader">Debit/Credit</th>
          <th className="amountHeader">Amount</th>
          <th className="currencyHeader">Currency</th>
          <th className="accountTypeHeader">Account Type</th>
          <th className="increaseDecreaseHeader">Increase/Decrease</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((account, i) => (
          <tr key={`account-${i}`}>
            <td>
              <input
                id="accountDescription"
                value={accounts[i].accountDescription}
                onChange={e => handleAccountChange(e, i)}
                className="inputField accountTableInput"
                onClick={onClick}
                autoComplete="off"
              />
              <ListGroup className="listSearchResults">
                {accountSearchResults && accountSearchResults[i]
                  ? accountSearchResults[i].map((result, resIdx) => (
                      <div
                        key={`${resIdx}-${result.description}`}
                        onClick={e => {
                          e.target.id = "accountDescription";
                          e.target.value = e.target.innerHTML;
                          handleAccountChange(e, i);
                        }}
                      >
                        <ListGroup.Item>{result.description}</ListGroup.Item>
                      </div>
                    ))
                  : null}
              </ListGroup>
            </td>
            <td>
              {/* <input
                id="debitCredit"
                value={accounts[i].debitCredit}
                onChange={e => handleAccountChange(e.target.value, i)}
                className="inputField accountTableInput"
                onClick={onClick}
              /> */}
            </td>
            <td>
              {/* <input
                id="amount"
                value={accounts[i].amount}
                onChange={e => handleAccountChange(e.target.value, i)}
                className="inputField accountTableInput"
                onClick={onClick}
              /> */}
            </td>
            <td>
              {/* <input
                id="currency"
                value={accounts[i].currency}
                onChange={e => handleAccountChange(e.target.value, i)}
                className="inputField accountTableInput"
                onClick={onClick}
              /> */}
            </td>
            <td>
              <div id="accountType" className="accountType">
                {/* {accounts[i].accountType} */}
              </div>
            </td>
            <td>
              <div id="increaseDecrease" className="increaseDecrease">
                {/* {accounts[i].increaseDecrease} */}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default AccountTable;
