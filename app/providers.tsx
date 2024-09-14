'use client';

import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';

export interface IProviders {
    children: ReactNode;
}
const Providers: FC<IProviders> = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
