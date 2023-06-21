import React, { Component } from 'react';

import "./App.css";
import Navbar from './components/Navbar';
import Main from './components/Main';
import Cards from './components/Cards';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Cards />
      </div>
    );
  }
}

export default App;