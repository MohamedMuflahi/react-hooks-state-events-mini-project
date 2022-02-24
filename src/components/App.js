import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
import Task from "./Task";

function App() {
  const [tasksArray, setTasksArray] = useState(TASKS)
  function handelFilterInAPP(tasks){
    setTasksArray(tasks);
  }
  function onTaskFormSubmit(newTask){
    TASKS.push(newTask);
    setTasksArray(TASKS);
  }
  function handleDeleteButton(newTask){
    let newarr = TASKS.filter((e)=> e.text !== newTask );
    
    TASKS.length = 0;
    TASKS.push(newarr)
    setTasksArray(newarr);
    console.log(tasksArray)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handelFilterInAPP={handelFilterInAPP} TASKS={TASKS} CATEGORIES={CATEGORIES}/>
      <NewTaskForm CATEGORIES={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasksArray} handleDeleteButton={handleDeleteButton}/>
    </div>
  );
}

export default App;
