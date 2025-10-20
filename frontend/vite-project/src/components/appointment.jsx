import React from 'react'

const appointment = () => {
  return (
    <section className='py-12 p-10 ml-14 md:py-24 lg:py-32 bg-white' id='citas' >

      <div className='container px-4 md:px-6'>

        {/* subtitulo*/}
        <div className='flex flex-col items-center justify-center space-y-4 text-center' >
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl' >Agenda su Cita</h2>
            <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400' >
            Complete el formulario a continuación para programar una consulta con nuestros especialistas.
            </p>
          </div>
        </div>
     {/* Formulario*/}

       <div className='grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center'>

        <form>
          <div className='grid gap-4' >

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
              
              <div className='space-y-2'>
                <label htmlFor='nombre' >Nombre</label>
                <input id='nombre' placeholder='Ingrese su nombre' required/>
              </div>

              <div className='space-y-2'>
                <label htmlFor='apellido' >Apellido</label>
                <input id='apellido' placeholder='Ingrese su apellido' required/>
              </div>

            </div>

            <div className='space-y-2'> 
              <label htmlFor='email' >Correo Electrónico</label>
              <input id='email' type='email' placeholder='Ingrese su correo electrónico, ejemplo@correo.com' required/>
            </div>

            <div className='space-y-2' >
              <label htmlFor='telefono' >Teléfono</label>
              <input id='telefono' type='tel' placeholder='Ingrese su número de teléfono' required/>
            </div>

            <div className='space-y-2'>
              <label htmlFor='doctores'>Doctores</label>
              <select id='doctores' >
                <option value='' >Seleccione un especialista</option>
                <option value='dr1' >Dr. Juan Pérez - Cardiología</option>
              </select>
            </div>

          </div>
        </form>

       </div>
      </div>
    </section>
  )
}

export default appointment
