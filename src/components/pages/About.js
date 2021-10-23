import React from 'react';

import { Container } from 'react-bootstrap';

// Navbar and "Brand"
function About() {
    return (
        <Container className="aboutMe content">
            <h1 className="mt-5">About Me </h1>
            <p className="lead aboutText">
                I was born and raised in Germany but
                eventually moved to the United States when I was 16.

                I earned a bachelor's degree
                in Information Technology and decided
                to get a job as a Technical Writer for three years as I was unable to get hired as a developer.

                A few years later I decided to join a fullstack web
                development bootcamp and to start a career in web development.</p>
        </Container>

    );
}

export default About;