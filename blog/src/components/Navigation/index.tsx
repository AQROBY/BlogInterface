import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation: React.FunctionComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="ml-2 w-25">
                <Navbar.Brand href="/">
                    <img className="w-25 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="logo" />
                    BlogApp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="mr-5" id="basic-navbar-nav">
                    <Nav className="mr-5">
                        <Nav.Link className="mr-2" href="/postss">
                            Posts
                        </Nav.Link>
                        <Nav.Link className="mr-4" href="/users">
                            Users
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
