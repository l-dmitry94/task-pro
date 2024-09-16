import React from 'react';

const BoardPage = ({ params: { boardId } }: { params: { boardId: string } }) => {
    return <div>Board {boardId}</div>;
};

export default BoardPage;
