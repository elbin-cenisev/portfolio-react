import React from 'react';

import { Container, Image, ListGroup } from 'react-bootstrap';
import linkedInLogo from '../images/linkedInLogo.png'
import emailLogo from '../images/outlookLogo.png'
import githubLogo from '../images/githubLogo.png'

// Navbar and "Brand"
function Contact() {
    return (
        <Container className="contact">
            <h1 className="mt-3">Contact Me</h1>
            <p className="lead">You can use any of the following methods to contact me!</p>
            <ListGroup className="w-50 mx-auto">
                <ListGroup.Item action href="https://www.linkedin.com/in/elbin-cenisev-7a31568a/" className="mx-auto listItem">
                    <Image width="40px" height="40px" src={linkedInLogo} /> LinkedIn
                </ListGroup.Item>
                <ListGroup.Item action href="mailto:elbincenisev@outlook.com" className="mx-auto listItem">
                    <Image width="40px" height="40px" src={emailLogo} /> Email
                </ListGroup.Item>
                <ListGroup.Item action href="https://github.com/elbin-cenisev" className="mx-auto listItem">
                    <Image width="40px" height="40px" src={githubLogo} />GitHub
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default Contact;