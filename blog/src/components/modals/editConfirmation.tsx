import { Button, CloseButton, Modal } from 'react-bootstrap';

const EditConfirmation = ({ open, setOpen, handleEdit }: { open: boolean; setOpen: Function; handleEdit: Function }) => {
    return (
        <Modal className="mt-5 pt-4" show={open}>
            <Modal.Header>
                <Modal.Title>Warning!</Modal.Title>
                <CloseButton className="border-0 pt-1 pb-1 pl-2 pr-2 btn-primary" onClick={() => setOpen(false)}>
                    X
                </CloseButton>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to edit this post?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => handleEdit()}>
                    Yes
                </Button>
                <Button variant="primary" onClick={() => setOpen(false)}>
                    No
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditConfirmation;
