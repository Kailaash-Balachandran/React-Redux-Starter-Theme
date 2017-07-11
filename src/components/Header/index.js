import React, { Component } from 'react';
import './Header.css';
import { TopMenu } from './TopMenu/index';



class Header extends Component {
  render() {
    return (
      <div className="header-component">
        <nav>
          <div className="nav-wrapper">
             <div className="row col s12">
                <div className="col s3">
                  <a href="https://onlinemacha.com" target="_blank" rel="noopener noreferrer" className="brand-logo">
                    <i className="material-icons">cloud</i>Logo
                  </a>
                </div>
                <div className="col s9">
                  <TopMenu />
                </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}


export default Header;
