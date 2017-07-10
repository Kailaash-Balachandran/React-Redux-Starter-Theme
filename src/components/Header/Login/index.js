import React, { Component } from 'react';
import Form from './Form';
import './Login.css';



class Login extends Component {
  render() {
    return (
      <div className="header-login-component login-row ">
        <div id="nav-mobile" className="center hide-on-med-and-down col s12 login-row">
            <div className="col s3 left">
              <h2 className="right label">Online-Banking</h2>
            </div>
            <div className="col s9 right">
                <Form />
            </div>
          </div>
      </div>
    );
  }
}


export default Login;
