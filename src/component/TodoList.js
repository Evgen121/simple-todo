import React from 'react'

function TodoList({todos}) {
  return (
<ul className="list-group">
    {todos.map((todo)=>(
        <li className="list-group-item d-flex justify-content-between align-items-center" key={todo.id}>
           <h1>{todo.title}</h1> 
           <p>{todo.body}</p>
            
        </li>
    ))}
</ul>
  )
}

export default TodoList