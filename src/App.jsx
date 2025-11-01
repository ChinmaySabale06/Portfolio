import { useState, useEffect, lazy, Suspense } from 'react'
import { createPortal } from 'react-dom'
import LoadingScreen from './Components/LoadingScreen'
import './index.css'
import HomePage from './Components/HomePage';

// Lazy load heavy components for better initial load
const About = lazy(() => import('./Components/Sections/About'));
const Projects = lazy(() => import('./Components/Sections/Projects'));
const Contact = lazy(() => import('./Components/Sections/Contact'));
const SplashCursor = lazy(() => import('../ReactBits/SplashCursor/SplashCursor'));

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

      {/* Render SplashCursor via Portal at document body level - highest z-index */}
      {isLoaded && createPortal(
        <Suspense fallback={null}>
          <SplashCursor
            SIM_RESOLUTION={64}
            DYE_RESOLUTION={512}
            DENSITY_DISSIPATION={3}
            VELOCITY_DISSIPATION={2}
            PRESSURE={0.8}
            PRESSURE_ITERATIONS={20}
            CURL={3}
            SPLAT_RADIUS={0.25}
            SPLAT_FORCE={6000}
            COLOR_UPDATE_SPEED={10}
            SHADING={true}
            TRANSPARENT={true}
          />
        </Suspense>,
        document.body
      )}

      <div
        className={`min-h-screen bg-black text-gray-100 relative transition-opacity duration-500 ease-out overflow-x-hidden w-full ${showContent ? "opacity-100" : "opacity-0"
          }`}
        style={{ 
          willChange: showContent ? 'auto' : 'opacity',
          transform: 'translateZ(0)'
        }}
      >
        {isLoaded && (
          <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <HomePage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <About />
            <Projects />
            <Contact />
          </Suspense>
        )}
      </div>
    </>
  );
}

export default App