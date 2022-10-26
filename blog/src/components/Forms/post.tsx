import { Button, Form } from 'react-bootstrap';
import Repo from '../../services/repo';
import { repoInitialisation } from '../../services/repoInitialisation';

const Post = (posts: any) => {
    var repo = Repo;
    var data: { id: string; title: string; content: string; createdAt: string; editedAt: string } = {
        id: (repo.length() + 1).toString(),
        title: '',
        content: '',
        createdAt: Date.now().toString(),
        editedAt: Date.now().toString()
    };

    function handleClick(data: any) {
        repo.add(data);
        let asd = repo.getAll();
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
                <Form.Control as="textarea" rows={25} name="contents" placeholder="Enter contents" onChange={(event) => (data.content = event.target.value)} />
                <Form.Text className="text-muted">Example: The sun was up early today, I wanted to...</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => handleClick(data)}>
                Submit
            </Button>
        </Form>
    );
};

export default Post;
