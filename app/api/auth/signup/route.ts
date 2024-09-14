import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/configs/prisma';

export const POST = async (req: NextRequest) => {
    const { name, email, password } = await req.json();

    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (user) {
            return NextResponse.json({ message: 'User already exists' }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
    } catch {
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
};
