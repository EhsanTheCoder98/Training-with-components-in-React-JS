import React, { Component } from 'react';
import styles from "./Card.module.css"


class Card extends Component {
    render() {
       const {img,price,intention} = this.props;
        return (
            <div    className={styles.container}>
                <img src={img}  alt="NodeJS logo" className={styles.image}/>
                <h3>Price : {price}</h3>
                <p>This course is for {intention}</p>
            </div>
        );
    }
}

export default Card;