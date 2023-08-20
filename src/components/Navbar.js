import React, { Component } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div    className={styles.paraContainer}>
          <ul className={styles.ul}>
          <li className={styles.para}><Link to="/">Home Page</Link></li>
          <li className={styles.para}><Link to="/products">Products</Link></li>
          <li className={styles.para}><Link to="/payment">How to pay</Link></li>
          <li className={styles.para}><Link to="/callus">Call us</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
