import React from 'react';

import { Nav } from 'react-bootstrap';

// Basic header with name and links
function Header() {
    return (
        <header className="mb-5">
            <div>
                <h3 className="">Elbin Cenisev</h3>
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
                </Nav>
            </div>
        </header >
    );
}

export default Header;