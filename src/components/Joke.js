import React from "react";
//joke creates components that displays the questions from database
function Joke(props){
    // console.log(props);
    //this is another unnecessary edit just so that I can test and practice this commit --> something is a little funky in visual studio so i will be working on trying to commit exclusively through the terminal
    // the version control section of vscode right now doesn't seem to be updating or allowing me to push changes somehow? so I will need to do it from the terminal 
    
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