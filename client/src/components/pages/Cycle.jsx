import React, { useState, useEffect } from 'react';
import AppPage from '@components/pages/AppPage';
import CurrentConditionsComponent from '@components/app/CurrentConditionsComponent';
import ExtendedForecastComponent from '@components/app/ExtendedForecastComponent';

// List of pages to cycle through
const pages = [CurrentConditionsComponent, 
               ExtendedForecastComponent];

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
  
  return (
      <AppPage pageTitle=''>
        <CurrentPageComponent />
      </AppPage>
  );
}

export default Cycle;
