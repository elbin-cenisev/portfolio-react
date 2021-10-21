import React from 'react';

import { Image, Button, Card, CardGroup, Container } from 'react-bootstrap';
import techBlog from '../images/techBlog.png';
import socialGameLibrary from '../images/socialGameLibrary.png';
import workoutTracker from '../images/workoutTracker.png';
import githubLogo from '../images/githubLogo.png';

// Navbar and "Brand"
function Projects() {
    return (
        <Container className="projects">
            <h1>Projects</h1>
            <p className="lead">Here is a selection of some of the projects I have worked on during the fullstack coding bootcamp. You can check out all of my work on GitHub.</p>
            <CardGroup className="h-100 my-3">
                <Card border="dark" className="mx-sm-3 my-sm-3 bg-light" style={{minWidth: '18rem'}}>
                    <Card.Img className="cardImg" variant="top" src={workoutTracker} />
                    <Card.Body className="cardText">
                        <Card.Title className="mt-3">Workout Tracker</Card.Title>
                        <Card.Text>
                            Assignment 18 of the Fullstack Bootcamp. I worked on hooking up the front-end
                            to the mongodb using mongoose, and then deployed it on heroku using mongodbAtlas.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="cardFooter">
                        <Button className="mx-1" variant="outline-primary" href="https://github.com/elbin-cenisev/Workout-Tracker">Github Repository</Button>
                        <Button className="mx-1" variant="outline-primary" href="https://pacific-savannah-67059.herokuapp.com/?id=615fbf9cbdd04c00164ddfc7">Deployed App</Button>
                    </Card.Footer>
                </Card>

                <Card border="dark" className="mx-sm-3 my-sm-3 bg-light" style={{minWidth: '18rem'}}>
                    <Card.Img className="cardImg" variant="top" src={techBlog} />
                    <Card.Body className="cardText">
                        <Card.Title className="mt-3" >Tech Blog</Card.Title>
                        <Card.Text>
                            Assignment 14 of the Fullstack Bootcamp. A web app that allows users to communicate
                            with one another by creating, editing and deleting posts and comments on existing posts.
                            It uses an account system, which is handled using MySQL. This app was done from scratch.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="cardFooter">
                        <Button className="mx-1" variant="outline-primary" href="https://github.com/elbin-cenisev/tech-blog">Github Repository</Button>
                        <Button className="mx-1" variant="outline-primary" href="https://sleepy-river-89696.herokuapp.com/">Deployed App</Button>
                    </Card.Footer>
                </Card>

                <Card border="dark" className="mx-sm-3 my-sm-3 bg-light" style={{minWidth: '18rem'}}>
                    <Card.Img className="cardImg" variant="top" src={socialGameLibrary} />
                    <Card.Body className="cardText">
                        <Card.Title className="mt-3" >Social Game Library</Card.Title>
                        <Card.Text>
                            Project 2 of the Fullstack Bootcamp.I worked together with two other classmates on this
                            project. The idea behind the Social Game Library app is that it allows registered users to
                            track all the games they own acro   ss all different platforms. More importantly, you can add other
                            users as friends and see all the games in their library as well. There is also feed on the homepage
                            which summarizes all recent friend activity.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="cardFooter">
                        <Button className="mx-1" variant="outline-primary" href="https://github.com/Gaitherdb/Social-Game-Library">Github Repository</Button>
                        <Button className="mx-1" variant="outline-primary" href="https://secret-beach-64321.herokuapp.com/">Deployed App</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>

            <Button className="mb-5" variant="light" href="https://github.com/elbin-cenisev"><Image width="40px" height="40px" src={githubLogo} /> See More</Button>
        </Container>
    );
}

export default Projects;