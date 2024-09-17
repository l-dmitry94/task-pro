'use client';

import { signOut } from 'next-auth/react';
import Icon from '@/components/ui/Icon';
import scss from './Logout.module.scss';

const Logout = () => {
    return (
        <button onClick={() => signOut({ callbackUrl: '/welcome' })} className={scss.logoutButton}>
            <Icon variant="logout" className={scss.logoutIcon} />
            <p className={scss.logoutText}>Log out</p>
        </button>
    );
};

export default Logout;
