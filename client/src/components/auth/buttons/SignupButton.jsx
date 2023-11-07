import LogUserIn from '@components/auth/LogUserIn';

function SignupButton() {
    return (
        <LogUserIn>
            <button className='signup-button'>
                Sign Up
            </button>
        </LogUserIn>
    );
}

export default SignupButton;
