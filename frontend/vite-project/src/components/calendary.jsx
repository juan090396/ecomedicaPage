import React, { useState, useEffect} from "react";
import ModalCreateAppointment from "./modal";

const Calendary = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); 
  const [openModal, setOpenModal] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

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

  // Dias Del calendario
  const firstDay = new Date(year, month, 1).getDay(); 
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const calendarDays = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  //Obtener Citas
  const fetchAppointments = async ()=>{
    try {
      const res= await fetch("http://localhost:5000/api/appointments/");
      const data =await res.json();
      setAppointments(data);
      
    } catch (error) {
      console.error("Error al cargar citas:", error);
    }
  }
  useEffect(() => {
      fetchAppointments();
      }, [month, year]);
  //filtra citas
  const getAppointmentsForDay = (day)=>{
    return appointments.filter((app)=>{
      const date = new Date(app.date);
      return (
        date.getDate()=== day && date.getMonth() === month && date.getFullYear() === year
      )
    })
  }

  //Filtra citas por colores 
  const getColor = (app)=>{
    const today = new Date();
    const appDate = new Date(app.date);
    
    today.setHours(0,0,0,0);
    appDate.setHours(0,0,0,0);
    if(appDate.getTime()=== today.getTime()){
      return "bg-yellow-400"
    }
    switch(app.status){
      case "scheduled":
        return "bg-green-500";

      case "completed":
        return "bg-gray-500";

      case "cancelled":
        return "bg-red-500";
      
      case "no_show":
        return "bg-gray-500";
    }
  }

  return (
    <div className="bg-white shadow-sm rounded-lg p-5">

      { successMessage &&(
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg z-50" >
          {successMessage}
        </div>
      )}
  
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

            {/*Citas del dia*/}
            {day && getAppointmentsForDay(day).map((app, i) => (
              <div
               key={i}
               className={`mt-1 text-white text-xs px-2 py-1 rounded ${getColor(app)}`}
               >
                {app.patient_name} -{" "}
                {new Date(app.date).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}
              </div>
            ))}

          </div>
        ))}
      </div>
      {/*Modal*/}
      {openModal && (<ModalCreateAppointment
      onClose={()=> setOpenModal(false)}
      onCreated={()=>{
        setOpenModal(false);
        fetchAppointments();
        setSuccessMessage("Cita creada con éxito");

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      }}/>
      )}

    </div>
  );
};

export default Calendary;

