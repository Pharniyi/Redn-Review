// import { useState } from 'react';
// import viteLogo from '/vite.svg';
import { Route, Router, Routes } from 'react-router-dom';
import TopNav from './components/topNav';
import MainLayout from './layout/MainLayout';
import Intro from './pages/Intro/Intro';
import Preset from './pages/Presets/Preset';

function App() {

  return (
    <>
      {/* <MainLayout /> */}
      <Router>   
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Intro />} />
            {/* <Route path='/preset' exact element={<Preset />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
