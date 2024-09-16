import { ReactNode } from 'react';

export interface IModal {
    title: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}
