import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Post = () => {
    const navigate = useNavigate();
    const toPosts = () => {
        navigate('/posts', { state: data });
    };
    var data: { title: string; content: string } = { title: '', content: '' };

    return (
        <Form className="mt-3" title="Create Post">
            <Form.Group className="mb-3 content">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter post title" onChange={(event) => (data.title = event.target.value)} />
                <Form.Text className="text-muted">Example: Sunny Day</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 content">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={25} name="contents" placeholder="Enter contents" onChange={(event) => (data.content = event.target.value)} />
                <Form.Text className="text-muted">Example: The sun was up early today, I wanted to...</Form.Text>
            </Form.Group>
            <Button
                variant="primary"
                type="submit"
                onClick={() => {
                    toPosts();
                }}
            >
                Submit
            </Button>
        </Form>
    );
};

export default Post;
