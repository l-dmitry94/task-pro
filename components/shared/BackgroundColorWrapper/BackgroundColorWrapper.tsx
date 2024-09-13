import { FC } from 'react';
import clsx from 'clsx';
import { IBackgroundColorWrapper } from './BackgroundColorWrapper.types';
import scss from './BackgroundColorWrapper.module.scss';

const BackgroundColorWrapper: FC<IBackgroundColorWrapper> = ({ children, className }) => {
    return <div className={clsx(scss.wrapper, className)}>{children}</div>;
};

export default BackgroundColorWrapper;
