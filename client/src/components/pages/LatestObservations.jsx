import AppPage from '@components/pages/AppPage';
import LatestObservationsComponent from '@components/app/LatestObservationsComponent';

function LatestObservations() {
    const pageTitle = 'Latest Observations';

    return (
        <AppPage pageTitle={pageTitle}>
          <LatestObservationsComponent />
        </AppPage>
      );
}

export default LatestObservations;
