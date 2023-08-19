import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Menu from 'images/menu.svg';

export default function NavBar(): JSX.Element {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="/">MASSMIYT23</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/event">Event</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
