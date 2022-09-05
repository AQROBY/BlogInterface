import data from '../mock-posts.json';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Post from '../components/posts';
import { Container } from 'reactstrap';
import createEditPost from '../components/createEditPost';

const Posts: React.FunctionComponent = () => {
    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header title="Posts" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Post />
                        <button onClick={createEditPost}>here</button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Posts;
