
import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'

function App() {
  const [completedTodos, setcompletedTodos] = useState([]);
  const [incompleteTodos, setincompleteTodos] = useState([]);

  function MarkAsComplete(text, index) {
    setincompleteTodos(incompleteTodos.filter(t => t.text !== text));
    setcompletedTodos([...completedTodos, {...incompleteTodos.find(t => t.text === text), isCompleted:true}])
  }

  function deletetodo(text, index){
    setcompletedTodos(completedTodos.filter(t => t.text !== text));
  }

  function CreateClicked(text, index){
    setincompleteTodos([...incompleteTodos, {text, isCompleted: false}])
  }

  return (
    <>
      <TodoList 
      completedTodos={completedTodos} 
      incompleteTodos={incompleteTodos}
      onCompletedClicked={MarkAsComplete}
      onDeleteClicked={deletetodo} 
      onCreateClicked={CreateClicked}/>
    </>
  )
}

export default App
