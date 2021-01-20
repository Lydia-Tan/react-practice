import React from "react";

function Loading(props){
    console.log(props.isLoading)

    if(props.isLoading === true){

        return(
            <div>
               <h3>Loading...</h3>
               <hr/>
            </div>
        )
    }
    else{
        return(
            <div>
                <h3>The new semester has generated! Welcome and good luck!!</h3>
            </div>
        )
    }
}

export default Loading