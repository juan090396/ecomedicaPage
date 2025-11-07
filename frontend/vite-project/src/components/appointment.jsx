import React, { useState } from 'react'


const appointment = () => {

const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    phone: "",
    doctors: "",
    especialty: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const appointmentData = {
    name: formData.name,
    last_name: formData.last_name,
    phone: formData.phone,
    email: formData.email,
    date: formData.date,
    time: formData.time,
    message: formData.message,
  };
    
    try {

      const response = await fetch("http://localhost:5000/api/appointments/", {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },body: JSON.stringify(appointmentData),})
        {/* debo cambiar por formData cuando tenga los medicos y las especialidades en la base de datos*/}

        if (response.ok){
          const data = await response.json();
          alert("Cita agendada con éxito");
          console.log("respuesta del servidor:", data);

          setFormData({
            name: "",
            last_name: "",
            email: "",
            phone: "",
            doctors: "",
            especialty: "",
            date: "",
            time: "",
            message: "",
          });
        } else {
          alert("Error al agendar la cita");
          console.error("Error al registrar cita:", response.statusText);
        }

    } catch (error) { 
      console.error("Error de conexión:", error);
      alert("Error de conexión con el servidor");
    }

  };


  return (
    <section className='py-12 md:py-24 bg-gray-50 flex flex-col items-center justify-center' id='citas' >

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
       <div className='flex justify-center mt-10'>
        <form onSubmit={handleSubmit} className='bg-white p-8 rounded-xl shadow-md w-full max-w-2xl'  > 
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1' >Nombre</label>
              <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Ingrese su nombre'
              className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required/>
              </div>
              
              <div>
              <label className='block text-sm font-medium text-gray-700 mb-1' >Apellido</label>
              <input
              type='text'
              name='last_name'
              value={formData.last_name}
              onChange={handleChange}
              placeholder='Ingrese su apellido'
              className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              </div>
              
              <div className='md:col-span-2'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Correo Electrónico</label>
                <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Ingrese su correo electrónico'
                className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                required/>
              </div>
              
              <div className='md:col-span-2'>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Teléfono</label>
              <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Ingrese su número de teléfono'
              className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
              </div>
              
              <div className='md:col-span-2'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Doctores</label>
                <select
                name='doctors'
                value={formData.doctors}
                onChange={handleChange}
                className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                required>
                  <option value=''>Seleccione un doctor</option>
                  <option value='doctor1'>Dra.Thais Suarez</option>
                  <option value='doctor2'>Dr. Joaquin Avile</option>
                  <option value='doctor3'>Dra. Marta Peña</option>
                  <option value='doctor4'>Dra. Isabel Medina</option>
                </select>
              </div>
              
              <div>
              <label className='block text-sm font-medium text-gray-700 mb-1' >Fecha</label>
              <input
              type='date'
              name='date'
              value={formData.date}
              onChange={handleChange}
              className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required/>
              </div>
              
              <div>
              <label className='block text-sm font-medium text-gray-700 mb-1' >Hora</label>
              <input
              type='time'
              name='time'
              value={formData.time}
              onChange={handleChange}
              className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required/>
              </div>
        

              <div className='md:col-span-2'>
              <label className='block text-sm font-medium text-gray-700 mb-1' >Motivo de la consulta</label>
              <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Describa brevemente el motivo de su consulta'
              className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              rows='4'/>
              </div>
            </div>

            <button
            type='submit'
            className='w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition font-medium cursor-pointer '
            >
              Agendar Cita
            </button>
          
          <p className='text-center text-gray-500 text-sm mt-4'>  
            Al agendar una cita, acepta nuestros términos y condiciones de servicio.
          </p>

        </form>
       </div>

      </div>
    </section>
  )
}

export default appointment
