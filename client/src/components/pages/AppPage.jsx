import AppHeader from '@components/headers/AppHeader';
import AppFooter from '@components/footers/AppFooter';
import MusicPlayer from '../utilities/MusicPlayer';

function AppPage({ pageTitle, children }) {
  return (
    <>
      <AppHeader pageTitle={pageTitle} />
        <main>
          {children}
        </main>
        <MusicPlayer />
      <AppFooter />
    </>
  );
}

export default AppPage;
