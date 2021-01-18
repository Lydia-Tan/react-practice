import './App.css';
import React from "react";
import ToDoItem from "./components/ToDoItem";
import toDoData from "./components/ToDoData";


class App extends React.Component{
  constructor(){
    super()
    let toDoItem = toDoData.map(taskItem => 
    <ToDoItem key = {taskItem.id} itemDo = {taskItem} handleChange = {this.handleChange}/>
    )
    this.state = {
      taskList: toDoItem 
    }
    this.handleChange=  this.handleChange.bind(this);
  }

  handleChange(id){
    console.log(id, "changed")
    // this.setState(function(prevState){

    // })
  }


  render(){ 
    return <div className = "App">
      {this.state.taskList}
    </div>
  }
}

 
/* alternatively: 
class App extends React.Component{
  constructor(){
    super()
   
    this.state = {
      taskList: toDoData 
    }
  }

  render(){
    const toDoItems = this.state.taskList.map(taskItem =>
      <ToDoItem key = {item.id} itemDo = {taskItem}  
    )
    return <div className = "App">
      {toDoItems}
    </div>
   }
 } 
 */


// function App() {
//   const toDoComponent = toDoData.map(
//     taskItem =>
//     <ToDoItem key={taskItem.id} itemDo={taskItem}/>  
//   )
    
//   return (
//     <div className="App">
//       {toDoComponent}
//     </div>
//   );
// }

export default App;
