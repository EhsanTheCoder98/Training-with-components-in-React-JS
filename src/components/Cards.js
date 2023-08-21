import React, { Component } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";
import NodeJS from "../WallPaper/NodeJS.avif";
import Express from "../WallPaper/Express.webp";
import ReactJs from "../WallPaper/React.png";
import Next from "../WallPaper/Next.jpg";
import { v4 } from "uuid";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      courseData: [
        { id: 1, img: NodeJS, price: 200, intention: "BackEnd Developement" },
        { id: 2, img: Express, price: 300, intention: "BackEnd Developement" },
        { id: 3, img: Next, price: 400, intention: "FrontEnd Developement" },
        { id: 4, img: ReactJs, price: 350, intention: "FrontEnd Developement" },
      ],
    };
  }

  render() {
    return (
      <div className={styles.container}>
        {/* <Card img={NodeJS}  price={200}  intention="BackEnd Developement" />
                <Card img={Express} price={300}  intention="BackEnd Developement" />
                <Card img={Next}    price={400}  intention="FrontEnd Developement"/>
                <Card img={ReactJs} price={350}  intention="FrontEnd Developement"/> */}
        {this.state.courseData.map((course) => (
          <Card
            key={v4()}
            img={course.img}
            price={course.price}
            intention={course.intention}
            id={course.id}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
