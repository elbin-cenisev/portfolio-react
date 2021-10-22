import React from 'react';

import { Image, Button, Card, Row, Col, Container } from 'react-bootstrap';
import techBlog from '../images/techBlog.png';
import socialGameLibrary from '../images/socialGameLibrary.png';
import workoutTracker from '../images/workoutTracker.png';
import employeeTracker from '../images/employeeTracker.PNG';
import musicMatcher from '../images/musicMatcher.png';
import computerGameQuiz from '../images/computerGameQuiz.PNG';
import githubLogo from '../images/githubLogo.png';

// Navbar and "Brand"
function Projects() {
    return (
        <Container className="projects">
            <h1>Projects</h1>
            <p className="lead">Here is a selection of some of the projects I have worked on during the fullstack coding bootcamp. You can check out all of my work on GitHub.</p>
            <Row className="h-100 my-3 g-3 row-cols-lg-3 row-cols-md-2 row-cols-1">
                <Col>
                    <Card border="dark" className="mt-3 mx-sm-3 my-sm-3 bg-light h-100" style={{ minWidth: '18rem' }}>
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
                </Col>

                <Col>
                    <Card border="dark" className="mt-3 mx-sm-3 my-sm-3 bg-light h-100" style={{ minWidth: '18rem' }}>
                        <Card.Img className="cardImg" variant="top" src={techBlog} />
                        <Card.Body className="cardText">
                            <Card.Title className="mt-3" >Tech Blog</Card.Title>
                            <Card.Text>
                                Assignment 14 of the Fullstack Bootcamp. A web app that allows users to communicate
                                with one another by creating, editing and deleting posts and comments on existing posts.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="cardFooter">
                            <Button className="mx-1" variant="outline-primary" href="https://github.com/elbin-cenisev/tech-blog">Github Repository</Button>
                            <Button className="mx-1" variant="outline-primary" href="https://sleepy-river-89696.herokuapp.com/">Deployed App</Button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card border="dark" className="mt-3 mx-sm-3 my-sm-3 bg-light h-100" style={{ minWidth: '18rem' }}>
                        <Card.Img className="cardImg" variant="top" src={socialGameLibrary} />
                        <Card.Body className="cardText">
                            <Card.Title className="mt-3" >Social Game Library</Card.Title>
                            <Card.Text>
                                Project 2 of the Fullstack Bootcamp.I worked together with two other classmates on this
                                project. Allows registered users to track all their and their friends' games.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="cardFooter">
                            <Button className="mx-1" variant="outline-primary" href="https://github.com/Gaitherdb/Social-Game-Library">Github Repository</Button>
                            <Button className="mx-1" variant="outline-primary" href="https://secret-beach-64321.herokuapp.com/">Deployed App</Button>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col>
                    <Card border="dark" className="mt-3 mx-sm-3 my-sm-3 bg-light h-100" style={{ minWidth: '18rem' }}>
                        <Card.Img className="cardImg" variant="top" src={computerGameQuiz} />
                        <Card.Body className="cardText">
                            <Card.Title className="mt-3">Computer Game Quiz</Card.Title>
                            <Card.Text>
                                Assignment 4 of the Fullstack Bootcamp. Just a fun little quiz about computer games
                                I made near the beginning of the course.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="cardFooter">
                            <Button className="mx-1" variant="outline-primary" href="https://github.com/elbin-cenisev/computer-game-quiz">Github Repository</Button>
                            <Button className="mx-1" variant="outline-primary" href="https://elbin-cenisev.github.io/computer-game-quiz/">Deployed App</Button>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col>
                    <Card border="dark" className="mt-3 mx-sm-3 my-sm-3 bg-light h-100" style={{ minWidth: '18rem' }}>
                        <Card.Img className="cardImg" variant="top" src={employeeTracker} />
                        <Card.Body className="cardText">
                            <Card.Title className="mt-3">Employee Tracker</Card.Title>
                            <Card.Text>
                                Assignment 12 of the Fullstack Bootcamp. It is a CLI app that allows users to manage the employees
                                inside their organization. You can add, delete, and assign employees, departments and managers.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="cardFooter">
                            <Button className="mx-1" variant="outline-primary" href="https://github.com/elbin-cenisev/employee-tracker">Github Repository</Button>
                            <Button className="mx-1" variant="outline-primary" href="https://drive.google.com/file/d/1Z4_qNFUAzl48Z93MBZlCdh3VlsNwSAr5/view">See Video</Button>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col>
                    <Card border="dark" className="mt-3 mx-sm-3 my-sm-3 bg-light h-100" style={{ minWidth: '18rem' }}>
                        <Card.Img className="cardImg" variant="top" src={musicMatcher} />
                        <Card.Body className="cardText">
                            <Card.Title className="mt-3">Music Matcher</Card.Title>
                            <Card.Text>
                                Project 1 of the Fullstack Bootcamp. We hooked up a third-party API called MusixMatch to allow users to
                                look for music they might like based on artists/songs/albums they already enjoy.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="cardFooter">
                            <Button className="mx-1" variant="outline-primary" href="https://github.com/elbin-cenisev/musicMatcher">Github Repository</Button>
                            <Button className="mx-1" variant="outline-primary" href="https://timdavidson2.github.io/musicMatcher/">Deployed App</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

            <Button className="my-5" variant="light" href="https://github.com/elbin-cenisev"><Image width="40px" height="40px" src={githubLogo} /> See More</Button>
        </Container>
    );
}

export default Projects;