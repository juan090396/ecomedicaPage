import React from 'react'

const doctorsData=[]

const doctors = () => {
  return (
    <section 
    id="doctores"
    className='py-12 md:py-24 bg-gray-50 flex flex-col items-center justify-center' >

      <div className='container px-4 md:px-6' >
        
        {/* subtitulo*/}
        <div className='flex flex-col items-center justify-center space-y-4 text-center' >
          <div className='space-y-2' >
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl' >Nuestros Especialistas</h2>
            <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400' >
             Contamos con un equipo de profesionales altamente calificados para brindarle la mejor atención.
            </p>
          </div>

          {/* Tarjetas */}
          <div className='grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center' >
            {doctorsData.map((doctor, index) => (
              <div 
              key={index}
              className='bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 w-64' 
              >
                <img
                  src=""
                  alt={doctor.name}
                  className='w-full h-56 object-cover rounded-t-xl'
                />

                <div className='p-5 text-left' >
                  
                  <h3 className='text-lg font-semibold text-gray-900'>
                    {doctor.name}
                  </h3>

                  <p className='text-blue-600 font-medium text-sm ' >
                    {doctor.specialty}
                  </p>

                  <p className='text-gray-600 text-sm mt-2' >
                    {doctor.description}
                  </p>

                  <p className='text-gray-400 text-xs mt-3' >
                    Disponibilidad: {doctor.available}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
    
  )
}

export default doctors
