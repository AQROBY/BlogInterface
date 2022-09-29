import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Post from '../components/posts';
import { Container } from 'reactstrap';
import CreateEditPost from '../components/Modals/createEditPost';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Posts: React.FunctionComponent = () => {
    const [modal, setModal] = useState(false);
    const location = useLocation();
    const state = location.state as locationData;

    interface locationData {
        title: string;
        content: string;
    }

    var data = { title: state.title, contents: state.content, created_at: new Date().toString(), modified_at: new Date().toString() };

    return (
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
                            <Post dataInput={data} />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Posts;
