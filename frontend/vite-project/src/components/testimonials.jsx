import React from "react";
import { Star } from "lucide-react"; // usa los íconos de lucide-react

const testimonialsData = [
  {
    name: "Laura Martínez",
    text: "Excelente atención médica. El Dr. Joaquin Avile fue muy profesional y amable. El proceso para agendar la cita fue rápido y sencillo.",
  },
  {
    name: "Roberto Sánchez",
    text: "Muy satisfecho con el servicio. Las instalaciones son modernas y limpias. El personal es atento y el tiempo de espera fue mínimo.",
  },
  {
    name: "Carmen Díaz",
    text: "La Dra.Thais Suarez es excelente. Me explicó todo detalladamente y me sentí muy bien atendida. Definitivamente regresaré.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 ml-14  md:py-24 lg:py-32 bg-blue-50" id="testimonios">
      <div className="container mx-auto px-4 md:px-6">
        {/* Título */}
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Testimonios
          </h2>
          <p className="text-gray-600 md:text-xl">
            Lo que nuestros pacientes dicen sobre nosotros.
          </p>
        </div>

        {/* Cards de testimonios */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-sm hover:shadow-md transition"
            >
              {/* Estrellas */}
              <div className="flex justify-center mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" stroke="none" size={20} />
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-700 italic mb-4 text-center">
                "{testimonial.text}"
              </p>

              {/* Nombre */}
              <p className="font-semibold text-center text-gray-900">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
