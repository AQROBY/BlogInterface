import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Post from '../components/posts';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import data from '../mock-posts.json';
import Layout from '../components/Layout';

const Posts: React.FunctionComponent = () => {
    const ceva = <Layout />;
    return (
        <Container fluid className="p-0">
            <Layout />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Link to="posts/create" state={{ data }}>
                            <button type="button" className="modalButton mt-3 btn btn-primary">
                                Add Post
                            </button>
                        </Link>
                        <Post posts={data} />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Posts;
