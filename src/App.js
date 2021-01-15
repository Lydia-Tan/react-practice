import './App.css';
import React from "react";

// import Footer from "./components/Footer";
// import AboutMe from "./components/AboutMe.js";
// import Header from "./components/Header.js";
// import ToDo from "./components/ToDo";
// import TimeGreeting from "./components/TimeGreeting";

// import Joke from "./components/Joke";
// import jokesData from "./components/JokesData";
// import Products from "./components/Products.js";
// import productsData from "./components/ProductsData.js";



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      login: true
    }
  }



  render(){
    let wordDisplay
    if(this.state.login === true){
      wordDisplay = "in";
    }
    else{
      wordDisplay = "out";
    }
    return (
      <div>
          <h1>You are currently logged {wordDisplay}</h1>
      </div>
  )
  }
  
}




// function App() {
//   const allProds = productsData.map(prod =>
//     //first variation of implementing:
//     // <Products key={prod.id} name={prod.name} price={prod.price} description={prod.description}/>
    
//     //second variation of implementing:
//     <Products key={prod.id} item={prod}/>

//   ) 

//   //because map returns a new array, we are creating a variable jokecomponent which stores the new array
//   const jokeComponents = jokesData.map(joke => 
//       <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>
//   )

//   return (
  
//     <div className="App">
//       <Header />
//       <TimeGreeting />

//       <div>
//         {allProds}
//       </div> 

//       <div>
//         {jokeComponents}
//       </div>

//        <Joke 
//         answer="It's hard to explain puns to kleptomaniacs because they always take things literally."   
//       />

//       <Joke 
//         question="What's the best thing about Switzerland?"
//         answer="I don't know, but the flag is a big plus!"   
//       />

//       <Joke 
//         question="Give me a joke?"
//         answer="You"   
//       /> 

//       <AboutMe />
//       <ToDo />
//       <Footer />

//     </div>
//   );
// } 

export default App
