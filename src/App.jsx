import { useState, useEffect } from 'react'
import LoadingScreen from './Components/LoadingScreen'
import './index.css'
import About from './Components/Sections/About';
import Projects from './Components/Sections/Projects';
import Contact from './Components/Sections/Contact';
import SplashCursor from '../ReactBits/SplashCursor/SplashCursor'
import HomePage from './Components/HomePage';

function App() {

  const [isLoaded, setIsLoaded] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (isLoaded) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => setShowContent(true), 100)
      return () => clearTimeout(timer)
    }
  }, [isLoaded])

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen bg-black text-gray-100 relative hardware-accelerated transition-opacity duration-500 ease-out overflow-x-hidden w-full ${showContent ? "opacity-100" : "opacity-0"
          }`}
        style={{ willChange: showContent ? 'auto' : 'opacity' }}
      >
        {isLoaded && (
          <>
            <SplashCursor
              SIM_RESOLUTION={96}
              DYE_RESOLUTION={1024}
              DENSITY_DISSIPATION={4}
              VELOCITY_DISSIPATION={2.5}
              PRESSURE={0.08}
              CURL={2.5}
              SPLAT_RADIUS={0.18}
            />
            <div className="relative z-10">
              <HomePage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <About />
              <Projects />
              <Contact />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App