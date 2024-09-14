import { FC } from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import Auth from '@/components/shared/Auth';
import authOptions from '@/configs/next-auth';

export interface IAuthPage {
    params: { id: string };
}

const AuthPage: FC<IAuthPage> = async ({ params }) => {
    const session = await getServerSession(authOptions);
    if (session) redirect('/home');

    return <Auth params={params} />;
};

export default AuthPage;
