import './App.css';
import React from "react";
import ToDoItem from "./components/ToDoItem";
import toDoData from "./components/ToDoData";


class App extends React.Component{
  constructor(){
    super()
    let toDoItem = toDoData.map(taskItem => 
    <ToDoItem key = {taskItem.id} itemDo = {taskItem}/>
    )
    this.state = {
      taskList: toDoItem 
    }
  }

  render(){
    return <div className = "App">
      {this.state.taskList}
    </div>
  }
}
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
