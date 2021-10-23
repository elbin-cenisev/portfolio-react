import React from 'react';
var validator = require('validator');
import { Container, Row, Form, Button } from 'react-bootstrap';

// Navbar and "Brand"
function Contact() {
    return (
        <Container className="contact">
            <h1 className="mt-3">Contact Me</h1>
            <p className="lead">You can use this form to send me a message</p>

                <Row className="justify-content-center">
                        <Form className="text-center" style={{ width: '50%' }}>

                        <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" type="text" 
                                style={{ height: '100px' }}placeholder="Enter your message" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                </Row>
        </Container>
    );
}

export default Contact;