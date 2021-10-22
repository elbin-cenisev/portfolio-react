import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import linkedInLogo from '../images/linkedInLogo.png'
import githubLogo from '../images/githubLogo.png'
import stackOverflowLogo from '../images/stackOverflowLogo.png'

// Basic header with name and links
function Footer() {
    return (
        <Container fluid className="p-3">
            <Container fluid className="divider mb-3"></Container>
            <h5>Links</h5>
            <Row className="g-3 row-cols-md-3 row-cols-1 justify-content-center">
                <Col md="auto">
                    <Link href="https://stackoverflow.com/users/14283359/nible" className="px-3">
                        <Image height="40px" src={linkedInLogo} />

                    </Link>
                </Col>
                <Col md="auto">
                    <Link href="https://stackoverflow.com/users/14283359/nible" className="px-3">
                        <Image height="40px" src={githubLogo} />
                    </Link>
                </Col>
                <Col md="auto">
                    <Link href="https://stackoverflow.com/users/14283359/nible" className="px-3">
                        <Image height="40px" src={stackOverflowLogo} />
                    </Link>
                </Col>
            </Row>
            <small class="d-block mb-3 text-muted pt-5">&copy; 2021</small>
        </Container >
    );
}

export default Footer;