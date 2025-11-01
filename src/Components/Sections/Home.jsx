import React from 'react'
import { RevealOnScroll } from '../RevealOnScroll'
import TrueFocus from '../TextAnimations/TrueFocus/TrueFocus'
import { Vortex } from '../ui/Vortex';

const Home = () => {
  return (
    <Vortex>
      <section id='home' className='min-h-screen relative overflow-hidden'>
        <div className='absolute inset-0 z-10 bg-transparent bg-opacity-20 flex items-center justify-center'>
          <RevealOnScroll>
            <div className='text-center px-4 py-4 bg-black/50 rounded-4xl'>
              <h1 className='text-5xl md:text-7xl font-bold mb-6 loading-right inline-block'>
                <TrueFocus
                  sentence="Chinmay Sabale"
                  className='text-white'
                  manualMode={false}
                  blurAmount={5}
                  borderColor="blue"
                  animationDuration={1.5}
                  pauseBetweenAnimations={1}
                />
              </h1>
              <h1 className='text-4xl font-semibold' text='Highlight Text'> </h1>
              <p className='text-gray-100 text-lg mb-8 max-w-lg mx-auto drop-shadow-lg'>
                I'm a full-stack developer who loves crafting clean, scalable web applications. My goal is to build solutions that offer both exceptional performance and a delightful user experience.
              </p>
              <div className='flex justify-center space-x-4'>
                <a
                  href="#projects"
                  className='bg-blue-600 text-white py-3 px-6 rounded font-medium transition-all duration-200 relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-700 backdrop-blur-sm'
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className='border border-blue-500/70 text-blue-400 py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/20 backdrop-blur-sm'
                >
                  Contact Me
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </Vortex>
  )
}

export default Home