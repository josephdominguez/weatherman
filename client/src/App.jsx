import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Homepage from '@components/pages/Homepage';
import LocalForecast from '@components/pages/LocalForecast';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/LocalForecast" element={<LocalForecast/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
