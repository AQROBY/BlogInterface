import React from 'react';
import { Container } from 'reactstrap';
import Header from '../components/header';
import Navigation from '../components/navigation';

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
