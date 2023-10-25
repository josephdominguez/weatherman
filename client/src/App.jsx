import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Homepage from '@components/pages/Homepage';
import CurrentConditions from '@components/pages/CurrentConditions';
import LocalForecast from '@components/pages/LocalForecast';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/CurrentConditions" element={<CurrentConditions/>} />
          <Route path="/LocalForecast" element={<LocalForecast/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
