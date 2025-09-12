import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '/src/pages/Home'
import About from '/src/pages/About'

const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
  )
}

export default Pages
