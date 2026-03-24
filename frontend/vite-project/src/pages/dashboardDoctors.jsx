import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';

const DashboardDoctors = () => {

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal,setShowModal] = useState(false);
  const [mode,setMode]= useState("create");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    description: '',
    email:"",
    phone:"",
    availability: '',
    image_url: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  // Obtener doctores
  const fetchDoctors = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/doctors");
      const data = await res.json();
      setDoctors(data);
    } catch (error) {
      console.error("Error al cargar doctores:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);


   //Aplicar cambios 
  const handleChange = (e) =>{
    setNewDoctor({
      ...newDoctor,
      [e.target.name]: e.target.value
    })
  }

  // Crear doctor

const handleCreateDoctor = async () => {
  try {
    await fetch("http://localhost:5000/api/doctors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newDoctor)
    });
    setShowModal(false);
    setSuccessMessage("Doctor creado exitosamente!");
    setNewDoctor({
      name: "",
      description: "",
      email: "",
      phone: "",
      image_url: ""
    });

    fetchDoctors();
    setTimeout(()=>{
      setSuccessMessage("");
    }, 3000);
  } catch (error) {
    console.error("Error al crear doctor:", error);
  }
};

  //abrir modal en modo edición
  const handleEdit= (doctor)=>{
    setMode("edit");
    setSelectedDoctor(doctor);

    setNewDoctor({
      name: doctor.name,
      description:doctor.description,
      email:doctor.email,
      phone:doctor.phone,
      availability:doctor.availability,
      image_url:doctor.image_url || ""
    });
    setShowModal(true);
  }

  // Editar Doctor

  const handleUpdateDoctor = async()=>{
    try{
      await fetch(`http://localhost:5000/api/doctors/${selectedDoctor.id}`,{
        method: "PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(newDoctor)
      });
      setShowModal(false);
      fetchDoctors();

      setSuccessMessage("Doctor actualizado exitosamente!");
      setTimeout(()=>{
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error al actualizar doctor:", error);
    }
  }

  // Eliminar doctor
  const handleDelete = async (id) => {
    const confirmDelete = confirm("¿Seguro que deseas eliminar este doctor?");
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:5000/api/doctors/${id}`, {
        method: "DELETE"
      });

      // refrescar lista
      fetchDoctors();
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };


  return (
    <div className="min-h-screen bg-[#F1F5FB] text-gray-800">
      <Navbar/>
      {successMessage && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg">
          {successMessage}
        </div>)}
      <div className='p-6 max-w-[1500px] mx-auto'>

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold">Equipo Médico</h1>
            <p className="text-sm text-gray-500">
              {doctors.length} Doctores
            </p>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={() => {
            setMode("create");
            setNewDoctor({
              name: "",
              description: "",
              email: "",
              phone: "",
              availability: "",
              image_url: ""
            });
            setShowModal(true);
          }}
          >
            + Nuevo Doctor
          </button>
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-gray-600">Cargando doctores...</p>
        )}

        {/* GRID DOCTORES */}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden border"
              >

               
                <img
                  src={doctor.image_url || "https://via.placeholder.com/400x250"}
                  alt={doctor.name}
                  className="w-full h-48 object-cover"
                />

                
                <div className="p-4">
                  <h3 className="font-semibold text-lg">
                    {doctor.name}
                  </h3>

                  <p className="text-blue-600 text-sm mt-2">
                    {doctor.description}
                  </p>

                  <p className="text-xs text-gray-400 mt-3">
                    Disponibilidad: {doctor.availability}
                  </p>

                  {/* Botones */}
                  <div className="flex gap-2 mt-4">
                    <button 
                      onClick={() => handleEdit(doctor)}
                      className="flex-1 border rounded-lg py-2 text-sm hover:bg-gray-100"
                    >
                      ✏️ Editar
                    </button>

                    <button
                      onClick={() => handleDelete(doctor.id)}
                      className="flex-1 border rounded-lg py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      🗑️ Eliminar
                    </button>
                  </div>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
  {/*Modal*/}
  {showModal &&(
    <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50'>
      <div className='bg-white rounded-xl p-6 w-full max-w-lg shadow-lg relative' >
        <button onClick={()=> setShowModal(false)}
        className='abosulute top-3 right-3 text-gray-400 hover:text-gray-600' >
          X
        </button>
        <h2 className='text-lg font-semibold mb-4'>
          {mode === "create"? "Nuevo Doctor":"Editar Doctor"}
        </h2>
        <div className='grid grid-cols-2 gap-4' >

          <input
            type="text"
            name="name"
            placeholder="Nombre Completo"
            value={newDoctor.name}
            onChange={handleChange}
            className="border p-2 rounded-lg col-span-2"
          />

          <input
            type="text"
            name="description"
            placeholder="Descripción"
            value={newDoctor.description}
            onChange={handleChange}
            className="border p-2 rounded-lg col-span-2"
          />
          <input
            type="text"
            name="availability"
            placeholder="Disponibilidad"
            value={newDoctor.availability}
            onChange={handleChange}
            className="border p-2 rounded-lg col-span-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={newDoctor.email}
            onChange={handleChange}
            className="border p-2 rounded-lg col-span-2"
          />

          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={newDoctor.phone}
            onChange={handleChange}
            className="border p-2 rounded-lg col-span-2"
          />

          <input
            type="text"
            name="image_url"
            placeholder="Url de imagen"
            value={newDoctor.image_url}
            onChange={handleChange}
            className="border p-2 rounded-lg col-span-2"
          />
        </div>

        {/*Botones*/}
        <div className='flex justify-end gap-2 mt-6' >
          <button
            onClick={() => setShowModal(false)}
            className='px-4 py-2 border rounded-lg'
          >
            Cancelar
          </button>

          <button
            onClick={mode === "create" ? handleCreateDoctor:handleUpdateDoctor}
            className='px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700'         
          >
            {mode === "create"? "Crear Doctor": "Guardar Cambios"}
          </button>

        </div>

      </div>
    </div>
  )}

    </div>
    
  );
};

export default DashboardDoctors;
