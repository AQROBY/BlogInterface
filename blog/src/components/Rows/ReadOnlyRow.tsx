import React from 'react';

const ReadOnlyRow = ({ post, handleEditClick, handleDeleteClick }: { post: any; handleEditClick: any; handleDeleteClick: any }) => {
    return (
        <tr>
            <td>{post.title}</td>
            <td>{post.content}</td>
            <td>{post.created_at}</td>
            <td>{post.modified_at}</td>
            <td>
                <button type="button" onClick={(event) => handleEditClick(event, post)}>
                    Edit
                </button>
                <button type="button" onClick={() => handleDeleteClick(post.id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;
