import { Routes, Route } from 'react-router-dom';

// Import context
import { LocationProvider } from '@contexts/LocationContext';
import { UserInfoProvider } from '@contexts/UserInfoContext';
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';

// Import pages
import AuthenticationGuard from '@components/auth/AuthenticationGuard';
import Homepage from '@components/pages/Homepage';
import CompleteForecast from '@components/pages/CompleteForecast';
import CurrentConditions from '@components/pages/CurrentConditions';
import LocalForecast from '@components/pages/LocalForecast';
import ExtendedForecast from '@components/pages/ExtendedForecast';
import TravelForecast from '@components/pages/TravelForecast';
import LatestObservations from '@components/pages/LatestObservations';
import Callback from '@components/pages/Callback';
import Onboarding from '@components/pages/Onboarding';
import LoginCallback from '@components/pages/LoginCallback';
import NotFound from '@components/pages/NotFound';

function App() {

  return (
    <>
      <LocationProvider>
        <UserInfoProvider>
          <MusicPlayerProvider>
            <Routes>
              <Route path='/' element={<Homepage/>} />
              <Route path='/CompleteForecast' element={<CompleteForecast/>} />
              <Route path='/CurrentConditions' element={<CurrentConditions/>} />
              <Route path='/LocalForecast' element={<LocalForecast/>} />
              <Route path='ExtendedForecast' element={<ExtendedForecast/>} />
              <Route path='/TravelForecast' element={<TravelForecast/>} />
              <Route path='/LatestObservations' element={<LatestObservations/>} />
              <Route path='/Callback' element={<Callback/>} />
              <Route path='/Onboarding' element={
                <AuthenticationGuard component={Onboarding}/>} />
              <Route path='/LoginCallback' element={
                <AuthenticationGuard component={LoginCallback}/>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </MusicPlayerProvider>
        </UserInfoProvider>
      </LocationProvider>
    </>
  );
}

export default App
