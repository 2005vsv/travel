// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HotelPage } from './pages/HotelPage'
import { Route,Routes } from 'react-router-dom'
// import { About } from './components/About'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { HotelDescripion } from './components/HotelDescription'
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<HotelPage/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/book/:id' element={<HotelDescripion/>}/>

    </Routes>

    
    </>
  )
}

export default App
