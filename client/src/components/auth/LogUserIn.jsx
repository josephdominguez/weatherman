import { useAuth0 } from '@auth0/auth0-react';

function LogUserOut({ children }) {
    const { loginWithRedirect } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: '/Profile',
            },
            authorizationParams: {
                screen_hint: 'signup',
            },
        });
    };

    return <div onClick={handleLogin}>{children}</div>;
}

export default LogUserOut;
