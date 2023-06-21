import React, { Component } from "react";
import styles from "./Support.module.css";
import Apple from "../WallPaper/Apple.jpg";
import Microsoft from "../WallPaper/Microsoft.jpg";
import Nasa from "../WallPaper/Nasa.jpg";

class Support extends Component {
  render() {
    return (
      <>
        <h3 className={styles.header}>Who Supports Us?</h3>
        <div className={styles.container}>
          <img src={Apple} className={styles.pic}  alt="" />
          <img src={Microsoft} className={styles.pic} alt="" />
          <img src={Nasa} className={styles.pic} alt="" />
        </div>
      </>
    );
  }
}

export default Support;
