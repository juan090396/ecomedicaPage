import { db } from '../db/connection.js';

export const getDoctors = async (req,res) => {
    try {
      const [rows] = await db.query('SELECT id,name FROM doctors');
      res.json(rows);
    } catch (error){
      console.error('Error al obtener doctores:', errror);
      res.status(500).json({message:" Error al obtener doctores" });
    }
}
