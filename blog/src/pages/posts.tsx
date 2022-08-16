import React from 'react';

export interface IPostsProps {}

const Posts: React.FunctionComponent<IPostsProps> = (props) => {
    return (
        <div>
            <p>This is the posts page</p>
        </div>
    );
};

export default Posts;
