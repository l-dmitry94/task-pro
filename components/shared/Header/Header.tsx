'use client';

import { FC } from 'react';
import { useSession } from 'next-auth/react';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import ThemeSelect from './ThemeSelect';
import UserInfo from './UserInfo';
import scss from './Header.module.scss';

const Header: FC = ({ toggleSidebar }) => {
    const { data: session } = useSession();

    return (
        <header className={scss.header}>
            <Container className={scss.container}>
                <div className={scss.wrapper}>
                    <button onClick={toggleSidebar} className={scss.burgerButton}>
                        <Icon variant="menu" className={scss.burgerIcon} />
                    </button>

                    <div className={scss.userInfo}>
                        <ThemeSelect theme={session?.user?.theme} />
                        <UserInfo user={session?.user} />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
