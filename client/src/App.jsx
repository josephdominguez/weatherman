import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages

import Homepage from '@components/pages/Homepage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
