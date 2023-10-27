import React, { useState, useEffect } from 'react';
import CurrentConditions from '@components/pages/CurrentConditions';
import LocalForecast from '@components/pages/LocalForecast';
import ExtendedForecast from '@components/pages/ExtendedForecast';

function Cycle() {
  const pages = [CurrentConditions, LocalForecast, ExtendedForecast];
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
    <>
        <CurrentPageComponent />
    </>
  );
}

export default Cycle;
