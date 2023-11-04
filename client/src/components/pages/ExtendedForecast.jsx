import AppPage from '@components/pages/AppPage';
import ExtendedForecastComponent from '@components/app/ExtendedForecastComponent';

function ExtendedForecast() {
    const pageTitle = 'Extended Forecast';

    return (
        <AppPage pageTitle={pageTitle}>
          <ExtendedForecastComponent />
        </AppPage>
      );
}

export default ExtendedForecast;
