import { useState, useEffect, lazy, Suspense } from 'react'
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
            {/* SplashCursor behind all content */}
            <SplashCursor
              SIM_RESOLUTION={80}
              DYE_RESOLUTION={768}
              DENSITY_DISSIPATION={5.5}
              VELOCITY_DISSIPATION={3.5}
              PRESSURE={0.08}
              PRESSURE_ITERATIONS={18}
              CURL={1.8}
              SPLAT_RADIUS={0.14}
              SPLAT_FORCE={3500}
              COLOR_UPDATE_SPEED={8}
            />
            {/* Content sections with proper z-index */}
            <div className="relative z-10">
              <HomePage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <About />
              <Projects />
              <Contact />
            </div>
          </Suspense>
        )}
      </div>
    </>
  );
}

export default App