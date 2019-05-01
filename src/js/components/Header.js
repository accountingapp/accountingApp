import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function Header(props){
  return (
    <Navbar className="header">
      <Navbar.Brand href='/user-login' className="appName">
        <i className="fas fa-comments-dollar"/>     Financially Stated
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href={`/settings`}>Settings</Nav.Link>
          <Nav.Link href={`/owner/${props.user}`}>My Profile</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;