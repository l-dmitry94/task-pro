import { FC } from 'react';
import { IIcon } from './Icon.types';
import clsx from 'clsx';
import scss from './Icon.module.scss';

const Icon: FC<IIcon> = ({ variant, className, ...props }) => {
    return (
        <svg className={clsx(scss.icon, className)} {...props}>
            <use href={`/icons/icons.svg#icon-${variant}`}></use>
        </svg>
    );
};

export default Icon;
