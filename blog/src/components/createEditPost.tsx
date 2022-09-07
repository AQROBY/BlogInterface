import React, { Component, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { render } from 'react-dom';

const CreateEditPost = ({ open }: { open: boolean }) => {
    if (!open) {
        return null;
    }

    return (
        <Modal show={open}>
            <Modal.Header closeButton>
                <Modal.Title>Add post</Modal.Title>
            </Modal.Header>
            <div className="border p-3 mt-3 bg-light" style={{ position: 'fixed' }}>
                <h2>Create/Edit Post</h2>
                <label htmlFor="">Title</label>
                <input type="text" name="title" className="form-control" />
                <label htmlFor="">Content</label>
                <textarea name="contents" className="form-control" />
            </div>
        </Modal>
    );
};

export default CreateEditPost;
