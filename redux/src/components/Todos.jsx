import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { completeTodo, deleteTodo, updateTodo } from '../Slice/TodoSlice.';

function Todos() {

  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()

  return (
    <div>
      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <div>
                <input
                  type="text" 
                  className={`p-2 mr-1 rounded-xl ${todo.completed ? 'line-through text-red-600' : ""}`}
                  value={todo.todo}
                  onChange={e => dispatch(updateTodo({id:todo.id, text: e.target.value}))}
                />
                <button onClick={() => dispatch(completeTodo(todo.id))}>✅</button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todos