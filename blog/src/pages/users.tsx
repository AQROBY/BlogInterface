import React from 'react';
import { Container } from 'reactstrap';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

export interface IUsersProps {}

const Users: React.FunctionComponent<IUsersProps> = (props) => {
    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header title="Users" />
            <Container className="mt-5">Blog stuf here....</Container>
        </Container>
    );
};

export default Users;
