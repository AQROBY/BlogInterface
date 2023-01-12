import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PostRepo from '../../../services/repoPosts';
import Confirmation from '../../modals/posts/confirmation';
import PostType from '../../types/postType';

const Post = (props: any) => {
    const repo = PostRepo.getInstance();
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [dataTemp, setDataTemp] = useState<PostType>();

    const data: PostType = {
        id: PostRepo.assignId() + 1,
        title: props.title,
        contents: props.contents,
        created_at: new Date(),
        modified_at: new Date()
    };

    function handleOpenEditModal(event: any) {
        setOpenEditModal(true);
        event.preventDefault();
    }

    function handleEdit() {
        if (dataTemp != undefined) {
            data.title = dataTemp.title;
            data.contents = dataTemp.contents;
            data.modified_at = dataTemp.modified_at;
        }
        repo.update(props.id, data);
    }

    const handleSubmit = (event: any) => {
        if (validated === true) {
            data.title = event.target[0].value;
            data.contents = event.target[1].value;
            setDataTemp(data);

            if (props.title === undefined) {
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
        if (props.id != undefined) {
            navigate('/posts/read/' + props.id, { replace: true });
        } else {
            navigate('/', { replace: true });
        }
    };

    return (
        <>
            <Form validated={validated} onSubmit={handleSubmit} className="mt-3 mb-4" title="Create Post">
                <Confirmation open={openEditModal} setOpen={setOpenEditModal} handleOperation={handleEdit} id={props.id} />
                <Form.Group className="mb-3 content">
                    <Form.Label className="text-dark">Title</Form.Label>
                    <Form.Control className="bg-light" required name="title" type="text" placeholder="Enter post title" defaultValue={props.title} onBlur={handleValidation} />
                    <Form.Text className="text-dark">Example: Sunny Day</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 content">
                    <Form.Label className="text-dark">Content</Form.Label>
                    <Form.Control className="bg-light" required as="textarea" name="contents" rows={25} placeholder="Enter contents" defaultValue={props.contents} onBlur={handleValidation} />
                    <Form.Text className="text-dark">Example: The sun was up early today, I wanted to...</Form.Text>
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
