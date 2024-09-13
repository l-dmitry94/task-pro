import { FC } from 'react';
import AuthNavLinks from './AuthNavLinks';
import { IAuthNav } from './AuthNav.types';

const AuthNav: FC<IAuthNav> = ({ children, className }) => {
    return (
        <div className={className}>
            <AuthNavLinks />
            {children}
        </div>
    );
};

export default AuthNav;
