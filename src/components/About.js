import React from 'react';

function About() {
    return (
        <section>
          <h2 id="aboutHeader" className="ml-16 my-6 text-3xl font-bold text-primary">About</h2>
    
          <div className="flex flex-wrap justify-around my-12"> 

            <div className="card card-compact w-96 bg-neutral shadow-xl">
                <figure><img id="joeyPhoto" src={require(`../assets/joey.jpg`)} alt="Joey and his dog Flora" /></figure>
                <div className="card-body">
                <h2 className="card-title text-secondary">Joey Bennett</h2>
                <p className="text-secondary">A photo of me with my dog Flora, hiking near Mount Tamalpais.</p>
                <div className="card-actions justify-around mt-6">
                    <a href="https://github.com/coderbennett" target="_blank" rel="noreferrer"  className="btn btn-primary">View GitHub</a>
                    <a  href="assets/joeybennett_resume.pdf" target="_blank" className="btn btn-primary">View Resume</a>
                </div>
                </div>
            </div>
    
            <div className="card w-96 bg-primary text-primary-content my-3 mx-3  shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What do I do?</h2>
                    <p>I've been developing web apps for over 8 months, using technologies like MySQL, jQuery, Node.js, Tailwind, Moment.js, Handlebars along with other third party APIs. I've also spent a few years learning to develop games in Unity with C#. Below this section you can find projects I have worked on recently.</p>
                    <p>You can always reach me at <a className="hover:text-secondary" href="mailto:coderbennett1@gmail.com">coderbennett1@gmail.com</a></p>
                    <div className="card-actions justify-around mt-6">
                    <a href="https://www.linkedin.com/in/joey-bennett-jkb/" rel="noreferrer"  target="_blank" className="btn btn-neutral">View LinkedIn</a>
                    <a href="#projects" className="btn btn-neutral">View Projects</a>
                  </div>
                </div>
              </div>
            </div>   
    </section>
    );
}

export default About;