import { useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import Input from './components/Input'
import Todos from './components/Todos'

function App() {


  return (
    <TodoProvider>
      <h1>Todo <span className='text-red-600'>Context</span></h1>
      <Input/>
      <Todos/>
    </TodoProvider>
  )
}

export default App
