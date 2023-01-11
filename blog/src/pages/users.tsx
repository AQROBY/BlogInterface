import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../components/header';

const Users: React.FunctionComponent = () => {
    return (
        <>
            <Header title={'Users'} />
            <Container fluid className="p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="posts/create">
                                <button type="button" className="modalButton mt-3 btn btn-primary">
                                    Add Post
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Users;
