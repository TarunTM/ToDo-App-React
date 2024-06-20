import React from 'react'
import { useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask,setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTaskHandler(event){
        event.preventDefault();
        if(newTask !==""){
            setTasks((t) => [...t , newTask]);
            setNewTask("");
        }
        
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_,i) => i!==index);
        setTasks(updatedTask);
    }

  return (
    <div className='flex flex-col items-center pt-10 bg-black h-lvh w-lvw'>
        <h1 className='text-4xl font-bold mb-5 text-white '>Get Things Done</h1>
        <form onSubmit={addTaskHandler} className=''>
            <input type='text' placeholder="Enter a Task" value={newTask} onChange={handleInputChange}
            className='w-[400px] h-[50px] outline-none rounded-lg mr-3 pl-2'></input>
            <button className='w-[50px] h-[50px] bg-white rounded-full text-2xl hover:bg-green-500 '> + </button>
        </form>
   
        {
            tasks.map((task,index) => <p key={index} className='text-white flex flex-row justify-between mt-10 w-[450px] bg-slate-600 p-5 rounded-lg '
                                                        >  <span> {task} </span> 
                                                        <button onClick={() => deleteTask(index)} className='hover:text-black '>x</button> </p> )
        }
        
    </div>
  )
}

export default ToDoList