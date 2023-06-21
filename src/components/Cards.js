import React, { Component } from 'react';
import styles from "./Cards.module.css";
import Card from './Card';
import NodeJS from "../WallPaper/NodeJS.avif";
import Express from "../WallPaper/Express.webp";
import ReactJs from "../WallPaper/React.png";
import Next from "../WallPaper/Next.jpg";

class Cards extends Component {
    render() {
        return (
            <div    className={styles.container}    id='product'>
                <Card img={NodeJS}  price={"200$"}  intention="BackEnd Developement" />
                <Card img={Express} price={"300$"}  intention="BackEnd Developement" />
                <Card img={Next}    price={"400$"}  intention="FrontEnd Developement"/>
                <Card img={ReactJs} price={"350$"}  intention="FrontEnd Developement"/>
            </div>
        );
    }
}

export default Cards;