import './App.css';
import React from "react";
import ToDoItem from "./components/ToDoItem";
import toDoData from "./components/ToDoData";


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      taskList: toDoData 
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id){
    this.setState(prevState =>{
      let updatedCheckbox = prevState.taskList.map(taskItems =>{
        if(taskItems.id === id){
          taskItems.completed = !taskItems.completed;
          console.log(taskItems)
        }
        return taskItems
      })
      return{
        taskList: updatedCheckbox
      }
    })
    console.log(id, "changed")
 
  }


  render(){ 
    let toDoItem = this.state.taskList.map(taskItem => 
      <ToDoItem key = {taskItem.id} itemDo = {taskItem} handleChange = {this.handleChange}/>
      )
    return <div className = "App">
      {toDoItem}
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
