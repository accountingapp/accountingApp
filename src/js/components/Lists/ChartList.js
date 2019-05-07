import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ChartList = ({
  title,
  listType,
  dependencies,
  createExcelWorkbook
}) => 
{
  return (
    <div className="section">
      <h2 className="listTitle">{title}</h2>
      <Button className="createWorkbook" onClick={createExcelWorkbook}>Create New Chart</Button>
      <Container>
        <Row>
          {dependencies && dependencies.length ? (
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