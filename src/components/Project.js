import React from 'react';

let projectArray = [
    {
        title: 'BookenD',
        description: 'Bookend is a full stack application that allows readers to create an account and join a community of others in finding new books to read, viewing public book clubs, or even creating their own clubs and inviting their friends and family.',
        repository: 'https://github.com/coderbennett/bookend',
        deployed: 'https://glacial-plateau-74113.herokuapp.com/',
        media: 'bookend.gif'
    },
    {
        title: "Pethub",
        repository: "https://github.com/coderbennett/pethub",
        deployed: "https://cmwschroeder.github.io/pethub/",
        description: "Pethub is a web app for anyone interested in responsibly adopting a pet. On our webapp you can find pets in all areas to adopt. Even if you do not want to make the committment yet in adopting an animal, but still want to contribute to animals in need, we have a charity page that brings you to charities in all locations. If you are unsure of where to donate, there is a recommended list of charities available and much more.",
        media: "pethub.gif"
    },
    {
        title: "Joey's Tech Blog",
        repository: "https://github.com/coderbennett/tech-blog",
        deployed: "https://joeys-tech-blog.herokuapp.com/",
        description: "This is a CMS-style blog where developers can publish their blog posts and comment on other developers' posts as well. This site uses Handlebars.js as a templating language.",
        media: "techblog.gif"
    },
    {
        title: "Weather Dashboard",
        repository: "https://github.com/coderbennett/weather-dashboard",
        deployed: "https://coderbennett.github.io/weather-dashboard/",
        description: "The Weather Dashboard is a simple web app which fetchs data from the Open Weather API and presents the user with today's weather forecast plus the next 5 following days.",
        media: "weatherdashboard.gif"
    },
    {
        title: "JavaScript Fundamentals Web Quiz",
        repository: "https://github.com/coderbennett/quiz-javascript-fundamentals",
        deployed: "https://coderbennett.github.io/quiz-javascript-fundamentals/",
        description: "A 10 question JavaScript quiz on some fundamental methods, definitions and syntax.",
        media: "jsquiz.gif"
    },
    {
        title: "Just Another Text Editor",
        repository: "https://github.com/coderbennett/text-editor",
        deployed: "https://joeys-text-editor.herokuapp.com/",
        description: "This is a single-page text editor which stores data to an IndexedDB database. This application features multiple data persistence techniques in case one of the options aren't supported by the browser. This application also functions offline.",
        media: "jate.gif"
    }
];

function Project() {
    return projectArray.map((project, index) => (
        <div key={index} className="card w-2/4 h-fit bg-base-100 shadow-xl mx-auto my-6">
            <figure><img src={require(`/src/assets/${project.media}`)} /></figure>
            <div className="card-body">
                <h2 className="card-title">{ project.title }</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                    <a href={project.repository} className="btn btn-primary" target="_blank">Visit Repo</a>
                    <a href={project.deployed} className="btn btn-primary" target="_blank">Visit Deployed App</a>
                </div>
            </div>
        </div>
    ));
}

export default Project;