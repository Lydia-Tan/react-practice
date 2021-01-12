import React from "react";
import products from "./ProductsData";

// here is where I try to pass in the values from the products data file and then attempt to pass each of those properties into an html element (maybe like product cards, etc)

//I'm essentially trying to list out each of the unique products and their individual properties 

function Products(props){
    //incorrect --> this stuff that I'm trying to do is meant to be executed in the App.js file, not here
    // const allProds = products.map(function() =>
    // return()
    // )

    <div>
        <h3>{props.name}</h3>
        <h4>${props.price}</h4>
        <p>description: {props.description}</p>
    </div>
}
export default Products;