import React from 'react';

function Navigation() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">joey's react portfolio</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                <li><a>About Me</a></li>
                <li><a>Projects</a></li>
                <li><a>Resume</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;