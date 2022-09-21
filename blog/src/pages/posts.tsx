import data from '../mock-posts.json';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Post from '../components/posts';
import { Container } from 'reactstrap';
import CreateEditPost from '../components/Modals/createEditPost';
import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Posts: React.FunctionComponent = () => {
    const [modal, setModal] = useState(false);

    const navigate = useNavigate();

    return (
        <>
            <Container fluid className="p-0">
                <Navigation />
                <div className="main">
                    <CreateEditPost open={modal} close={() => setModal(false)} />
                    <Header title="Posts" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Link to="create">
                                    <button type="button" className="modalButton mt-3 btn btn-primary">
                                        Add Post
                                    </button>
                                </Link>
                                <Post />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Posts;
