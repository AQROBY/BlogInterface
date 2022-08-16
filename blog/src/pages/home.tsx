import React from 'react';
import { Container } from 'reactstrap';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header title="Home" headline="What is this???" />
            <Container className="mt-5">Blog stuf here....</Container>
        </Container>
    );
};

export default Home;
