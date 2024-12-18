import React from 'react'


const Todo = ({todo}) => {
  return (
    <div className="containerprincipal">
      <div className="todo">
    <div className="content">
      <p>{todo.text}</p>
      <p className="category">{todo.category}</p>
    </div>
    <div>
      <button className='completar'>COMPLETAR</button>
      <button className='X'>X</button>
    </div>
</div>
</div>
    
  )
}

export default Todo