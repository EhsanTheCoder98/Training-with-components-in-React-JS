import React, { Component } from 'react';
import styles from "./Card.module.css"
import down from "../WallPaper/down.svg"
import up from "../WallPaper/up.svg"
import { Link } from 'react-router-dom';


class Card extends Component {
    constructor(){
        super();
        this.state = {
            count: 1 ,
        }
    }
    upClick = () => {
        this.setState((preveState)=>({
            count:preveState.count+1
        }))
    }
    downClick = () => {
       if(this.state.count>=2){
        this.setState((preveState)=>({
            count:preveState.count-1
        }))
       }
    }


    render() {
       const {img,price,intention,id} = this.props;
        return (
            <div  className={styles.container}>
                <Link    to={`/products/${id}`}><img src={img}  alt="product logo" className={styles.image}/></Link>
                <h3>Price : {price*this.state.count}$</h3>
                <p><Link    to={`/products/${id}`}>{intention}</Link></p>
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