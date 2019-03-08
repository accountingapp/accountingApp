import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagePlageholder from '../../assets/applicationImage.svg'

const ApplicationList = ({
  title,
  listType,
  dependencies
}) => 
{
  return (
    <div className="section">
      <h2 className="listTitle">{title}</h2>
      <Container>
        <Row>
          {dependencies.length ? (
            dependencies.map((item,i) => (
              <Col md={2} className="dependency" key={`${i}_${item}`}>
                <Image src={imagePlageholder} rounded />
                <span>{item}</span>
              </Col>
            ))
          ): null}
        </Row>
      </Container>
    </div>
  );
}

export default ApplicationList;