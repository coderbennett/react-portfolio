import React from 'react';
import resume from '../assets/joeybennett_resume.pdf';

function Navigation({currentPage, handlePageChange}) {
    return (
        <div className="navbar bg-base-100 fixed top-0 w-100 z-50">
            <div className="flex-1">
                <a href="#hero" className="btn btn-ghost normal-case text-xl">joey's react portfolio</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                <li><a 
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'active:bg-primary' : ''}
                >About Me</a></li>
                <li><a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'active:bg-primary' : ''}>Portfolio</a></li>
                <li><a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'active:bg-primary' : ''}>Contact</a></li>
                <li><a href={resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;