import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header'; // Contains navbar
import Cover from './Cover'; // Contains first screen on load
import About from './About'; // Contains About Me page
import Projects from './Projects'; // Contains the top three projects I want to show off
import Contact from './Contact'; // Contains the top three projects I want to show off
import Footer from './Footer'; // Contains Footer with links

function Portfolio() {
    return (
        <Router>
            <div class="content p-3">
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
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
                </div>
                <div className="footer">
                    <Footer />
                </div>
        </Router>
    );
}

export default Portfolio;