import React from 'react';
import { Container } from 'react-bootstrap';
import Post from '../../components/Forms/post';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

const Create = (props: any) => {
    const { entity } = props.props;

    if (entity == 'post') {
        return (
            <Container fluid className="p-0">
                <Navigation />
                <Header title="Create Post" />
                <Container className="center">{<Post />}</Container>
            </Container>
        );
    }

    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header title="Users" />
            <Container className="mt-5">Nothing to see here...</Container>
        </Container>
    );
};

export default Create;
