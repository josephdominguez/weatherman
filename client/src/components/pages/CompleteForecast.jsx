import React from 'react';
import Cycle from '@components/utilities/Cycle';
import AppPage from '@components/pages/AppPage';
import CurrentConditionsComponent from '@components/app/CurrentConditionsComponent';
import ExtendedForecastComponent from '@components/app/ExtendedForecastComponent';
import LocalForecastComponent from '@components/app/LocalForecastComponent';

// List of pages to cycle through
const pages = [CurrentConditionsComponent, 
               ExtendedForecastComponent,
               LocalForecastComponent,];

function CompleteForecast() {
  return (
      <AppPage pageTitle='Forecast'>
        <Cycle components={pages} />
      </AppPage>
  );
}

export default CompleteForecast;
