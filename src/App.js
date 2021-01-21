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
  }

  render(){
    return(
      <div>
        <button onClick = {this.handleClick}>Login</button>
      </div>
    )
  }
}

export default App
