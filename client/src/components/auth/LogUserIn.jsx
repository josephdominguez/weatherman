import { useAuth0 } from '@auth0/auth0-react';

function LogUserIn({ children }) {
    const { loginWithRedirect } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: '/LoginCallback',
            },
            authorizationParams: {
                screen_hint: 'Login',
            },
        });
    };

    return <div onClick={handleLogin}>{children}</div>;
}

export default LogUserIn;
