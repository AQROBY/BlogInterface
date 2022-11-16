import { Button, CloseButton, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostRepo from '../../services/repo';

const DeleteConfirmation = ({ open, setOpen, handleDelete }: { open: boolean; setOpen: Function; handleDelete: Function }) => {
    const repo = PostRepo.getInstance();

    return (
        <Modal show={open}>
            <Modal.Header>
                <Modal.Title>Warning!</Modal.Title>
                <CloseButton className="border-0 pt-1 pb-1 pl-2 pr-2 btn-primary" onClick={() => setOpen(false)}>
                    X
                </CloseButton>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete this post?</p>
            </Modal.Body>
            <Modal.Footer>
                <Link to="/">
                    <Button variant="danger" onClick={() => handleDelete()}>
                        Yes
                    </Button>
                </Link>
                <Button variant="primary" onClick={() => setOpen(false)}>
                    No
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteConfirmation;
