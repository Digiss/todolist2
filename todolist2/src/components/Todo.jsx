import React from 'react'


const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div className="containerprincipal">
      <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}} >
    <div className="content">
    <p className="category">{todo.category}</p>
      <p>{todo.text}</p>
    </div>
    <div>
      <button className='completar' onClick={() => completeTodo(todo.id)}>COMPLETAR</button>
      <button className='X' onClick={() => removeTodo(todo.id)} >X</button>
    </div>
</div>
</div>
    
  )
}

export default Todo