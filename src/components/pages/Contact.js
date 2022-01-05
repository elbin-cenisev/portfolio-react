import React from 'react';
import { Container } from 'react-bootstrap';

// Contact form
function Contact() {
    // OLD CONTACT FORM CODE 

    // // State variables for each field in the form
    // const [name, setName] = useState('');
    // const [message, setMessage] = useState('');
    // const [email, setEmail] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
    // const [show, setShow] = useState(false);

    // // Relevant elements
    // var error = document.getElementById("errorField");
    // var emailField = document.getElementById("formEmail")

    // // Validates the email
    // function checkEmail(e) {
    //     if (!(validator.isEmail(email))) {
    //         // There is only one error message, so I set it
    //         setErrorMessage("A valid email address is required");
    //         setShow(true);
    //     } else {
    //         setShow(false);
    //         error.textContent = "";
    //         emailField.style.border = "none"
    //     }
    // }

    // // This if statement just handles error message display for email field
    // if (show) {
    //     error.textContent = errorMessage
    //     error.style.color = "red"
    //     emailField.style.border = "thick solid red"
    // }

    // function setInput(e) {
    //     const { target } = e;
    //     const inputType = target.name;
    //     const inputValue = target.value;

    //     // Based on the input type, we set the state of either email, username, and password
    //     if (inputType === 'email') {
    //         setEmail(inputValue);
    //     } else if (inputType === 'name') {
    //         setName(inputValue);
    //     } else if (inputType === 'message') {
    //         setMessage(inputValue);
    //     }
    // }

    // // All this does for now is just make the fields empty
    // const handleFormSubmit = (e) => {
    //     e.preventDefault();

    //     // Make sure all the fields are valid
    //     if (!(validator.isEmail(email))) {
    //         alert("Invalid email address")
    //     }

    //     // If all is well, ... Clear the fields (because I don't know how to submit a message directly)
    //     else {
    //         setName('');
    //         setMessage('');
    //         setEmail('');
    //     }
    // };

    return (
        <Container className="contact content">
            <h1 className="mt-3">Contact Me</h1>
            <p className="lead">Listed are some ways to contact me:</p>
            <h3 className="mt-5">Phone</h3>
            <p className="fs-5">(804) 709-5953</p>
            <h3 className="mt-5">Email</h3>
            <a href="mailto:elbincenisev@outlook.com" className="fs-5">elbincenisev@outlook.com</a>

            {/* OLD CONTACT FORM CODE

                <Form className="text-center" style={{ width: '80%' }}>

                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            value={name}
                            name="name"
                            type="name"
                            onChange={setInput}
                            placeholder="Enter your name" />

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

                    <span id="errorField"></span>

                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            value={message}
                            name="message"
                            type="message"
                            placeholder="Enter your message"
                            onChange={setInput}
                            style={{height: '8rem'}}
                        />
                    </Form.Group>

                    <Button variant="primary" onClick={handleFormSubmit}>
                        Submit
                    </Button>
                </Form> */}
        </Container>
    );
}

export default Contact;