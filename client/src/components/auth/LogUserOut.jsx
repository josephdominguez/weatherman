import { useAuth0 } from '@auth0/auth0-react';
import { useUserInfo } from '@contexts/UserInfoContext';

function LogUserOut({ children }) {
    const { logout } = useAuth0();
    const { resetUserInfo } = useUserInfo();

    const handleLogout = () => {
        resetUserInfo();
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        });
    };

    return <div onClick={handleLogout}>{children}</div>;
}

export default LogUserOut;
