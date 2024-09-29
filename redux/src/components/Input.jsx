import React from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../Slice/TodoSlice.'

function Input() {

  const  [input, setInput] = React.useState("")

  const dispatch = useDispatch()
  return (
    <div>
      <input
        type="text"
        className='p-2 mr-1 rounded-xl'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo(input))}>Add</button>
    </div>
  )
}

export default Input