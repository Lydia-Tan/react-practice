import React from "react";
//joke creates components that displays the questions from database
function Joke(props){
    // console.log(props);
    
    return(
        <div>
           <h3 style = {{display: !props.question && "none"}}>question: {props.question}</h3>
           {/* modify props.answer to props.punchLine because jokesData has punchline property, not answer property */}
           <h3 style = {{color: "#888888"}}>answer: {props.punchLine}</h3>
           <hr/>
        </div>
    )
}

export default Joke