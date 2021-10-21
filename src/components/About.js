import React from 'react';

import { Container } from 'react-bootstrap';

// Navbar and "Brand"
function About() {
    return (
        <Container className="aboutMe">
            <h1>About Me</h1>
            <p className="lead">My name is Elbin Cenisev. I was born and raised in Germany but 
            eventually moved to the United States when I was 16. </p>
            
            <p className="lead">I earned a bachelor's degree in
            in Information Technology but quickly realized that IT work was not for me. I decided
            to work towards a technical writing certificate and was able to eventually get employed
            as a Technical Writer for three years. </p>
            
            <p className="lead">I have always wanted a career in any sort of
            programming field and was fortunately given the opportunity to join a fullstack web 
            development bootcamp, and I am hoping that I can finally work in the industry. I wish
            to learn as much as I can about web development and any other form of software 
            development.</p>
        </Container>

    );
}

export default About;