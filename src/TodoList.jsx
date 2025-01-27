import NewTodoForm from "./NewTodoForm"
import TodoListItem from "./TodoListItem"

export default function TodoList ({completedTodos, incompleteTodos, onCompletedClicked, onDeleteClicked, onCreateClicked}){
    return(
        <>
            <h1 className="mb-10">My Todos</h1>
            <div className="m-5">
                <NewTodoForm onCreateClicked={onCreateClicked}/>
            </div>
            <div className="m-5">
            <h3 className="text-3xl font-bold underline mb-5">Completed</h3>
            {completedTodos.map((todo, index) => (
                <TodoListItem todo={todo} key={index} onDeleteClicked={onDeleteClicked}/>
            ))}
            </div>
            <div className="m-5">
            <h3 className="text-3xl font-bold underline mb-5">Incomplete</h3>
                {incompleteTodos.map ((todo, index) => (
                    <TodoListItem todo={todo} key={index} onCompletedClicked={onCompletedClicked}/>
                ))}
            </div>    
        </>
    )
}
