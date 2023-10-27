import React from 'react';
import AppHeader from '@components/headers/AppHeader';
import AppFooter from '@components/footers/AppFooter';

function AppPage({ pageTitle, location, humidity, dewpoint, children }) {
  return (
    <>
      <AppHeader pageTitle={pageTitle} location={location} />
      <main>
        {children}
      </main>
      <AppFooter humidity={humidity} dewpoint={dewpoint}/>
    </>
  );
}

export default AppPage;