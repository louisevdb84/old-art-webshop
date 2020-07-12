import React from 'react';
import './sign-in-and-sign-up.style.scss';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.comonent';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
);


export default SignInAndSignUpPage;