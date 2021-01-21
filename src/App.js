import './App.css';
import React from "react";
import Login from "./components/Login"

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      userLogged: false
    }
    this.handleClick = this.handleClick.bind(this);
  } 
  
  handleClick(){
    console.log("work in progress")
    //change state when clicked
    this.setState(prevState =>{
      return{
        userLogged: !prevState.userLogged
      }
    })
  }

  render(){
    let buttonText = this.state.userLogged ? "Logout" : "Login"
    let statusText = this.state.userLogged ? "You are currently logged in" : "You are currently logged out"
    return(
      <div>
        <h3>{statusText}</h3>
        <button onClick = {this.handleClick}>{buttonText}</button>

      </div>
    )
  }
}

export default App
