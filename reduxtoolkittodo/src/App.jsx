// import { useState } from 'react'

import './App.css'
import AddTodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-amber-300 text-2xl text-white p-4'>Learn about redux toolkit</h1>
      <AddTodo/>
      <Todos />
    </>
  )
}

export default App
