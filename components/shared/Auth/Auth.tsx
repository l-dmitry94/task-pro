import React, { FC } from 'react';
import { IAuthPage } from '@/app/auth/[id]/page';
import AuthNav from './AuthNav';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import BackgroundColorWrapper from '../BackgroundColorWrapper';

const Auth: FC<IAuthPage> = ({ params }) => {
    return (
        <BackgroundColorWrapper>
            <AuthNav>{params.id === 'register' ? <RegisterForm /> : <LoginForm />}</AuthNav>
        </BackgroundColorWrapper>
    );
};

export default Auth;
