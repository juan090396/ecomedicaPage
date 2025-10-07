import { db } from '../db/connection.js';

export const getAppointments = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM appointments');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener citas:', error);
    res.status(500).json({ message: 'Error al obtener citas' }); 
  }
};

export const createAppointment = async (req, res) => {
  try {
    const { name, last_name, email, date, time, message } = req.body;

    await db.query(
      'INSERT INTO appointments (name, last_name, email, date, time, message) VALUES (?, ?, ?, ?, ?, ?)',
      [name, last_name, email, date, time, message]
    );

    res.status(201).json({ success: true, message: 'Cita agendada exitosamente' });
  } catch (error) {
    console.error('Error al crear cita:', error); 
    res.status(500).json({ message: 'Error al crear cita' });
  }
};
