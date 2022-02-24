import React from "react";
import Task from './Task'
import uuid from "uuid";
function TaskList({tasks,handleDeleteButton}) {
  return (
    <div className="tasks">
      {
        tasks.map((e)=>{
            return <Task key={uuid} category={e.category} text={e.text} handleDeleteButton={handleDeleteButton}></Task>
        })
      }
    </div>
  );
}

export default TaskList;
