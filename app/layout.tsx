import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/styles/globals.scss';
import poppins from '@/constants/fonts';

export const metadata: Metadata = {
    title: 'Task Pro',
    description:
        "Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!",
    icons: {
        icon: '/favicon.ico',
    },
};

interface IRootLayout {
    children: ReactNode;
}

const RootLayout: FC<IRootLayout> = ({ children }) => {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
