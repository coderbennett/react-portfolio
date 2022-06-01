import React from 'react';

function Navigation() {
    return (
        <div className="navbar bg-base-100 fixed top-0 w-100 z-50">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">joey's react portfolio</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                <li><a>About Me</a></li>
                <li><a>Portfolio</a></li>
                <li><a>Contact</a></li>
                <li><a>Resume</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;