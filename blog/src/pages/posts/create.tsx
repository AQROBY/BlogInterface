import { Container } from 'react-bootstrap';
import Post from '../../components/Forms/posts/createPost';
import Header from '../../components/header';
import Navigation from '../../components/navigation';

const Create = () => {
    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header title="Create Post" />
            <Container className="center">{<Post />}</Container>
        </Container>
    );
};

export default Create;
