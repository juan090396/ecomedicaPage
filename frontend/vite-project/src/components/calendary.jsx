import React, { useState, useEffect} from "react";
import ModalCreateAppointment from "./modal";

const Calendary = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10)); 

  const [openModal, setOpenModal] = useState(false);
  
  const [appointments, setAppointments] = useState([]);

  const monthNames = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
  ];

  // Cambiar al mes anterior
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  // Cambiar al mes siguiente
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Primer día del mes
  const firstDay = new Date(year, month, 1).getDay(); // 0 = Dom
  // Cantidad de días del mes
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  // Crear arreglo con días vacíos + días reales
  const calendarDays = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  //datos de citas  

  useEffect(() => {
      fetch(`http://localhost:5000/api/appointments/`)
        .then(res => res.json())
        .then(data => setAppointments(data));
      }, [month, year]);



  return (
    <div className="bg-white shadow-sm rounded-lg p-5">
      {/* Título */}

      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">Calendario de Citas</h2>

        <button
        onClick={() => setOpenModal(true)} 
        className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
        >
          + Nueva Cita
        </button>

      </div>

      {/* Controles del mes */}
      <div className="flex items-center justify-between mb-4 px-2">
        <button
          onClick={prevMonth}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
        >
          &lt;
        </button>

        <h3 className="font-semibold text-gray-600">
          {monthNames[month]} {year}
        </h3>

        <button
          onClick={nextMonth}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
        >
          &gt;
        </button>
      </div>

      {/* Días de la semana */}
      <div className="grid grid-cols-7 text-center text-sm text-gray-600 font-medium mb-2">
        <div>Dom</div><div>Lun</div><div>Mar</div><div>Mié</div>
        <div>Jue</div><div>Vie</div><div>Sáb</div>
      </div>

      {/* Calendario */}
      <div className="grid grid-cols-7 border border-gray-200">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className="h-32 border border-gray-200 p-2 text-xs text-gray-700 relative"
          >
            {day && <span className="text-gray-500 text-xs">{day}</span>}

            {/* Ejemplo de eventos
                todo Ajustar con lógica real luego
            */}
            {day === 19 && month === 10 && year === 2025 && (
              <>
                <div className="absolute bottom-2 left-1 right-1 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  María García — 10:00
                </div>
                <div className="absolute bottom-10 left-1 right-1 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                  Carlos López — 11:30
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {openModal && (<ModalCreateAppointment
      onClose={()=> setOpenModal(false)}
      onCreated={()=>{
        fetch("http://localhost:5000/api/appointments/")
      }}/>
      )}

    </div>
  );
};

export default Calendary;

