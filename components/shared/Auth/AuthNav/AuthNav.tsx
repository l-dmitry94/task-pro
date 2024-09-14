import { FC } from 'react';
import AuthNavLinks from './AuthNavLinks';
import { IAuthNav } from './AuthNav.types';
import scss from './AuthNav.module.scss';
import Container from '@/components/ui/Container';

const AuthNav: FC<IAuthNav> = ({ children }) => {
    return (
        <Container className={scss.container}>
            <div className={scss.wrapper}>
                <AuthNavLinks />
                {children}
            </div>
        </Container>
    );
};

export default AuthNav;
