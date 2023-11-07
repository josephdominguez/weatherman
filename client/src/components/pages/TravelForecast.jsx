import AppPage from '@components/pages/AppPage';
import TravelForecastComponent from '@components/app/TravelForecastComponent';

function TravelForecast() {
    const pageTitle = 'Travel Forecast';

    return (
        <AppPage pageTitle={pageTitle}>
            <TravelForecastComponent />
        </AppPage>
    );
}

export default TravelForecast;
