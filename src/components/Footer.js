import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';

import linkedInLogo from '../images/linkedInLogo.png'
import githubLogo from '../images/githubLogo.png'
import stackOverflowLogo from '../images/stackOverflowLogo.png'

// Basic header with name and links
function Footer() {
    return (
        <Container fluid className="p-3 footer">
            <Container fluid className="divider mb-5"></Container>
            <Row className="g-3 row-cols-md-3 row-cols-1 justify-content-center">
                <Col md="auto">
                    <a href="https://www.linkedin.com/in/elbin-cenisev-7a31568a/" className="px-3">
                        <Image height="40px" src={linkedInLogo} />
                    </a>
                </Col>
                <Col md="auto">
                    <a href="https://github.com/elbin-cenisev" className="px-3">
                        <Image height="40px" src={githubLogo} />
                    </a>
                </Col>
                <Col md="auto">
                    <a href="https://stackoverflow.com/users/14283359/nible" className="px-3">
                        <Image height="40px" src={stackOverflowLogo} />
                    </a>
                </Col>
            </Row>
            <small class="d-block mb-3 text-muted pt-5">&copy; 2021</small>
        </Container >
    );
}

export default Footer;