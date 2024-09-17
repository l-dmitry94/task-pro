import { ReactNode } from 'react';

export interface IScrollBar {
    children: ReactNode;
    maxHeight?: string;
    maxWidth?: string;
    className?: string;
}
