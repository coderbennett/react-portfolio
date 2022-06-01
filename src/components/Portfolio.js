import React from 'react';
import Project from './Project';

function Portfolio() {
    return (
    <div className="flex flex-col justify-center">
        <h2 className="ml-16 my-6 text-3xl font-bold text-primary">Projects</h2>
        <Project></Project>
    </div>
    );
}

export default Portfolio;