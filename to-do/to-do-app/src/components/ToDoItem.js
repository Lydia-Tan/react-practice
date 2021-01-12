import React from "react";

function ToDoItem(props){
    return(
        <div>
            <input type = "checkbox" checked = {props.itemDo.completed} />
            <label>{props.itemDo.task}</label>
            <br/>
            <br/>

        </div>
    )

}

export default ToDoItem