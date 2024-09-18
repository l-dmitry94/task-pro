import { ReactNode } from 'react';

export interface IScrollBar {
    children: ReactNode;
    maxHeight?: string;
    width?: string;
    className?: string;
}
