import React, {useState} from "react";

function NewTaskForm({CATEGORIES, onTaskFormSubmit}) {
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("Code")
  return (
    <form className="new-task-form" onSubmit={(e)=>{
      e.preventDefault();
      onTaskFormSubmit({
      category: category,
      text: details,
    })
      }}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={(e)=>setDetails((details)=> e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e)=>setCategory((category)=> e.target.value)}>
          {CATEGORIES.map((e)=>{
            if(e === "All"){
              return;
            }else{
            return <option key={e}>{e}</option>

            }
          })

          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
