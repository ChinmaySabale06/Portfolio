const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div 
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.95)] backdrop-blur-md z-50 flex flex-col items-center justify-center transition-all duration-300 ease-out ${
        menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'
      }`}
      style={{ 
        willChange: menuOpen ? 'auto' : 'opacity, height',
        transform: 'translateZ(0)'
      }}
    >
      
        <button 
          onClick={() => setMenuOpen(false)} 
          className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer hover:scale-110 transition-transform duration-200' 
          aria-label='Close Menu'
        >
          &times;
        </button>

        <a href="#home" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transition-all duration-300 ease-out ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}> Home </a>
        <a href="#about" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transition-all duration-300 ease-out delay-75 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}> About </a>
        <a href="#projects" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transition-all duration-300 ease-out delay-150 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}> Projects </a>
        <a href="#contact" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transition-all duration-300 ease-out delay-200 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}> Contact </a>

    </div>
  )
}

export default MobileMenu
