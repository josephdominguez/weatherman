import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import context
import { LocationProvider } from '@contexts/LocationContext';
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';

// Import pages
import Homepage from '@components/pages/Homepage';
import CompleteForecast from '@components/pages/CompleteForecast';
import CurrentConditions from '@components/pages/CurrentConditions';
import LocalForecast from '@components/pages/LocalForecast';
import ExtendedForecast from '@components/pages/ExtendedForecast';
import TravelForecast from '@components/pages/TravelForecast';
import Callback from '@components/pages/Callback';
import NotFound from '@components/pages/NotFound';

function App() {

  return (
    <>
      <LocationProvider>
        <MusicPlayerProvider>
          <Router>
              <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/CompleteForecast" element={<CompleteForecast/>} />
                <Route path="/CurrentConditions" element={<CurrentConditions/>} />
                <Route path="/LocalForecast" element={<LocalForecast/>} />
                <Route path="/ExtendedForecast" element={<ExtendedForecast/>} />
                <Route path="/TravelForecast" element={<TravelForecast/>} />
                <Route path="/Callback" element={<Callback/>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
          </Router>
        </MusicPlayerProvider>
      </LocationProvider>
    </>
  )
}

export default App
