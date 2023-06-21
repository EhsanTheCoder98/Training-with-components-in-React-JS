import React, { Component } from "react";
import styles from "./Navbar.module.css";
import logo from "../WallPaper/logo.jpg";

class Navbar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div    className={styles.paraContainer}>
          <p className={styles.para}><a href="#product">Products</a></p>
          <p className={styles.para}>How to pay</p>
          <p className={styles.para}>Call us</p>
        </div>
        <img src={logo} className={styles.logo} alt="logo" />
      </div>
    );
  }
}

export default Navbar;
