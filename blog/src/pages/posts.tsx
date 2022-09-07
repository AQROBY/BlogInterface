import data from '../mock-posts.json';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Post from '../components/posts';
import { Container } from 'reactstrap';
import CreateEditPost from '../components/createEditPost';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';

const Posts: React.FunctionComponent = () => {
    const [modal, setModal] = useState(false);

    return (
        <Container name="x" fluid className="p-0">
            <Navigation />
            <Header title="Posts" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Post />
                        <button onClick={() => setModal(true)}>Modal</button>
                        <CreateEditPost open={modal} />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Posts;
