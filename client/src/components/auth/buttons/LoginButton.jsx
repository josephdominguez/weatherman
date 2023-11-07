import LogUserIn from '@components/auth/LogUserIn';

function LoginButton() {
    return (
        <LogUserIn>
            <button className='login-button'>Log In</button>
        </LogUserIn>
    );
}

export default LoginButton;
