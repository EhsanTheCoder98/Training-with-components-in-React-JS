import React, { Component } from 'react';
import { Route , Routes } from 'react-router-dom';

import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepagecontent from './components/Homepagecontent';
import Product from './components/product';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Product />}/>
          <Route path="/" element={<Homepagecontent />}/>
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;