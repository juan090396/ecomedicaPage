import React from 'react'

const testimonials = () => {
  return (
    <section className=''>
      <div className='container px-4 md:px-6'>
        
        {/* Subtitulo */}
        <div className='flex flex-col items-center justify-center space-y-4 text-center' >
          <div className='space-y-2' >
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl' >Testimonios</h2>
            <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400' >
              Lo que nuestros pacientes piensan de nosotros.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default testimonials
