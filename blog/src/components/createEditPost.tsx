import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { render } from 'react-dom';

export default function CreateEditPost() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <div className="border p-3 mt-3 bg-light" style={{ position: 'fixed' }}>
                    <h2>Create/Edit Post</h2>
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" className="form-control" />
                </div>
            </Modal>
        </>
    );
}
