import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavbarBrand } from 'reactstrap';

export interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
    return (
        <Navbar color="light" light sticky="top" expand="md">
            <Container>
                <NavbarBrand tag={Link} to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="logo" width={'5%'} />
                </NavbarBrand>
                <Nav className="mr-auto" navbar></Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;
