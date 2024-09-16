'use client';

import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

export interface IProviders {
    children: ReactNode;
}
const Providers: FC<IProviders> = ({ children }) => {
    return (
        <SessionProvider>
            <SkeletonTheme baseColor="#1f1f1f" highlightColor="#bedbb0">
                {children}
            </SkeletonTheme>
        </SessionProvider>
    );
};

export default Providers;
