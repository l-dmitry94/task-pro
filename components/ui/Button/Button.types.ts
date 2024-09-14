import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
}
