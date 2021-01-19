import React from "react";

function ToDoItem(props){
    return(
        <div>
            {/* <input type = "checkbox" checked = {props.itemDo.completed} /> */}
            <input 
                type = "checkbox" 
                checked = {props.itemDo.completed} 
                onChange = {() => props.handleChange(props.itemDo.id)} 
            />

            <p>{props.itemDo.task}</p>
        </div>
    )

}

export default ToDoItem