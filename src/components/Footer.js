import React, { Component } from 'react';
import styles from "./Footer.module.css";

class Footer extends Component {
    render() {
        return (
            <div    className={styles.container}>
                <p  className={styles.para}>&copy; All Rights Reserved</p>
            </div>
        );
    }
}

export default Footer;