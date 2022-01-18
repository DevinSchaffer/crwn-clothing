import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { SignInContainer } from './sign-in.styles';

const SignIn = () => {
    const dispatch = useDispatch();
    const googleSignInStartClickHandler = () => dispatch(googleSignInStart());
    const emailSignInStartClickHandler = (email, password) => dispatch(emailSignInStart({ email, password }));

    const [userCredentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = userCredentials;

        emailSignInStartClickHandler(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    value={email}
                    type='email'
                    handleChange={handleChange}
                    label='email'
                    required />
                <FormInput
                    name='password'
                    value={password}
                    type='password'
                    handleChange={handleChange}
                    label='password'
                    required />
                
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton
                        type='button'
                        onClick={googleSignInStartClickHandler}
                        isGoogleSignIn
                    >Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </SignInContainer>
    );
};

export default SignIn;