import React from 'react';
import { Button } from 'react-bootstrap';

const Login = () => (
  <div> 
    <div className="text-center loginHead">
      <h2>Welcome to Financially Stated!</h2>
    </div>
    <div className="text-center">
      <Button size="lg" type="submit" href="/login/google">
        <i className="glyphicon glyphicon-log-in" />
        Login
      </Button>
    </div>
  </div>
);

export default Login;