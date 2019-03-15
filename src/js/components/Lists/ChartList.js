import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagePlageholder from '../../../assets/processImage.svg'

const ChartList = ({
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
                <i className="fas fa-chart-line icon"></i>
                <span>{item}</span>
              </Col>
            ))
          ): null}
        </Row>
      </Container>
    </div>
  );
}

export default ChartList;