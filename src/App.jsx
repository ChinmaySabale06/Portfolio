import React, { useState } from 'react'
import LoadingScreen from './Components/LoadingScreen'
import './index.css'
import About from './Components/Sections/About';
import Projects from './Components/Sections/Projects';
import Contact from './Components/Sections/Contact';
import SplashCursor from '../ReactBits/SplashCursor/SplashCursor'
import HomePage from './Components/HomePage';

function App() {

  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100 relative`}>
        <div className="relative z-10">
          <HomePage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <About />
          <Projects />
          <Contact />
        </div>
        <SplashCursor />
      </div>
    </>
  );
}

export default App