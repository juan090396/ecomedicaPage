import {db} from '../db/connection.js';

export const getAppointments = async (req, res) => {
  const [rows]= await db.query('SELECT * FROM appointments');
  res.json(rows);
};

export const createAppointment = async (req, res) => {
  const {name,email,date,time,message} = req.body;
  await db.querry("INSERT INTO appointments (name,email,date,time,message) VALUES (?,?,?,?,?)",[name,email,date,time,message]);
  res.json({success: true, message: 'Cita agendada exitosamente'});
};
