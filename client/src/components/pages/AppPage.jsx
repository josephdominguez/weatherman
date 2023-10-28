import React from 'react';
import AppHeader from '@components/headers/AppHeader';
import AppFooter from '@components/footers/AppFooter';

function AppPage({ pageTitle, children }) {
  return (
    <>
      <AppHeader pageTitle={pageTitle} />
      <main>
        {children}
      </main>
      <AppFooter />
    </>
  );
}

export default AppPage;
