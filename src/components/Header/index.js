import React, { Component } from 'react';
import './Header.css';
import DefaultLogo from '../../assets/images/sparkasse-default-logo.png';
import Login from './Login/index';



class Header extends Component {
  render() {
    return (
      <div className="header-component">
        <nav>
          <div className="nav-wrapper">
             <div className="row col s12">

                <div className="col s3">
                  <a href="#" className="brand-logo">
                    <img className="responsive-img" src={DefaultLogo} />
                  </a>
                </div>


                <div className="col s6 center hide-on-med-and-down">
                  <Login />
                </div>

                <div className="col s3 brand-logo hide-on-med-and-down">
                  <a href="#" className="right">
                    <img className="responsive-img" src={DefaultLogo} />
                  </a>
                </div>

            </div>
          </div>
        </nav>
      </div>
    );
  }
}


export default Header;
