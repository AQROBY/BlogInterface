import Post from '../components/posts';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Layout from '../components/layout';

const Posts: React.FunctionComponent = () => {
    return (
        <Container fluid className="p-0">
            <Layout />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Link to="posts/create">
                            <button type="button" className="modalButton mt-3 btn btn-primary">
                                Add Post
                            </button>
                        </Link>
                        <Post />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Posts;
