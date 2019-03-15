import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagePlageholder from '../../../assets/accountImage.svg'

const AccountList = ({
  title,
  listType,
  accounts
}) => 
{
  return (
    <div className="section">
      <h2 className="listTitle">{title}</h2>
      <Container>
        <Row>
          {accounts.length ? (
            accounts.map((account,i) => (
              <Col md={2} className="dependency" key={`${i}_${account}`}>
                <Link to={`/account/${account.id}`}>
                  <i class="fas fa-balance-scale icon"></i>
                  <div>{account.description}</div>
                  <div>{account.natural}</div>
                </Link>
              </Col>
            ))
          ): null}
        </Row>
      </Container>
    </div>
  );
}

export default AccountList;