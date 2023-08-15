import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar(): JSX.Element {
    return (
        <div className="navbar">
            <Navbar
                expand="lg"
                className="bg-body-tertiary width-full"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand href="/">MASSMIYT23</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="justify-content-end">
                            <Nav.Item>
                                <Nav.Link href="/event">Event</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/gallery">Gallery</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/schedule">Schedule</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
