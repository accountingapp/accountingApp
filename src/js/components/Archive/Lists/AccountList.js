import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AccountList = ({ title, listType, dependencies }) => {
  return (
    <div className="section">
      <h2 className="listTitle">{title}</h2>
      <Container>
        <Row>
          {dependencies && dependencies.length
            ? dependencies.map((account, i) => (
                <Col md={2} className="dependency" key={`${i}_${account}`}>
                  <Link to={`/account/${account.id}`}>
                    <i className="fas fa-balance-scale icon" />
                    <div>{account.description}</div>
                    <div>{account.natural}</div>
                  </Link>
                </Col>
              ))
            : null}
        </Row>
      </Container>
    </div>
  );
};

export default AccountList;
