import React, { useEffect } from 'react'
import SplitText from './TextAnimations/SplitText/SplitText';

const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen])

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>

          <a href="#home" className="font-mono text-2xl font-bold text-white flex items-center gap-1">
            Chinmay.
            <SplitText
              text="Sabale"
              className="text-blue-500 font-semibold"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </a>


          <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' onClick={() => setMenuOpen((prev) => !prev)}>&#9776;</div>

          <div className='hidden md:flex items-center space-x-8'>
            <a href="#home" className='text-gray-300 hover:text-blue-500 transition-colors'> Home </a>
            <a href="#about" className='text-gray-300 hover:text-blue-500 transition-colors'> About </a>
            <a href="#projects" className='text-gray-300 hover:text-blue-500 transition-colors'> Projects </a>
            <a href="#contact" className='text-gray-300 hover:text-blue-500 transition-colors'> Contact </a>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
