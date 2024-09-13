import { FC } from 'react';
import clsx from 'clsx';
import Icon from '@/components/ui/Icon';
import { ILogo } from './Logo.types';
import scss from './Logo.module.scss';

const Logo: FC<ILogo> = ({ variant, className }) => {
    return (
        <div className={clsx(scss.logo, scss[variant], className)}>
            <div className={scss.iconWrapper}>
                <Icon variant="logo" className={scss.icon} />
            </div>
            <span className={scss.title}>Task Pro</span>
        </div>
    );
};

export default Logo;
