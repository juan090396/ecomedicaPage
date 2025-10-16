import React from 'react'
import medicina from '../assets/medicina.png'
import ecografia from '../assets/ecografia.png'
import farmacia from '../assets/farmacia.png'
import pediatria from '../assets/pediatria.png'
import ginecologia from '../assets/ginecologia.png'
import cardiologia from '../assets/cardiologia.png'

const servicesData = [
  {
    title: 'Medicina General',
    description: 'Atención integral para todas las edades, diagnóstico y tratamiento de enfermedades.',
    icon: medicina,
  }, 
  {
    title: 'Ecografía',
    description: 'Servicios de ecografía para monitoreo del desarrollo fetal y diagnostico de condiciones médicas.',
    icon: ecografia,  
  },
  {
    title: 'Farmacia',
    description: 'Suministro de medicamentos y asesoramiento farmacéutico para el cuidado de la salud.',
    icon: farmacia,
  },
  {
    title: 'Pediatría',
    description: 'Cuidado especializado para niños y adolescentes.',
    icon: pediatria,
  },
  {
    title: 'Ginecología',
    description: 'Atención a la salud femenina, incluyendo exámenes rutinarios y cuidado prenatal.',
    icon: ginecologia,
  },
  {
    title: 'Cardiología',
    description: 'Diagnóstico y tratamiento de enfermedades del corazón y del sistema circulatorio.',
    icon: cardiologia,
  }
]


const services = () => {
  return (
    <section className='py-12 p-10 ml-16 md:py-24 lg:py-32 bg-white' id='servicios' >
     
     {/* subtitulo*/}
      <div className='container px-4 md:px-6' >
        
        <div className='flex flex-col items-center justify-center space-y-4 text-center' >
          <div className='space-y-2' >
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl' >Nuestros Servicios</h2>
            <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400' >
              Ofrecemos una amplia gama de servicios médicos para cuidar de su salud y la de su familia.
            </p>
          </div>
        </div>
        
        {/* Tarjetas */}
        <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12' >
          {servicesData.map((service,index) => (
            <div className='border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 bg-white'
              key={index}>

                <div className='flex flex-col items-start space-y-3' >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className='h-12 w-12 object-contain'/>

                  <h3 className='text-lg font-semibold text-gray-800 ' >
                    {service.title}
                  </h3>

                  <p className='text-gray-500 text-sm' >
                    {service.description}
                  </p>

                </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default services
