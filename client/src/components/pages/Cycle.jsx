import React, { useState, useEffect } from 'react';
import AppPage from '@components/pages/AppPage';
import CurrentConditionsComponent from '@components/app/CurrentConditionsComponent';
import ExtendedForecastComponent from '@components/app/ExtendedForecastComponent';
import LocalForecast from '@components/app/LocalForecastComponent';

// List of pages to cycle through
const pages = [CurrentConditionsComponent, 
               ExtendedForecastComponent,
               LocalForecast,];

function Cycle() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const CurrentPageComponent = pages[currentPageIndex];

  const cycleToNextPage = () => {
    setCurrentPageIndex((currentPageIndex + 1) % pages.length);
  }

  useEffect(() => {
    const timer = setInterval(cycleToNextPage, 5000);
    return () => clearInterval(timer);
  }, [currentPageIndex]);
  
  // TO-DO: Figure out how to pass pageTitle, possibly through context component
  return (
      <AppPage pageTitle='Forecast'>
        <CurrentPageComponent />
      </AppPage>
  );
}

export default Cycle;
