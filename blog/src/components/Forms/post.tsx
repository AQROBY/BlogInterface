import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Post = () => {
    return (
        <Form title="Create Post">
            <Form.Group className="mb-3 content">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter post title" />
                <Form.Text className="text-muted">Some title...</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 content">
                <Form.Label>Content</Form.Label>
                <Form.Control type="text" name="contents" placeholder="Enter contents" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Post;
