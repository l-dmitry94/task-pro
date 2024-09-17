import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/configs/prisma';

export const PUT = async (req: NextRequest) => {
    const body = await req.json();

    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
        },
    });

    if (!user) {
        return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const { password, ...data } = body;

    const updatedData = password ? { ...data, password: await bcrypt.hash(password, 10) } : data;

    const updatedUser = await prisma.user.update({
        where: {
            email: body.email,
        },
        data: updatedData,
    });

    return NextResponse.json(updatedUser, { status: 200 });
};
