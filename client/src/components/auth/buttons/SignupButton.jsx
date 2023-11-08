import SignUserUp from '@components/auth/SignUserUp';

function SignupButton() {
    return (
        <SignUserUp>
            <button className='signup-button'>
                Sign Up
            </button>
        </SignUserUp>
    );
}

export default SignupButton;
