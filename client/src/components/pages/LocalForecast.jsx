import AppPage from '@components/pages/AppPage';
import LocalForecastComponent from '@components/app/LocalForecastComponent';

function LocalForecast() {
    const pageTitle = 'Local Forecast';

    return (
        <AppPage pageTitle={pageTitle}>
            <LocalForecastComponent />
        </AppPage>
    )
}

export default LocalForecast;
