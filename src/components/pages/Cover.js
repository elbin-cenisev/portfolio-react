import React from 'react';
import { Image } from 'react-bootstrap';
import me from '../../images/me-bw.png'

// Navbar and "Brand"
function Cover() {
    return (
        <main className="px-3 content">
            <Image src={me} />
            <h1 className="my-3">Hello there!</h1>
            <p className="lead">My name is Elbin and I am an up-and-coming (hopefully) web developer!</p>
            <p className="lead">This portfolio page contains some examples of my work, as well as my contact information.</p>
        </main>
    );
}

export default Cover;