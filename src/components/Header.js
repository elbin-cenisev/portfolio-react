import React from 'react';
import { Nav, Container } from 'react-bootstrap';

// Basic header with name and links
function Header({ currentPage, handlePageChange }) {
    return (
        <header className="my-5">
            <Container className="py-3">
                <a href="/" className="titleLink"><h3>Elbin Cenisev</h3></a>
                <Nav className="justify-content-center nav-masthead">
                    <Nav.Item>
                        <Nav.Link
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-Link'}
                        >
                            About
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            href="#projects"
                            onClick={() => handlePageChange('Projects')}
                            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-Link'}
                        >
                            Projects
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-Link'}
                        >
                            Contact
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            href="https://drive.google.com/file/d/109Ue6l9rYXh5k6x3ZRZCfEfXP0yp2euC/view?usp=sharing"
                        >
                            Resume
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </header >
    );
}

export default Header;