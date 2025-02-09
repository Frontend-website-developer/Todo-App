"use client"
import React, { useState } from 'react';


const page = () => {
  const [title, settitle]=useState("")
  const [description, setdescription] = useState("")
  const [iscompleted, setiscompleted] = useState(false)
  const [isTask, isTaskCompleted] = useState(false)
  const [taskwrapper, settaskwrapper] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    title ? settaskwrapper([...taskwrapper, {title, description, iscompleted}]) : "";
    title ? isTaskCompleted(false) : isTaskCompleted(true);
    console.log({isTaskCompleted})
    console.log("isTaskCompleted")
    settitle("")
    setdescription("")
  }

  const deleteTask = (i) => {
    let copytask = [...taskwrapper]
    copytask.splice(i, 1)
    settaskwrapper(copytask)
  }

  const completedTask = (i) => {
    let copytask = [...taskwrapper]; // Copy the array
    copytask[i].iscompleted = !copytask[i].iscompleted; // Toggle the boolean value
    settaskwrapper(copytask); // Update state
    console.log(copytask[i]); // Log the updated task
};


  let renderTask = "No Task Available"

  if(taskwrapper.length>0){
      renderTask = taskwrapper.map(function(t,i){
    return (
    <li key={i} className='mb-5 p-5 border border-stone-800  mx-10 sm:mx-0'>
    <div className='sm:flex justify-between items-center'>
      <h5 className='font-semibold w-1/3 break-words mb-5 sm:mb-0'>{t.title}</h5>
      <h5 className='font-medium w-1/3 break-words mb-5 sm:mb-0'>{t.description}</h5>
      <button className={`${t.iscompleted ? "bg-green-900" : "bg-red-700"} text-white py-2 px-5 rounded hover:bg-red-600 mb-5 sm:mb-0`} onClick={() => {
        completedTask(i)
      }}>{t.iscompleted ? "Completed" : "Not Completed"}</button>
      <button className='bg-red-700 py-2 px-5 text-white rounded hover:bg-red-600' onClick={ () => {
        deleteTask(i)
        }}>Delete</button>
    </div>
    </li>
    );
  })
  }




  return (
    <>
      <h1 className='bg-black text-white text-center font-bold py-10 px-5 text-4xl'>My Todo List</h1>
      <div className='container mx-auto my-20'>
        <form className='sm:flex justify-center items-top px-10 sm:px-0' onSubmit={handleSubmit}>
          <div>
            <input type='text' className='text-xl border-zinc-800 border rounded-sm py-3 px-5 mb-5 mr-5 shadow shadow-zinc-600 drop-shadow' placeholder='please enter task' value={title} onChange={(e) => {
              settitle(e.target.value)
            }}></input>
            {isTask && <p>Please enter task</p> }
          </div>
          <div>
            <input type='text' className='text-xl border-zinc-800 border rounded-sm py-3 px-5 mb-5 mr-5 shadow shadow-zinc-600 drop-shadow' placeholder='please description here' value={description} onChange={(e) => {
              setdescription(e.target.value)
            }}></input>
          </div>
          <div>
            <button className='bg-black text-white px-4 py-3 rounded text-xl hover:bg-slate-900'>Add Task</button>
          </div>    
        </form>
      </div>        
        <div className='py-20 bg-gray-400'>
          <div className='container mx-auto'>
              <ul>
                {renderTask}
              </ul>
          </div>
      </div>  
    </>
  );
};

export default page;