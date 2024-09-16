import { NextAuthOptions, User } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { ILoginForm } from '@/components/shared/Auth/LoginForm';
import prisma from './prisma';

const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials as ILoginForm;

                const user = await prisma.user.findUnique({
                    where: {
                        email,
                    },
                });

                if (!user || !(await bcrypt.compare(password, user.password!))) {
                    return null;
                }

                return user as User;
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user, trigger, session }) {
            if (trigger === 'update' && session?.email) {
                token.name = session.name;
                token.email = session.email;
                token.picture = session.image;
                token.theme = session.theme;
                token.id = session.id;
            }

            if (user) {
                token.id = user.id;
                token.theme = user.theme;
            }

            return token;
        },

        async session({ session, token }) {
            session.user.id = token.id as string;
            session.user.theme = token.theme as 'dark' | 'light' | 'violet';

            return session;
        },
    },

    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/auth/login',
    },
};

export default authOptions;
