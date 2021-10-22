import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Basic header with name and links
function Header() {
    return (
        <header className="mb-5">
            <Container className="py-3">
                <Link to="/" className="titleLink"><h3>Elbin Cenisev</h3></Link> 
                <Nav className="justify-content-center nav-masthead">
                    <Nav.Item>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://drive.google.com/file/d/109Ue6l9rYXh5k6x3ZRZCfEfXP0yp2euC/view?usp=sharing">Resume</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </header >
    );
}

export default Header;