import Home from '@/components/shared/Home';
import { FC, ReactNode } from 'react';

interface IHomeLayout {
    children: ReactNode;
}

const HomeLayout: FC<IHomeLayout> = ({ children }) => {
    return <Home>{children}</Home>;
};

export default HomeLayout;
