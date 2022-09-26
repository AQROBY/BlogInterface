import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

const Create: React.FunctionComponent = () => {
    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header title="Users" />
            <Container className="mt-5">Blog stuf here....</Container>
        </Container>
    );
};

export default Create;
