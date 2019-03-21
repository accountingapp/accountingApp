import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header(props){
  return (
    // <div className="header">
    //   <h1 className="title"><a className="appName" href='/'><i className="fas fa-comments-dollar" />Financially Stated</a></h1>
    //   <a className="Logout" href='/logout'>Logout</a>
    // </div>

    <Navbar className="header">
      <Navbar.Brand href='/' className="appName">
        <i className="fas fa-comments-dollar"/>     Financially Stated
      </Navbar.Brand>
      <Nav className="links">
        <Nav.Link href="#">My Profile</Nav.Link>
        <Nav.Link href="/logout">Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;