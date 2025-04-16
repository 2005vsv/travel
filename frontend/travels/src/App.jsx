import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HotelPage } from './pages/HotelPage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { HotelDescripion } from './components/HotelDescription';
import HotelBookingForm from './components/HotelBooking';
import { ConfirmBooking } from './pages/ConfirmBooking';
import SignUpForm from './pages/SignUpForm';
import LoginForm from './pages/LoginForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HotelPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book/:id" element={<HotelDescripion />} />
        <Route path="/hotelbookingform" element={<HotelBookingForm />} />
        <Route path="/confirmBooking" element={<ConfirmBooking />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path='/login' element={<LoginForm/>}/>
      </Routes>
    </>
  );
}

export default App;
