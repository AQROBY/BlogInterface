import React from 'react';

const Post = () => {
    return (
        <div className="content">
            <h2>Create/Edit Post</h2>
            <label htmlFor="">Title</label>
            <input type="text" name="title" className="form-control" />
            <label htmlFor="">Content</label>
            <textarea name="contents" className="form-control" />
        </div>
    );
};

export default Post;
