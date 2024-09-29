import React, { useState } from 'react'
import { useTodo } from '../context'

function Todos() {

  const {todos, deleteTodo, updateTodo, completeTodo} = useTodo()

  return (
    <div>
      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id} className='mt-2'>
              <div>
                <input
                   type="text" 
                   className={`p-2 mr-1 rounded-xl ${todo.completed ? 'line-through text-red-600' : ""}`}
                   value={todo.todo}
                   onChange={e => updateTodo(todo.id, e.target.value)}
                />
                <button onClick={() => completeTodo(todo.id)}>✅</button>
                <button onClick={() => deleteTodo(todo.id)}>❌</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todos