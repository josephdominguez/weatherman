import { withAuthenticationRequired } from '@auth0/auth0-react';
import RedirectToLogin from '@components/pages/RedirectToLogin';

function AuthenticationGuard({ component }) {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => (
            <div className='page-layout'>
                <RedirectToLogin />
            </div>
        ),
    });

    return <Component />;
}

export default AuthenticationGuard;
