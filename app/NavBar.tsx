import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import Menu from 'images/menu.svg';

export default function NavBar(): JSX.Element {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <Image
                            src="logo.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            roundedCircle
                        />{' '}
                        MASSMIYT23
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">
                                <b>Home</b>
                            </Nav.Link>
                            <Nav.Link href="/event">Event</Nav.Link>
                            <Nav.Link href="/gallery">Gallery</Nav.Link>
                            <Nav.Link href="/schedule">Schedule</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
