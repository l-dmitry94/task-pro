import { IAuthPage } from '@/app/auth/[id]/page';
import React, { FC } from 'react';
import AuthNav from './AuthNav';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const Auth: FC<IAuthPage> = ({ params }) => {
    return <AuthNav>{params.id === 'register' ? <RegisterForm /> : <LoginForm />}</AuthNav>;
};

export default Auth;
