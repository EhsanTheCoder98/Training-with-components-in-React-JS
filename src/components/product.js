import React, { Component } from 'react';
import axios from "axios";
import Card from './Card';
import Styles from "./Product.module.css";

class product extends Component {
    constructor(props){
        super(props);
        this.state = {
            forSale:[],
        }
    }

    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then(products => this.setState({
            forSale : products.data,
        }))
    }
 
    render() {
        return (
            <div className={Styles.container}>
                {this.state.forSale.map(products =><Card key={products.id} img={products.image} price={products.price}  intention={products.title}/> )}
            </div>
        );
    }
}

export default product;