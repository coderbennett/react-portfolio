import React, { useState } from 'react';
import Project from './Project';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

function Content() {
    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio'){
            return <Project />;
        }
        if (currentPage === 'Contact'){
            return <Contact />;
        }
        return <About />;
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </>
    );
}

export default Content;