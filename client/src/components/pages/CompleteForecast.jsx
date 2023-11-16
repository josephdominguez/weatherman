import Cycle from '@components/utilities/Cycle';
import AppPage from '@components/pages/AppPage';
import LoadingComponent from '@components/app/LoadingComponent';
import { pages } from '@config/config';

// Generates list of components to cycle through. 
// Removes 'CompleteForecast' component to avoid loading itself.
const components = pages.map(page => page.component)
                   .filter(component => component !== 'CompleteForecast');

function CompleteForecast() {
  return (
      <AppPage pageTitle='Forecast'>
        <Cycle components={components} cycleSpeed={8000} loadingComponent={LoadingComponent} />
      </AppPage>
  );
}

export default CompleteForecast;
