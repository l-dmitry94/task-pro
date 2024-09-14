import Welcome from '@/components/shared/Welcome';
import authOptions from '@/configs/next-auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const WelcomePage = async () => {
    const session = await getServerSession(authOptions);
    if (session) redirect('/home');

    return <Welcome />;
};

export default WelcomePage;
