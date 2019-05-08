import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProcessList = ({
  title,
  listType,
  dependencies
}) => 
{
  return (
    <div className="section">
      <h2 className="listTitle">{title}<i className="fas fa-plus-square" /></h2>
      <Container>
        <Row>
          {dependencies && dependencies.length ? (
            dependencies.map((process,i) => (
              <Col md={2} className="dependency" key={`${i}_${process}`}>
                <Link to={`/process/${process.id}`}>
                  <i className="fas fa-clipboard-list icon" />
                  <div>{process.title}</div>
                </Link>
              </Col>
            ))
          ): null}
        </Row>
      </Container>
    </div>
  );
}

export default ProcessList;