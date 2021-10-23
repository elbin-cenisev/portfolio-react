import React, { useState } from 'react';
import Header from './Header'; // Contains navbar
import Cover from './pages/Cover'; // Contains first screen on load
import About from './pages/About'; // Contains About Me page
import Projects from './pages/Projects'; // Contains the top three projects I want to show off
import Contact from './pages/Contact'; // Contains the top three projects I want to show off
import Footer from './Footer'; // Contains Footer with links

function Portfolio() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Cover />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default Portfolio;