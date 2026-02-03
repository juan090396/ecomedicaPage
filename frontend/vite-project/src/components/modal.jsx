import { Phone } from 'lucide-react'
import React, {useState,useEffect} from 'react'

const ModalCreateAppointment  = ({onClose,onCreated}) => {

    const[form,setForm] =useState ({
        name: "",
        last_name:"",
        phone:"",
        email:"",
        date:"",
        time:"",
        message:"",
        doctor_id:"",
    });
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/doctors");
        const data = await response.json();
        console.log("Doctores cargados:", data);
        setDoctors(data);
      } catch (error) {
        console.error("Error al cargar doctores:", error);
      }
    };
    fetchDoctors();
}, []);


    const handleChange = async(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    }
    const handleSubmit = async(e)=> {
        e.preventDefault();

        const res= await fetch("http://localhost:5000/api/appointments/",{
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

    const data= await res.json();
    if(data.success) {
        onCreated();
        onClose();
        console.log("Cita creada:", data);
    }};

    

  return (
    <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50' >
        <div className='bg-white shadow-lg rounded-lg p-6 w-96' >
            <h2 className='text-xl font-semibold mb-4'>Crear Nueva Cita</h2>

            <form onSubmit={handleSubmit} className='space-y-3'>
                <input
                name="name"
                placeholder='Nombre'
                className='w-full border p-2 rounded'
                onChange={handleChange}
                />

                <input
                name='last_name'
                placeholder='Apellido'
                className='w-full border p-2 rounded'
                onChange={handleChange}
                />

                <input
                name='phone'
                placeholder='Teléfono'
                className='w-full border p-2 rounded'
                onChange={handleChange}
                />

                <input
                name='email'
                placeholder='ejemplo@gmail.com'
                className='w-full border p-2 rounded'
                onChange={handleChange}
                />

                <input
                name='date'
                type='date'
                className='w-full border p-2 rounded'
                onChange={handleChange}
                />

                <input
                name='time'
                type='time'
                className='w-full border p-2 rounded'
                onChange={handleChange}
                />

                <textarea
                name='message'
                placeholder='Mensaje'
                className='w-full border p-2 rounded'
                onChange={handleChange}
                />
                
                <select
                name='doctor_id'
                value={form.doctor_id}
                onChange={handleChange}
                className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                required>
                  <option value=''>Seleccione un doctor</option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </option>
                  ))}
                </select>

                <div className='flex justify-end gap-2 mt-4'>
                    <button 
                    type='button'
                    onClick={onClose}
                    className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'
                    >
                    Cancelar
                    </button>

                    <button 
                    type='submit'
                    className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                    >
                    Crear Cita
                    </button>

                </div>
            </form>
        </div>
    </div>
  )
}

export default ModalCreateAppointment
