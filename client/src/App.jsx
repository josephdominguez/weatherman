import { BrowserRouter as Routes, Route } from 'react-router-dom';

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
import Profile from '@components/pages/Profile';
import Callback from '@components/pages/Callback';
import NotFound from '@components/pages/NotFound';

function App() {

  return (
    <>
      <LocationProvider>
        <MusicPlayerProvider>
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/CompleteForecast' element={<CompleteForecast/>} />
            <Route path='/CurrentConditions' element={<CurrentConditions/>} />
            <Route path='/LocalForecast' element={<LocalForecast/>} />
            <Route path='ExtendedForecast' element={<ExtendedForecast/>} />
            <Route path='/TravelForecast' element={<TravelForecast/>} />
            <Route path='/Profile' element={<Profile/>} />
            <Route path='/Callback' element={<Callback/>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </MusicPlayerProvider>
      </LocationProvider>
    </>
  )
}

export default App
