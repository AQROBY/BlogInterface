import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PostRepo from '../../../services/repoPosts';
import EditConfirmation from '../../modals/editConfirmation';

const Post = (props: any) => {
    const repo = PostRepo.getInstance();
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    var data: { id: number; title: string; contents: string; created_at: Date; modified_at: Date } = {
        id: PostRepo.assignId() + 1,
        title: props.title,
        contents: props.contents,
        created_at: new Date(),
        modified_at: new Date()
    };

    function handleOpenEditModal(event: any) {
        sessionStorage.setItem('tempData', JSON.stringify(data));
        setOpenEditModal(true);
        event.preventDefault();
    }

    function handleEdit() {
        const temp = JSON.parse(sessionStorage.getItem('tempData') || '{}');
        data = temp;
        repo.update(props.id, data);
        navigate('/posts/read/' + props.id, { replace: true });
    }

    const handleSubmit = (event: any) => {
        if (validated === true) {
            data.title = event.target[0].value;
            data.contents = event.target[1].value;

            if (props.title == undefined) {
                repo.create(data);
                navigate('/posts/read/' + data.id, { replace: true });
            } else {
                handleOpenEditModal(event);
            }
        }
    };

    const handleValidation = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(false);
            return;
        }
        setValidated(true);
    };

    const handleCancel = () => {
        navigate('/posts/read/' + props.id, { replace: true });
    };

    return (
        <>
            <Form validated={validated} onSubmit={handleSubmit} className="mt-3 mb-4" title="Create Post">
                <EditConfirmation open={openEditModal} setOpen={setOpenEditModal} handleEdit={handleEdit} />
                <Form.Group className="mb-3 content">
                    <Form.Label>Title</Form.Label>
                    <Form.Control required name="title" type="text" placeholder="Enter post title" defaultValue={props.title} onBlur={handleValidation} />
                    <Form.Text className="text-muted">Example: Sunny Day</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 content">
                    <Form.Label>Content</Form.Label>
                    <Form.Control required as="textarea" name="contents" rows={25} placeholder="Enter contents" defaultValue={props.contents} onBlur={handleValidation} />
                    <Form.Text className="text-muted">Example: The sun was up early today, I wanted to...</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button className="ml-1" variant="primary" type="button" onClick={handleCancel}>
                    Cancel
                </Button>
            </Form>
        </>
    );
};

export default Post;
