import React from 'react'
import { RevealOnScroll } from '../RevealOnScroll'

const About = () => {
  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>

            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'> About Me </h2>

            <div className='glass rounded-xl p-8 border-white/20 border hover:border-blue-500/50 hover:-translate-y-1 transition-all'>
                <p className='text-gray-300 mb-6 text-center'>
                    Passionate developer with expertise in building scalable web applications and creating innovative solutions. 
                </p>

                <div className='flex gap-6'>
                    <div className='w-1/2 rounded-xl border border-white/40 p-6 hover:border-cyan-600/70 hover:-translate-y-1 transition-all'>
                        {/* <h3 className='text-xl font-bold mb-4'> Frontend</h3> */}
                        {/* <div className='flex flex-wrap gap-2'></div> */}
                        <h3 className='text-xl font-bold mb-4'> Education</h3>
                        <ul className='list-disc list-inside text-gray-300 space-y-2'>
                            <li>
                                <strong> Pursuing B.E. in Computer </strong> - Pune Institute Of Computer Technology (2023-2027)
                            </li>
                            <li>
                                <strong> Relevant coursework:</strong> Web Development, Data Structures...
                            </li>
                        </ul>
                    </div>

                    <div className='w-1/2 rounded-xl border border-white/40 p-6 hover:border-cyan-600/70 hover:-translate-y-1 transition-all'>
                        <h3 className='text-xl font-bold mb-4'> Work Experience</h3>
                    </div>
                </div>
            </div>

        </div>
      </RevealOnScroll>
    </section>
  )
}

export default About
