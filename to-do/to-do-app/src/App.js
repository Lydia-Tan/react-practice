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
      let updatedCheckbox = prevState.taskList.map(todo =>{
        if(todo.id === id){
          return {key:todo.id, task: todo.task, completed:!todo.completed}
        }
        return todo
      })
      return{
        taskList: updatedCheckbox
      }
    })
 console.log(id)
  }


  render(){ 
    let toDoItem = this.state.taskList.map(taskItem => 
      <ToDoItem key = {taskItem.id} itemDo = {taskItem} handleChange = {this.handleChange}/>)
      console.log({toDoItem})

    return (
      <div>      
        {toDoItem}
      </div>
    )
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
