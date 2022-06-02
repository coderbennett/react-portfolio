import React from 'react';

function Footer() {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col">
                <p>Copyright © 2022 - Joey Bennett All rights reserved </p>
            </div> 
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://www.linkedin.com/in/joey-bennett-jkb/" rel="noreferrer"  target="_blank">LinkedIn</a> 
                <a href="https://github.com/coderbennett" rel="noreferrer"  target="_blank">Github</a> 
                <a href="https://twitter.com/joeykalanchoe" rel="noreferrer" target="_blank">Twitter</a>
            </div>
        </footer>
    );
}

export default Footer;