'use client';
import { FC } from 'react';
import SimpleBar from 'simplebar-react';
import clsx from 'clsx';
import { IScrollBar } from './ScrollBar.types';
import 'simplebar-react/dist/simplebar.min.css';
import scss from './ScrollBar.module.scss';

const ScrollBar: FC<IScrollBar> = ({ children, maxHeight, width, className }) => {
    return (
        <SimpleBar style={{ maxHeight, width }} className={clsx(scss.simpleBar, className)}>
            {children}
        </SimpleBar>
    );
};

export default ScrollBar;
