import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header'; // Contains navbar
import Cover from './Cover'; // Contains first screen on load
import About from './About'; // Contains About Me page
import Projects from './Projects'; // Contains the top three projects I want to show off

function Portfolio() {
    return (
        <Router>
            <div className="my-portfolio">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Cover />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default Portfolio;