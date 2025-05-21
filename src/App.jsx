// import { useState } from 'react';
// import viteLogo from '/vite.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopNav from './components/topNav';
import MainLayout from './layout/MainLayout';
import Intro from './pages/Intro/Intro';
import Preset from './pages/Presets/Preset';


    

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Intro />} />
          <Route path='/preset' element={<Preset />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
