import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import EcomedicaPage from './pages/ecomedicaPage'
import Dashboard from './pages/dashboard'
import Login from './pages/logIn'
import DashboardDoctors from './pages/dashboardDoctors'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<EcomedicaPage/>}  /> 
        <Route path='/dashboard' element= {<Dashboard/>}/>
        <Route path='/login' element= {<Login/>} />
        <Route path='/doctores' element= {<DashboardDoctors/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
