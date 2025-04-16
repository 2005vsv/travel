import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HotelPage } from './pages/HotelPage'
import { Route,Routes } from 'react-router-dom'
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<HotelPage/>}/>
    </Routes>

    
    </>
  )
}

export default App
