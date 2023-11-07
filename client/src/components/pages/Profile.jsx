import AppPage from '@components/pages/AppPage';
import ProfileComponent from '@components/app/ProfileComponent';

function Profile() {
    const pageTitle = '';

    return (
        <AppPage pageTitle={pageTitle}>
          <ProfileComponent />
        </AppPage>
      );
}

export default Profile;
