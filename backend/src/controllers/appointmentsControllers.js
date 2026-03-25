import { db } from '../db/connection.js';
 //obtener datos
export const getAppointments = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM appointments');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener citas:', error);
    res.status(500).json({ message: 'Error al obtener citas' }); 
  }
};

 //crear cita
export const createAppointment = async (req, res) => {
  try {
    const { name, last_name, phone, email, date, time, message, doctor_id } = req.body;

    await db.query(
      `INSERT INTO appointments 
      (name, last_name, phone, email, date, time, message, doctor_id, status) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, last_name, phone, email, date, time, message, doctor_id, "scheduled"]
    );

    res.status(201).json({ success: true, message: 'Cita agendada exitosamente' });

  } catch (error) {
    console.error('Error al crear cita:', error); 
    res.status(500).json({ message: 'Error al crear cita' });
  }
};

// Obtener una cita por ID
export const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query("SELECT * FROM appointments WHERE id = ?", [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Cita no encontrada" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Error al obtener cita:", error);
    res.status(500).json({ message: "Error al obtener cita" });
  }
};

//eliminar cita
export const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query("DELETE FROM appointments WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Cita no encontrada" });
    }

    res.json({ success: true, message: "Cita eliminada correctamente" });

  } catch (error) {
    console.error("Error al eliminar cita:", error);
    res.status(500).json({ message: "Error al eliminar cita" });
  }
};

  //actualizar cita
  export const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, last_name, phone, email, date, time, message, doctor_id } = req.body;

    const [result] = await db.query(
      `UPDATE appointments 
      SET 
        name = ?, 
        last_name = ?, 
        phone = ?, 
        email = ?, 
        date = ?, 
        time = ?, 
        message = ?, 
        doctor_id = ?
      WHERE id = ?`,
      [name, last_name, phone, email, date, time, message, doctor_id, id]
    );

        if(result.affectedRow === 0){
          return res.status(400).json({message: "Cita no encontrada" });
        }

    } catch (error) {
      console.error("Error al actualizar cita:", error);
      res.status(500).json({ message: "Error al actualizar cita" });
    }
  }
