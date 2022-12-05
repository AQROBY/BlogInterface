import { Container } from 'react-bootstrap';
import Post from '../../components/Forms/posts/createPost';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import PostRepo from '../../services/repoPosts';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const repo = PostRepo.getInstance();
    const { id } = useParams();

    if (id == undefined) {
        return <h1>Not found!</h1>;
    }

    let idAsNumber: number = +id;
    let post = repo.find(idAsNumber);

    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header title="Create Post" />
            <Container className="center">{<Post id={post.id} title={post.title} contents={post.contents} />}</Container>
        </Container>
    );
};

export default Edit;
