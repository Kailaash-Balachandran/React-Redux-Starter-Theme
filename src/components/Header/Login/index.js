import React, { Component } from 'react';
import Form from './Form';
import './Login.css';



class Login extends Component {
  render() {
    return (
      <div className="header-login-component">
        <div id="nav-mobile" className="center hide-on-med-and-down">
          <div className="label">Online-Banking</div>
          <Form />
        </div>
      </div>
    );
  }
}


export default Login;
