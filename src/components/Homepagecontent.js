import React, { Component } from "react";
import Main from './Main';
import Cards from './Cards';
import Search from './Search';
import Support from './Support';


class Homepagecontent extends Component {
  render() {
    return (
      <div>
        <Main />
        <Cards />
        <Search />
        <Support />
      </div>
    );
  }
}

export default Homepagecontent;
