import axios from 'axios';
import { useState } from 'react';

export default function Appointment() {
    
    const [form, setForm] = useState({ name: "", email: "", date: "", time: "", message: "" });

    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/appointments', form);}
       
        alert('Cita agendada con éxito');

        return (
            <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="last_name"
        placeholder="Apellido"
        value={form.last_name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <input
        name="time"
        type="time"
        value={form.time}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Mensaje o motivo de la cita"
        value={form.message}
        onChange={handleChange}
      />
      <button type="submit">Agendar cita</button>
    </form>)
    }
