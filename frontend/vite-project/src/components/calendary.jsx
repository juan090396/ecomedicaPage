import React, { useState, useEffect} from "react";
import ModalCreateAppointment from "./modal";

const Calendary = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); 
  const [openModal, setOpenModal] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null); 
  const [dayViewAppointments, setDayViewAppointments] = useState([null]);

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
        return "bg-orange-500";
    }
  }

  const handleOpenDetail = (app) => {
    setSelectedAppointment(app);
    setOpenModal(true)
  };

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
            className="h-32 border border-gray-200 p-2 text-xs text-gray-700 relative overflow-hidden"
          >
            {day && <span className="text-gray-500 text-xs">{day}</span>}

      {/*Citas*/}
      {day && (() => {
        const dayAppointments = getAppointmentsForDay(day);
        const visibleAppointments = dayAppointments.slice(0, 2);
          return (
          <> 
          {/*Contador*/}
          {dayAppointments.length > 2 && (
          <button className="absolute top-1 right-1 text-[10px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-md font-bold hover:bg-blue-200 transition-colors cursor-pointer"
          onClick= {() => setDayViewAppointments(dayAppointments)}
          >
            +{dayAppointments.length - 2}
          </button>
          )}

      {/*Citas visibles*/}
      {visibleAppointments.map((app, i) => (
        <div
          key={i}
          onClick={() => handleOpenDetail(app)}
          className={`mt-1 text-white text-xs px-2 py-1 rounded cursor-pointer hover:opacity-80 ${getColor(app)}`}
        >

          <div className="font-bold truncate" >{app.name} {app.last_name}</div>
          <div>{app.time?.slice(0, 5)}</div>
        </div>
      ))}
          </>); 
  })()}
          </div>
        ))}
      </div>
      {/*LISTADO DEL DÍA*/}
      {dayViewAppointments && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-lg shadow-xl w-80 max-h-[80vh] flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold text-gray-700">Citas del día</h3>
              <button onClick={() => setDayViewAppointments(null)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div className="p-4 overflow-y-auto space-y-2">
              {dayViewAppointments.map((app, i) => (
                <div
                  key={i}
                  onClick={() => {
                    handleOpenDetail(app);
                    setDayViewAppointments(null); // Cerramos esta lista para ver el detalle
                  }}
                  className={`p-2 rounded-lg cursor-pointer text-white text-sm shadow-sm hover:scale-[1.02] transition-transform ${getColor(app)}`}
                >
                  <div className="flex justify-between font-bold">
                    <span>{app.name} {app.last_name}</span>
                    <span>{app.time?.slice(0, 5)}</span>
                  </div>
                  <div className="text-xs opacity-90">Estado: {app.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}


      
      {/*Modal*/}
      {openModal && (<ModalCreateAppointment
      appointment={selectedAppointment}
      onClose={()=> {
        setOpenModal(false);
        setSelectedAppointment(null);
      }}
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

