import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import authOptions from '@/configs/next-auth';
import Home from '@/components/shared/Home';

const HomePage = async () => {
    const session = await getServerSession(authOptions);
    if (!session) redirect('/welcome');

    return <Home />;
};

export default HomePage;
