import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { ToastContainer } from 'react-toastify';
import type { Metadata } from 'next';
import Providers from './providers';
import poppins from '@/constants/fonts';
import 'react-loading-skeleton/dist/skeleton.css';
import '@/styles/globals.scss';

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
            <body className={clsx(poppins.className, 'overflow-y-hidden')}>
                <Providers>
                    {children}
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar
                        closeOnClick
                        draggable
                        theme="colored"
                        limit={1}
                    />
                </Providers>
            </body>
        </html>
    );
};

export default RootLayout;
