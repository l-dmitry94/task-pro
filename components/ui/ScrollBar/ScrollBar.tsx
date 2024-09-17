'use client';
import { FC } from 'react';
import SimpleBar from 'simplebar-react';
import { IScrollBar } from './ScrollBar.types';
import 'simplebar-react/dist/simplebar.min.css';
import scss from './ScrollBar.module.scss';
import clsx from 'clsx';

const ScrollBar: FC<IScrollBar> = ({ children, maxHeight, maxWidth, className }) => {
    return (
        <SimpleBar style={{ maxHeight, maxWidth }} className={clsx(scss.simpleBar, className)}>
            {children}
        </SimpleBar>
    );
};

export default ScrollBar;
