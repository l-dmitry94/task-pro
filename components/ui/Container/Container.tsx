import { FC } from 'react';
import clsx from 'clsx';
import { IContainer } from './Container.types';
import scss from './Container.module.scss';

const Container: FC<IContainer> = ({ children, className }) => {
    return <div className={clsx(scss.container, className)}>{children}</div>;
};

export default Container;
