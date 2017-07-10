import React, { Component } from 'react';
import './Login.css';



class Form extends Component {
  render() {
    return (
      <form className="login-form-component">
        <div className="row">

          <div className="input-field col s4">
            <input placeholder="E-Mail" id="first_name" type="text" className="validate"/>
          </div>

          <div className="input-field col s4">
            <input id="last_name" type="password" placeholder="Passwort" className="validate" />
          </div>

          <div className="input-field login col s1">
            <input  type="submit" value="Submit" style={{"display":"none"}} />
          </div>

        </div>
      </form>
    );
  }
}


export default Form;
