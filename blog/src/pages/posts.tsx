import data from '../mock-posts.json';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Post from '../components/posts';
import { Container } from 'reactstrap';
import CreateEditPost from '../components/Modals/createEditPost';
import { useEffect, useState } from 'react';

const Posts: React.FunctionComponent = () => {
    const [modal, setModal] = useState(false);

    return (
        <Container fluid className="p-0">
            <Navigation />
            <div className="main">
                <CreateEditPost open={modal} close={() => setModal(false)} />
                <Header title="Posts" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <button type="button" className="modalButton mt-3 btn btn-primary" onClick={() => setModal(true)}>
                                Add Post
                            </button>

                            <Post />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Posts;
