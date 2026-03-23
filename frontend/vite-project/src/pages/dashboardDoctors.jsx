import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';

const DashboardDoctors = () => {

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Obtener doctores
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

  // 🔹 Eliminar doctor
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

      <div className='p-6 max-w-[1500px] mx-auto'>

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold">Equipo Médico</h1>
            <p className="text-sm text-gray-500">
              {doctors.length} Doctores
            </p>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
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

                {/* Imagen */}
                <img
                  src={doctor.image_url || "https://via.placeholder.com/400x250"}
                  alt={doctor.name}
                  className="w-full h-48 object-cover"
                />

                {/* Info */}
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
                    <button className="flex-1 border rounded-lg py-2 text-sm hover:bg-gray-100">
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
    </div>
  );
};

export default DashboardDoctors;
