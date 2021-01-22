import './App.css';
import React from "react";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      character: {}
    }
    // this.handleClick = this.handleClick.bind(this);
  } 
  
  componentDidMount(){
    fetch("https://swapi.dev/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          character:data
        })
      })
  }

  render(){
    return(
      <div>
        <h1>{this.state.character.name}</h1>

      </div>
    )
  }
}

export default App
