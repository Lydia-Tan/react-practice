import './App.css';
import React from "react";
import ToDoItem from "./components/ToDoItem";
import toDoData from "./components/ToDoData";

function App() {
  const toDoComponent = toDoData.map(taskItem =>
      <ToDoItem key={taskItem.id} itemDo={taskItem}/>  
  )
  return (
    <div className="App">
      {toDoComponent}
    </div>
  );
}

export default App;
