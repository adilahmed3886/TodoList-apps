import React, { useState } from 'react'
import { useTodo } from '../context'

function Input() {

    const  [input, setInput] = useState("")
    const {addTodo} = useTodo()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(input && input.trim().length > 0){
            addTodo(input.trim())
            setInput("")
        }
    }

  return(
    <div>
        <input
            type="text"
            className='p-2 mr-1 rounded-xl'
            value={input}
            onChange={e => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default Input