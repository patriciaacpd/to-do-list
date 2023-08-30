import React, { useState } from "react";


let initialValue = [];

const Home = () => {
  const [tasks, settasks] = useState(initialValue);
  const [tareaName, settareaName] = useState("");
  
  const handleTareaChange = (event) => {
    settareaName(event.target.value);
  };

  const handleAddClick = () => {
    if (tareaName.trim()===""){
      alert ("Your task can not be empty");
      return;
    }
    const newTarea = {
      nombre: tareaName,
    };
    const newtasks = [...tasks, newTarea]
    settasks(newtasks);
    settareaName("");
  };

  const handleRemove = (id) => {
    settasks(tasks.filter((item, index) => index != id))
  };

  const handleAddEnter = (event) => {
      console.log(event.key);
    
      if (event.key === "Enter") {
        const newTarea = {
          nombre: tareaName,
        };
        const newtasks = [...tasks, newTarea]
        settasks(newtasks);
        settareaName("");
      }
  };
  

  return (
    <div className="text-center">
      <h1 className="text-center mt-5">TODOS</h1>
      <div className="card m-5">
        <div className="card-header d-flex justify-content-center">
          <input className="mx-2 my-2" type="text" placeholder="New task" 
          onChange={(event)=> handleTareaChange(event)} 
          onKeyDown={(event) => handleAddEnter(event)} 
          value ={tareaName}/>
          <button className="my-2" onClick ={()=> handleAddClick()}>Add task</button>
        </div>

        <div className="card-body">
          <ul className="list-group list-group-flush">
            {tasks.map((tarea, index) => {
            return ( <li className="list-group-item d-flex justify-content-between">
            <p key={`${tarea.nombre}-${index}`}>{tarea.nombre}</p>
            <button className="btn-close" aria-label="Close" onClick={()=>handleRemove(index)}></button>
            </li>)
            })}
          </ul>
        </div>

        <div className="card-footer"> 
        {tasks.length === 0 && <p>There are no tasks, add new tasks</p>}
        {tasks.length} item left</div>
      </div>
    </div>
  );
};

export default Home;
