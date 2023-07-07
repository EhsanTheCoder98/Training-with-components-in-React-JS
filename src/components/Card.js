import React, { Component } from 'react';
import styles from "./Card.module.css"
import down from "../WallPaper/down.svg"
import up from "../WallPaper/up.svg"


class Card extends Component {
    constructor(){
        super();
        this.state = {
            count: 0 ,
        }
    }
    upClick = () => {
        this.setState((preveState)=>({
            count:preveState.count+1
        }))
    }
    downClick = () => {
       if(this.state.count>=1){
        this.setState((preveState)=>({
            count:preveState.count-1
        }))
       }
    }


    render() {
       const {img,price,intention} = this.props;
        return (
            <div    className={styles.container}>
                <img src={img}  alt="NodeJS logo" className={styles.image}/>
                <h3>Price : {price}</h3>
                <p>This course is for {intention}</p>
                <div className={styles.counter}>
                    <img src={up}   alt='up'    onClick={this.upClick}/>
                    <span>{this.state.count}</span>
                    <img src={down} alt='down' onClick={this.downClick}/>
                </div>
            </div>
        );
    }
}

export default Card;