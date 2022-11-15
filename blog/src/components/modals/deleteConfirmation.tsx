import { Button, CloseButton, Modal } from 'react-bootstrap';
import PostRepo from '../../services/repo';

const DeleteConfirmation = ({ open, setOpen }: { open: boolean; setOpen: Function }) => {
    const repo = PostRepo.getInstance();

    return (
        <Modal show={open}>
            <Modal.Header>
                <Modal.Title>Warning!</Modal.Title>
                <CloseButton onClick={() => setOpen(false)} />
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete this post?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger">Yes</Button>
                <Button variant="secondary" onClick={() => setOpen(false)}>
                    No
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteConfirmation;
