import { useAuth0 } from '@auth0/auth0-react';

function LogUserOut({ children }) {
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        });
    };

    return <div onClick={handleLogout}>{children}</div>;
}

export default LogUserOut;
