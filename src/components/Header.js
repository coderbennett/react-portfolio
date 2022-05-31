import React from 'react';
import Navigation from './Navigation';
import background from '../assets/hero_img.jpg'

const styles = {
    hero: {
        backgroundImage: `url(${background})`
    }
}

function Header() {
    return (
    <header>
        <Navigation />
        <div className={`hero min-h-screen`} style={styles.hero}>
            <div className={`hero-overlay bg-opacity-60`}></div>
                <div className={`hero-content text-center text-neutral-content`}>
                    <div className={`max-w-md`}>
                    <h1 className={`mb-5 text-5xl font-bold`}>Hello there</h1>
                    <p className={`mb-5`}>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className={`btn btn-primary`}>Get Started</button>
                </div>
            </div>
        </div>
    </header>
    );
}

export default Header;