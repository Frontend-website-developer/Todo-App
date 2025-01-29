"use client"
import React, { useState } from 'react';


const page = () => {
  const [title, settitle]=useState("")
  const [description, setdescription] = useState("")
  const [iscompleted, setiscompleted] = useState(false)

  const [taskwrapper, settaskwrapper] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    settaskwrapper([...taskwrapper, {title, description, iscompleted}])
    settitle("")
    setdescription("")
  }

  const deleteTask = (i) => {
    let copytask = [...taskwrapper]
    copytask.splice(i)
    settaskwrapper(copytask)
  }

  const completedTask = (i) => {
    setiscompleted(!iscompleted);
    console.log(iscompleted);
  }

  let renderTask = "No Task Available"

  if(taskwrapper.length>0){
      renderTask = taskwrapper.map(function(t,i){
    return (
    <li key={i} className='mb-5'>
    <div className='flex justify-between items-center'>
      <h5>{t.title}</h5>
      <h5>{t.description}</h5>
      <button className='{iscompleted ? bg-green-900 : bg-red-900} text-white py-2 px-5 rounded' onClick={() => {
        completedTask(i)
      }}>{iscompleted ? "Completed" : "notcompleted"}</button>
      <button className='bg-red-800 py-2 px-5 text-white rounded' onClick={ () => {
        deleteTask(i)
        }}>Delete</button>
    </div>
    </li>
    );
  })
  }




  return (
    <>
      <h1 className='bg-black text-white text-center font-bold p-5 text-4xl'>My Todo List</h1>
      <div className='container mx-auto'>
        <form onSubmit={handleSubmit}>
            <input type='text' className='text-xl border-zinc-800 border rounded-sm py-2 px-5 my-5 mr-5' placeholder='please enter task' value={title} onChange={(e) => {
              settitle(e.target.value)
            }}></input>
            <input type='text' className='text-xl border-zinc-800 border rounded-sm py-2 px-5 my-5 mr-5' placeholder='please description here' value={description} onChange={(e) => {
              setdescription(e.target.value)
            }}></input>
            <button className='bg-black text-white px-4 py-3 rounded text-xl'>Add Task</button>

        </form>
      </div>        
        <div className='p-10 bg-gray-400'>
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