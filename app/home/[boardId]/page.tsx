'use client';

import { CldImage } from 'next-cloudinary';

const BoardPage = ({ params: { boardId } }: { params: { boardId: string } }) => {
    return (
        <div className="relative h-[calc(100%-60px)]">
            <CldImage src="9" fill alt="Background image" className="object-cover" />
            <div className="absolute left-0 top-0 h-full w-full">
                <p>Board {boardId}</p>
                <span>Hello</span>
            </div>
        </div>
    );
};

export default BoardPage;
