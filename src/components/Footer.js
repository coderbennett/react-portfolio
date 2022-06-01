import React from 'react';

function Footer() {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col">
                <p>Copyright © 2022 - Joey Bennett All rights reserved</p>
                {/* need to add icon links to github, linkedin and twitter */}
            </div> 
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            </div>
        </footer>
    );
}

export default Footer;