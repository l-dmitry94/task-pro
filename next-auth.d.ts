import 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    interface User {
        id?: string;
        name?: string;
        email?: string;
        image?: string;
        theme: 'dark' | 'light' | 'violet';
    }

    interface Session {
        user: User & DefaultSession['user'];
    }
}
