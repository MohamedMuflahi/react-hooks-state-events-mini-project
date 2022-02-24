import React from "react";
import { useState } from "react/cjs/react.production.min";

function CategoryFilter({CATEGORIES,TASKS,handelFilterInAPP}) {
  function handleFilter(cat){
    handelFilterInAPP(TASKS.filter((task)=>{
      console.log(cat);
      if(task.category === cat||cat === 'All'){
        
        return task;
      }
    }))
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        CATEGORIES.map((element)=>{
            
            return <button key={element} className="" onClick={(e)=>{
              
              if(e.target.className === ''){
                e.target.className = 'selected'
                handleFilter(element);
              }else{
                e.target.className = '';
                handleFilter('All');
              }
            }

            }>{element}</button>
        })
      }
    </div>
  );
}

export default CategoryFilter;
