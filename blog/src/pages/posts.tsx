import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Post from '../components/posts';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import data from '../mock-posts.json';

const Posts: React.FunctionComponent = () => {
    let dataSorted = data.sort((a, b) => (a.modified_at > b.modified_at ? 1 : -1));
    let dataMapped: { id: number; title: string; contents: string; created_at: string; modified_at: string }[] = dataSorted;
    const [posts, setPosts] = useState(dataMapped);

    return (
        <Container fluid className="p-0">
            <Navigation />
            <div className="main">
                <Header title="Posts" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="create">
                                <button type="button" className="modalButton mt-3 btn btn-primary">
                                    Add Post
                                </button>
                            </Link>
                            <Post posts={posts} />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Posts;
