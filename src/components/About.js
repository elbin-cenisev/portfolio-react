import React from 'react';

import { Container } from 'react-bootstrap';

// Navbar and "Brand"
function About() {
    return (
        <Container className="aboutMe">
            <h1>About Me</h1>
            <p className="lead">My name is Elbin Cenisev. I was born and raised in Germany but 
            eventually moved to the United States when I was 16. 
            
            I earned a bachelor's degree
            in Information Technology but quickly realized that IT work was not for me. I decided
            to work towards a technical writing certificate and was able to eventually get employed
            as a Technical Writer for three years. 
            
            I have always wanted a career in any sort of
            development field and was fortunately given the opportunity to join a fullstack web 
            development bootcamp.</p>
        </Container>

    );
}

export default About;