import React from "react";

function ToDo(){
    //adding css styling via in-line code and through creating a styles variable
    const styles = {
        //in js, styling attributes are objects (color is an object, in this case)
        //note the formating and how it is inside of a const variable
        color: "#FF8C00",

        //note that font-size in css becomes fontSize --> in js, we will use this camel case method to call these objects
        //also note that the number attributes and values that we give (200px or using % or other methods) will be in quotes
        fontSize: "20px"
    }

    return(
        <div className = "todo-list">
            
            <input type="checkbox" id = "item1"></input>
            {/* note how the color style we are adding must be in a set of two curly braces. the first curly brace denotes js and the second specifies the jsx object, color, that we are modifying. */}
            <label for="item1" style={{color: "#FF8C00"}}>reply to friends</label><br></br>

            <input type="checkbox" id = "item1"></input>
            <label for="item1" style={styles}>buy new pet food</label><br></br>

            <input type="checkbox" id = "item1"></input>
            <label for="item1" style={styles}>do nerd girl shit</label><br></br>
        </div>

    )

}
export default ToDo