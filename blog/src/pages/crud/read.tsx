import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import PostRepo from '../../services/repo';

const Read = () => {
    const repo = PostRepo.getInstance();
    const { id } = useParams();
    if (id == undefined) {
        return <h1>Not found!</h1>;
    }

    let idAsNumber: number = +id;
    let post = repo.find(idAsNumber);

    function handleDate(date: Date) {
        return date.toLocaleString();
    }

    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header title={post.title} />
            <Container className="center">
                <div className="mt-5 mb-5 pb-5 contents">
                    <p>{post.contents}</p>
                    <div className="pt-4">
                        <h3 className="float-left">Created at: {handleDate(new Date(post.created_at))}</h3>
                        <h3 className="float-right">Modified at: {handleDate(new Date(post.modified_at))}</h3>
                    </div>
                </div>
            </Container>
        </Container>
    );
};

export default Read;
