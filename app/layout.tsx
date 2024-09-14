import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import Providers from './providers';
import poppins from '@/constants/fonts';
import 'react-toastify/dist/ReactToastify.css';
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
            <body className={poppins.className}>
                <Providers>{children}</Providers>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    closeOnClick
                    draggable
                    theme="colored"
                    limit={1}
                />
            </body>
        </html>
    );
};

export default RootLayout;
