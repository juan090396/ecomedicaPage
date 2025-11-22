import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import EcomedicaPage from './pages/ecomedicaPage'
import Dashboard from './pages/admin'
import Login from './pages/logIn'

function App() {
  
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<EcomedicaPage/>}  /> 
        <Route path='/dashboard' element= {<Dashboard/>}/>
        <Route path='/login' element= {<Login/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
