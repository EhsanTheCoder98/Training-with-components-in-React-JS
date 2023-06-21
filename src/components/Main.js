import React, { Component } from 'react';
import main from "../WallPaper/main.jpg"
import styles from "./Main.module.css"
class Main extends Component {
    render() {
        return (
            <div    className={styles.container}>
                <img src={main} className={styles.image} alt="main" />
                <h3 className={styles.boto}>BOTOSTART</h3>
                <p  className={styles.para}>A place to learn more about coding in <span>JavaScript</span></p>
            </div>
        );
    }
}

export default Main;