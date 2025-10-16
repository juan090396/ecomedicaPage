import React from 'react'

const aboutUs = () => {
  return (
   <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-blue-50" id='aboutUs'>
    
   <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">

          
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Su salud es nuestra prioridad
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Ofrecemos atención médica de calidad con profesionales altamente calificados.
                Agende su cita hoy mismo.
              </p>
            </div>

            {/* botones*/}
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href="#citas"
                className="px-6 py-3 text-white bg-blue-600 rounded-lg text-center text-lg font-medium hover:bg-blue-700 transition"
              >
                Agendar Cita
              </a>
              <a
                href="#servicios"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg text-center text-lg font-medium hover:bg-blue-100 transition"
              >
                Nuestros Servicios
              </a>
            </div>

            {/* agendar*/}
            <div className="flex items-center space-x-4 text-sm text-gray-700">
              <div className="flex items-center space-x-1">
                <span className="font-medium">Horario:</span>
                <span>Lun-Vie 8am-8pm, Sáb 9am-2pm</span>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              <img
                src="https://cdn.pixabay.com/photo/2017/02/01/13/53/analysis-2030266_1280.jpg" 
                alt="Equipo médico"
                className="object-cover rounded-full w-full h-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

   </section>
  )
}

export default aboutUs

