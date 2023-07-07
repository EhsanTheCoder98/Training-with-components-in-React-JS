import React, { Component } from 'react';
import styles from "./Card.module.css"
import down from "../WallPaper/down.svg"
import up from "../WallPaper/up.svg"


class Card extends Component {
    render() {
       const {img,price,intention} = this.props;
        return (
            <div    className={styles.container}>
                <img src={img}  alt="NodeJS logo" className={styles.image}/>
                <h3>Price : {price}</h3>
                <p>This course is for {intention}</p>
                <div className={styles.counter}>
                    <img src={up}   alt='up'/>
                    <span>0</span>
                    <img src={down} alt='down'/>
                </div>
            </div>
        );
    }
}

export default Card;