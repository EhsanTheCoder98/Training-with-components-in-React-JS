import React, { Component } from 'react';
import styles from "./Search.module.css";

class Search extends Component {
    render() {
        return (
            <div    className={styles.container}>
                <h3 className={styles.title}>Looking for something?!</h3>
                <input placeholder='Search' className={styles.input}/>
            </div>
        );
    }
}

export default Search;