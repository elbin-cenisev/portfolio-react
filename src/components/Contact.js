import React, { useState } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';

var validator = require('validator');

// Contact form
function Contact() {
    // State variables for each field in the form
    const [email, setEmail] = useState('');

    function checkEmail(e) {
        if (!(validator.isEmail(email))) {
            alert("It is not an email");
        }
    }

    function setInput(e) {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        }
    }

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
                        <Form.Control
                            value={email}
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            onBlur={checkEmail}
                            onChange={setInput}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" type="text"
                            style={{ height: '100px' }} placeholder="Enter your message" />
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