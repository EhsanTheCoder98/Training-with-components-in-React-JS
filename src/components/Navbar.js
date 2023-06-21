import React, { Component } from "react";
import styles from "./Navbar.module.css";
import logo from "../WallPaper/logo.jpg";

class Navbar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div    className={styles.paraContainer}>
          <p className={styles.para}>Products</p>
          <p className={styles.para}>How to pay</p>
          <p className={styles.para}>Call us</p>
        </div>
        <img src={logo} className={styles.logo} />
      </div>
    );
  }
}

export default Navbar;
