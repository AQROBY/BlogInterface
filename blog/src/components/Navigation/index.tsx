import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavbarBrand, NavbarText, NavItem } from 'reactstrap';

const Navigation: React.FunctionComponent = () => {
    return (
        <Navbar color="light" light sticky="top">
            <Container className="ml-1">
                <NavbarBrand tag={Link} to="/">
                    <img className="mr-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="logo" width={'6%'} />
                    BlogApp
                </NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavbarText tag={Link} to="/posts">
                            Posts
                        </NavbarText>
                    </NavItem>
                    <NavItem>
                        <NavbarText tag={Link} to="/users">
                            Users
                        </NavbarText>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;
