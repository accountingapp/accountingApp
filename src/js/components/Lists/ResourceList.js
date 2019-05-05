import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ResourceList = ({
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
          {dependencies && dependencies.length ? (dependencies.map(resource => (
            <Col md={2} className="dependency" key={resource.description}>
              <Link to={`/resource/${resource.id}`}>
                  <i className="fas fa-info-circle icon resourceIcon" />
                  <div>{resource.description}</div>
              </Link>
          </Col>
          ))) : null}
        </Row>
      </Container>
    </div>
  );
}

export default ResourceList;