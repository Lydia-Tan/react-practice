import './App.css';
import React from "react";
import Loading from "./components/Loading.js"

// import Footer from "./components/Footer";
// import AboutMe from "./components/AboutMe.js";
// import Header from "./components/Header.js";
// import ToDo from "./components/ToDo";
// import TimeGreeting from "./components/TimeGreeting";

// import Joke from "./components/Joke";
// import jokesData from "./components/JokesData";
// import Products from "./components/Products.js";
// import productsData from "./components/ProductsData.js";


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isLoading: true
    }
  } 

  //this lifecycle method runs the code right after the app component mounts onto the screen
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading:false
      })
      // this 1.5 seconds to run the code in the function as a means of "faking" a load
    }, 1500)
  }

  render(){
    return(
      <div>
        <h3>This is a rlly bad loading page</h3>
        <Loading isLoading = {this.state.isLoading}/>
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
