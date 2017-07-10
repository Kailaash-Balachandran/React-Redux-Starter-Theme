import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer/index.js';
import './assets/css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
      </div>
    );
  }
}

export default App;
