import React from "react";

function TimeGreeting(){
  //in-line styling using javascript is good for making things dynamic (such as having the font color change depending on the conditions, checked using an if statement). if you wanted the text to turn blue in the morning and orange in the afternoon, this would be a good place to utilize it.

    const styleColor = {
        color: "#04756F"
    }

    const firstName = "Bob"
    const lastName = "Ziroll"

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    //modifies the greeting message according to the time of the user's viewing

    if(hours < 12){
        timeOfDay = "morning";
        styleColor.color = "#2E0927";
    }
    else if(hours >= 12 && hours < 17){
        timeOfDay = "afternoon";
        styleColor.color = "#04756F";

    }
    else{
        timeOfDay = "night";
        styleColor.color = "D90000";

    }
    return(
        <div className = "greeting">
            <h1 style={styleColor}>Good {`${timeOfDay} , ${firstName + " " + lastName}`}</h1>
        </div>
    )
}

export default TimeGreeting;