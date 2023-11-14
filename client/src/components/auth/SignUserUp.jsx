import { useAuth0 } from '@auth0/auth0-react';

function SignUserUp({ children }) {
    const { loginWithRedirect } = useAuth0();

    const handleSignUp = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: '/Onboarding',
            },
            authorizationParams: {
                screen_hint: 'signup',
            },
        });
    };

    return <div onClick={handleSignUp}>{children}</div>;
}

export default SignUserUp;
