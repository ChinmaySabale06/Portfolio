import React from 'react';
import Home from './Sections/Home';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';


const HomePage = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className="relative min-h-screen overflow-hidden w-full">
            <div className="relative z-20 w-full">
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Home />
            </div>
        </div>
    );
};

export default HomePage;
