export default function({todo, onCompletedClicked, onDeleteClicked}){
    return(
        <div className="flex items-center justify-center">
            <h3>{todo.text}</h3>
            {todo.isCompleted && <p>&nbsp; Completed</p>}
            {todo.isCompleted ? <button onClick={() => onDeleteClicked(todo.text, todo.index)}>Delete Item</button> : <button onClick={() => onCompletedClicked(todo.text, todo.index)}>Mark as Competed</button>}
        </div>
    )
}