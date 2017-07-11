import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer/index.js';
import '../assets/css/App.css';


class App extends Component {
  render() {
    return (
      <div className="app-container">
        <HeaderContainer />
      </div>
    );
  }
}

export default App;
