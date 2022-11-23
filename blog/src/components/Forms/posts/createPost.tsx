import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { generatePath, useNavigate } from 'react-router-dom';
import PostRepo from '../../../services/repoPosts';

const Post = (props: any) => {
    const repo = PostRepo.getInstance();
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);

    var data: { id: number; title: string; contents: string; created_at: Date; modified_at: Date } = {
        id: PostRepo.assignId() + 1,
        title: props.title,
        contents: props.contents,
        created_at: new Date(),
        modified_at: new Date()
    };

    const handleClick = (event: any) => {
        if (validated === true) {
            data.title = event.target[0].value;
            data.contents = event.target[1].value;

            if (props.title == undefined) {
                repo.create(data);
                navigate('/posts/read/' + data.id, { replace: true });
            } else {
                repo.update(props.id, data);
                navigate('/posts/read/' + props.id, { replace: true });
            }
        }
    };

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(false);
            return;
        }
        setValidated(true);
    };

    return (
        <Form validated={validated} onSubmit={handleClick} className="mt-3 mb-4" title="Create Post">
            <Form.Group className="mb-3 content">
                <Form.Label>Title</Form.Label>
                <Form.Control required name="title" type="text" placeholder="Enter post title" defaultValue={props.title} onBlur={handleSubmit} />
                <Form.Text className="text-muted">Example: Sunny Day</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 content">
                <Form.Label>Content</Form.Label>
                <Form.Control required as="textarea" name="contents" rows={25} placeholder="Enter contents" defaultValue={props.contents} onBlur={handleSubmit} />
                <Form.Text className="text-muted">Example: The sun was up early today, I wanted to...</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Post;
