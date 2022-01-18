import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import { SignInAndSignUpPageContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
    <SignInAndSignUpPageContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpPageContainer>
);

export default SignInAndSignUpPage;