import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostRepo from '../../services/repo';

const Post = (posts: any) => {
    const repo = PostRepo.getInstance();
    const length = repo.instance.length;
    const date = new Date();
    var data: { id: string; title: string; contents: string; created_at: Date; modified_at: Date } = {
        id: (length + 1).toString(),
        title: '',
        contents: '',
        created_at: date,
        modified_at: date
    };

    function handleClick(data: any) {
        repo.create(data);
    }

    return (
        <Form className="mt-3" title="Create Post">
            <Form.Group className="mb-3 content">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder={'Enter post title'} onChange={(event) => (data.title = event.target.value)} />
                <Form.Text className="text-muted">Example: Sunny Day</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 content">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={25} name="contents" placeholder="Enter contents" onChange={(event) => (data.contents = event.target.value)} />
                <Form.Text className="text-muted">Example: The sun was up early today, I wanted to...</Form.Text>
            </Form.Group>
            <Link to="/">
                <Button variant="primary" type="submit" onClick={() => handleClick(data)}>
                    Submit
                </Button>
            </Link>
        </Form>
    );
};

export default Post;
