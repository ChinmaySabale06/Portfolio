import React from 'react'
import { RevealOnScroll } from '../RevealOnScroll'

const Projects = () => {
  return (
    <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
        <div className='min-w-5xl mx-auto px-4'>

          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
            Featured Projects
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

            <div className='p-6 rounded-xl border max-w-md border-white/10 hover:-translate-y-1 hover:border-blue-500/70'>
              <h3 className='text-xl font-bold mb-2'>SAAS Application</h3>
              <p className='text-gray-400'>AI Mealplan Generator : Sofware as a Service (SAAS) Web Application.</p>
              <p className='text-teal-500 mb-4'>Next.js, Clerk, NeonDB (PostgreSQL), Stripe</p>
              <div className='flex items-center justify-between'> <a href="#" className='text-blue-500 hover:text-blue-400 transition-colors'> View Project</a> </div>
            </div>

            <div className='p-6 rounded-xl border max-w-md border-white/10 hover:-translate-y-1 hover:border-blue-500/70'>
              <h3 className='text-xl font-bold mb-2'>Blood Stream</h3>
              <p className='text-gray-400'>Blood Bank & Blood Donation Website.</p>
              <p className='text-teal-500 mb-4'>React.js, Express, MongoDB, Clerk</p>
              <div className='flex items-center justify-between'> <a href="#" className='text-blue-500 hover:text-blue-400 transition-colors'> View Project</a> </div>
            </div>

            <div className='p-6 rounded-xl border max-w-md border-white/10 hover:-translate-y-1 hover:border-blue-500/70'>
              <h3 className='text-xl font-bold mb-2'>Platefull</h3>
              <p className='text-gray-400'>Local Food Donation Website</p>
              <p className='text-teal-500 mb-4'>React.js, Express, MongoDB</p>
              <div className='flex items-center justify-between'> <a href="#" className='text-blue-500 hover:text-blue-400 transition-colors'> View Project</a> </div>
            </div>

            <div className='p-6 rounded-xl border max-w-md border-white/10 hover:-translate-y-1 hover:border-blue-500/70'>
              <h3 className='text-xl font-bold mb-2'>Project name</h3>
              <p className='text-gray-400'>Description</p>
              <p className='text-teal-500 mb-4'>Technologies</p>
              <div className='flex items-center justify-between'> <a href="#" className='text-blue-500 hover:text-blue-400 transition-colors'> View Project</a> </div>
            </div>

          </div>

        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Projects
