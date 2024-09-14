import authOptions from '@/configs/next-auth';
import NextAuth from 'next-auth/next';

const handle = NextAuth(authOptions);

export { handle as GET, handle as POST };
