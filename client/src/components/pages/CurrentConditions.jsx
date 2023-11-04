import AppPage from '@components/pages/AppPage';
import CurrentConditionsComponent from '@components/app/CurrentConditionsComponent';

function CurrentConditions() {
    const pageTitle = "Current Conditions";
    
    return (
      <AppPage pageTitle={pageTitle}>
        <CurrentConditionsComponent />
      </AppPage>
  );
}

export default CurrentConditions;
