import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Post from '../../components/Forms/post';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

const Create = ({ posts }: any) => {
    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header title="Create Post" />
            <Container className="center">{<Post posts={posts} />}</Container>
        </Container>
    );
};

export default Create;
