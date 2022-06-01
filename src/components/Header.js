import React from 'react';
import Navigation from './Navigation';
import background from '../assets/hero_img.jpg'

const styles = {
    hero: {
        backgroundImage: `url(${background})`
    }
}

function Header(props) {
    return (
    <header>
        <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>
        <div id="hero" className="hero min-h-screen" style={styles.hero}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Joey Bennett</h1>
                    <p className="mb-5">Hi there! Thanks for visiting my React portfolio! Visit my about and portfolio page to learn more about my work!</p>
                </div>
            </div>
        </div>
    </header>
    );
}

export default Header;