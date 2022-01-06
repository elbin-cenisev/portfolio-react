import React from 'react';

import { Container, ListGroup } from 'react-bootstrap';

// Navbar and "Brand"
function About() {
    return (
        <Container className="aboutMe content">
            <h1 className="mt-5">About Me </h1>
            <p className="lead aboutText">
                I was born and raised in Germany but
                eventually moved to the United States when I was 16.
                I have been using computers at an early age and was excited to surf
                the internet and discover exciting, dynamic websites
                (I especially enjoyed those that had games on them!)
                I learned basic HTML and CSS skills early on in my life and tried my hand
                at creating Flash animations and games, but it never went beyond simple websites and crude animation.
                <br /><br />

                I earned a bachelor's degree in Information Technology and decided
                to get a job as a Technical Writer for three years as I was unable to get hired as a developer
                despite writing both desktop and web applications being my favorite part of the entire program.
                <br /><br />

                A few years later I finally decided to join a fullstack web
                development bootcamp so that I could pursue my dream of having a career in any sort of programming-related
                field. While web development is a ton of fun and something I want to do for years to come, I would love to
                acquire the skills necessary to some day contribute to work on an operating system, but who knows if I'll
                ever get smart enough to do that!</p>

            <h2 className="mt-5">Skills</h2>
            <p className="lead skillsText">
                During my studies at college and the fullstack web development bootcamp, I have acquired the following skills:
            </p>
            <ListGroup className="skillsList">
                <ListGroup.Item variant="primary">Writing HTML code</ListGroup.Item>
                <ListGroup.Item variant="primary">Writing custom CSS code</ListGroup.Item>
                <ListGroup.Item variant="primary">Writing both frontend and backend JavaScript code to create dynamic web applications</ListGroup.Item>
                <ListGroup.Item variant="primary">Using existing HTML, CSS and JavaScript libraries such as Bootstrap, React and Redux </ListGroup.Item>
                <ListGroup.Item variant="primary">Using third-party APIs</ListGroup.Item>
                <ListGroup.Item variant="primary">Managing data using SQL (MySQL) and NoSQL (MongoDB)</ListGroup.Item>
                <ListGroup.Item variant="primary">Using GitHub Pages and Heroku to deploy my web applications</ListGroup.Item>
                <ListGroup.Item variant="primary">Managing and updating GitHub repositories</ListGroup.Item>
            </ListGroup>
        </Container>

    );
}

export default About;