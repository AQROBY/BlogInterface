import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostRepo from '../../../services/repo';

const Post = (props: any) => {
    const repo = PostRepo.getInstance();
    var data: { id: string; title: string; contents: string; created_at: Date; modified_at: Date } = {
        id: (repo.size() + 1).toString(),
        title: props.title,
        contents: props.contents,
        created_at: new Date(),
        modified_at: new Date()
    };

    function handleClick(data: any) {
        if (props.title == undefined) {
            repo.create(data);
        } else {
            repo.update(props.id, data);
        }
    }

    return (
        <Form className="mt-3 mb-4" title="Create Post">
            <Form.Group className="mb-3 content">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder={'Enter post title'} defaultValue={props.title} onChange={(event) => (data.title = event.target.value)} />
                <Form.Text className="text-muted">Example: Sunny Day</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 content">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={25} name="contents" placeholder="Enter contents" defaultValue={props.contents} onChange={(event) => (data.contents = event.target.value)} />
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
