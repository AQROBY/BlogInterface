import { Button, CloseButton, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Confirmation = ({ open, setOpen, handleOperation, id = -1 }: { open: boolean; setOpen: Function; handleOperation: Function; id?: number }) => {
    function handleMessage() {
        if (id === -1) {
            return 'delete';
        }
        return 'edit';
    }

    function handleLink() {
        if (id === -1) {
            return '/';
        }
        return '/users/read/' + id;
    }

    return (
        <Modal className="mt-5 pt-4" show={open}>
            <Modal.Header>
                <Modal.Title>Warning!</Modal.Title>
                <CloseButton className="border-0 pt-1 pb-1 pl-2 pr-2 btn-primary" onClick={() => setOpen(false)}>
                    X
                </CloseButton>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to {handleMessage()} this user?</p>
            </Modal.Body>
            <Modal.Footer>
                <Link to={handleLink()}>
                    <Button variant="danger" onClick={() => handleOperation()}>
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

export default Confirmation;
