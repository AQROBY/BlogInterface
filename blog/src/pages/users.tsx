import React from 'react';
import { Container } from 'reactstrap';
import CreateEditPost from '../components/createEditPost';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Users: React.FunctionComponent = () => {
    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header title="Users" />
            <Container className="mt-5">Blog stuf here....</Container>
        </Container>
    );
};

export default Users;
