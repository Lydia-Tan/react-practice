import './App.css';
import React from "react";

import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe.js";
import Header from "./components/Header.js";
import ToDo from "./components/ToDo";
import TimeGreeting from "./components/TimeGreeting";
import Joke from "./components/Joke";
import jokesData from "./components/JokesData";

function App() {

  //because map returns a new array, we are creating a variable jokecomponent which stores the new array
  const jokeComponents = jokesData.map(joke => 
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>
  )

  return (
  
    <div className="App">
      <Header />
      <TimeGreeting />

      <div>
        {jokeComponents}
      </div>
      {/* <Joke 
        answer="It's hard to explain puns to kleptomaniacs because they always take things literally."   
      />

      <Joke 
        question="What's the best thing about Switzerland?"
        answer="I don't know, but the flag is a big plus!"   
      />

      <Joke 
        question="Give me a joke?"
        answer="You"   
      /> */}

      <AboutMe />
      <ToDo />
      <Footer />

    </div>
  );
}

export default App
