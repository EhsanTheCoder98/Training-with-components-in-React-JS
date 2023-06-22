import React, { Component } from 'react';

import "./App.css";
import Navbar from './components/Navbar';
import Main from './components/Main';
import Cards from './components/Cards';
import Search from './components/Search';
import Support from './components/Support';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Cards />
        <Search />
        <Support />
        <Footer />
      </div>
    );
  }
}

export default App;