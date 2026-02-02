import React, { useEffect, useState, useRef } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const carouselRef = useRef(null);

  const fetchDoctors = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/doctors");

      if (!response.ok) {
        throw new Error("Error al obtener doctores");
      }

      const data = await response.json();
      setDoctors(data);
    } catch (err) {
      console.log(err);
      setError("No se pudieron cargar los doctores.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section
      id="doctores"
      className="py-12 md:py-24 bg-gray-50 flex flex-col items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        {/* subtitulo */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestros Especialistas
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
            Contamos con un equipo de profesionales altamente calificados para brindarle la mejor atención.
          </p>

          {/* Loading */}
          {loading && <p className="text-gray-600">Cargando doctores...</p>}

          {/* Error */}
          {error && <p className="text-red-500 font-semibold">{error}</p>}
        </div>

        {/* Carrusel */}
        {!loading && !error && (
          <div className="relative mt-10 w-full">
            
            <button
              onClick={scrollLeft}
              className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 z-10"
            >
              ◀
            </button>

            {/* Carrusel overflow */}
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scroll-smooth p-2 no-scrollbar"
            >
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="bg-white flex-shrink-0 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 w-64"
                >
                  <img
                    src={doctor.image_url || "/no-image.png"}
                    alt={doctor.name}
                    className="w-full h-56 object-cover rounded-t-xl"
                  />

                  <div className="p-5 text-left">
                    <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>

                    <p className="text-gray-600 text-sm mt-2">{doctor.description}</p>

                    <p className="text-gray-400 text-xs mt-3">
                      Disponibilidad: {doctor.availability}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            
            <button
              onClick={scrollRight}
              className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 z-10"
            >
              ▶
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Doctors;
