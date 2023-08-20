import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';

import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepagecontent from './components/Homepagecontent';
import product from './components/product';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/products" component={product}/>
          <Route path="/" component={Homepagecontent}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;