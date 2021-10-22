import React from 'react';

import { Container, Row, Col, Image, ListGroup, Form, Button } from 'react-bootstrap';
import linkedInLogo from '../images/linkedInLogo.png'
import githubLogo from '../images/githubLogo.png'

// Navbar and "Brand"
function Contact() {
    return (
        <Container className="contact">
            <h1 className="mt-3">Contact Me</h1>
            <p className="lead">You can use this form to send me a message</p>

                <Row className="justify-content-center">
                        <Form className="text-center" style={{ width: '50%' }}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                </Row>

            <p className="lead mt-5">You can also check out my social media accounts using these links</p>
            <ListGroup className="w-50 mx-auto">
                <ListGroup.Item action href="https://www.linkedin.com/in/elbin-cenisev-7a31568a/" className="mx-auto listItem">
                    <Image width="40px" height="40px" src={linkedInLogo} /> LinkedIn
                </ListGroup.Item>
                <ListGroup.Item action href="https://github.com/elbin-cenisev" className="mx-auto listItem">
                    <Image width="40px" height="40px" src={githubLogo} />GitHub
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default Contact;