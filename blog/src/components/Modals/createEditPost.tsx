import React from 'react';
import PostForm from '../Forms/post';

const CreateEditPost = ({ open, close }: { open: boolean; close: any }) => {
    if (!open) {
        return null;
    }

    return (
        <div className="overlay">
            <div className="modal-container">
                <div className="modal-right">
                    <p onClick={close} className="closeBtn">
                        <strong>X</strong>
                    </p>
                </div>
                <div className="content">
                    <PostForm />
                    <div className="btnContainer mt-2 mb-2">
                        <button onClick={close} className="btn btn-danger mr-2">
                            Close
                        </button>
                        <button className="btn btn-success">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEditPost;
