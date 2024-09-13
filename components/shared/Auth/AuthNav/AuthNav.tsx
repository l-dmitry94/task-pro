import { FC } from 'react';
import { IAuthNav } from './AuthNav.types';

const AuthNav: FC<IAuthNav> = ({ children, className }) => {
    return <div className={className}>{children}</div>;
};

export default AuthNav;
