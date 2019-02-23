import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagePlageholder from '../../assets/placeholder.svg'

function AccountList(props){
  return (
    <div className="section">
      <h2 className="listTitle">{props.title}</h2>
      <Container>
        <Row>
          <Col md={2}>
            <Image src={imagePlageholder} rounded />
          </Col>
          <Col md={2}>
            <Image src={imagePlageholder} rounded />
          </Col>
          <Col md={2}>
            <Image src={imagePlageholder} rounded />
          </Col>
          <Col md={2}>
            <Image src={imagePlageholder} rounded />
          </Col>
          <Col md={2}>
            <Image src={imagePlageholder} rounded />
          </Col>
          <Col md={2}>
            <Image src={imagePlageholder} rounded />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AccountList;