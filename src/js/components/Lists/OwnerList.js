import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagePlageholder from '../../../assets/applicationImage.svg'

const OwnerList = ({
  title,
  listType,
  owner,
  contributors
}) => 
{
  console.log("OWNER: ", owner)
  return (
    <div className="section">
      <h2 className="listTitle">{title}</h2>
      <Container>
        <Row>
          <Col md={2} className="dependency">
            <Link to={`/owner/${owner.id}`}>
                <div><i className="fa fa-user ownerGlyph icon" /></div>
                <div>{owner.name}</div>
                <div>Owner</div>
            </Link>
          </Col>
          {contributors.map(user => (
            <Col md={2} className="dependency">
              <Link to={`/owner/${user.id}`}>
                  <div><i className="fa fa-user icon" /></div>
                  <div>{`${user.firstName} ${user.lastName}`}</div>
              </Link>
          </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default OwnerList;