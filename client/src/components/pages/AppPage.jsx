import React from 'react';
import AppHeader from '@components/headers/AppHeader';
import AppFooter from '@components/footers/AppFooter';

function AppPage({ pageTitle, location, children }) {
  return (
    <>
      <AppHeader pageTitle={pageTitle} location={location} />
      <main>
        {children}
      </main>
      <AppFooter />
    </>
  );
}

export default AppPage;