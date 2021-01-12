import React from "react";

// here is where I try to pass in the values from the products data file and then attempt to pass each of those properties into an html element (maybe like product cards, etc)

//I'm essentially trying to list out each of the unique products and their individual properties 

function Products(props){
    //incorrect --> this stuff that I'm trying to do is meant to be executed in the App.js file, not here
    // const allProds = products.map(function() =>
    // return()
    // )   
    return(
        <div>
            {/* first implementation method: */}
            
            {/* <h3>{props.name}</h3>
            <h4>money: {props.price}</h4>
            <p>description: {props.description}</p>
            <hr/>  */}
            
            {/* tests: when I commented this chunk out and implemented it using the second method, the program runs no errors but does not recognize the assigned properties of .price and .description or .name from the products data javascript data file. It outputs to the screen just h4 tags but doesn't recognize the js object props.price */}

            {/*second implementation method: */}
            <h3>{props.item.name}</h3>
            <h4>price: ${props.item.price}</h4>
            <p>description: {props.item.description}</p>
            <hr/>
        </div>
    )
}
export default Products;