import React, { Component } from 'react';

function Header(props){
  return (
    <div className="header">
      <h1 className="title"><a className="fas fa-comments-dollar appName" href='/'>Financially Stated</a></h1>
      <a className="Logout" href='/logout'>Logout</a>
    </div>
  );
}

export default Header;