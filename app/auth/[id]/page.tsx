import { FC } from 'react';
import Auth from '@/components/shared/Auth';

export interface IAuthPage {
    params: { id: string };
}

const AuthPage: FC<IAuthPage> = ({ params }) => {
    return <Auth params={params} />;
};

export default AuthPage;
