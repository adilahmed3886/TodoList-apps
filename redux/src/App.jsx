
import './App.css'
import Input from './components/Input'
import Todos from './components/Todos'

function App() {


  return (
    <>
      <h1>Todo <span className='text-red-600'>Redux</span></h1>
      <Input />
      <Todos />
    </>
  )
}

export default App
