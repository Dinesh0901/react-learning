import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Pages from './pages/Pages'

const App = () => {
  return (

    <BrowserRouter>
      <div>Header</div>
      <Pages/>
      <div>Footer</div>
    </BrowserRouter>
  )
}

export default App
