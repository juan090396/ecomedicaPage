import { db } from '../db/connection.js';

//obtener datos
export const getDoctors = async (req,res) => {
    try {
      const [rows] = await db.query('SELECT id,name, description, availability, image_url FROM doctors');
      res.json(rows);
    } catch (error){
      console.error('Error al obtener doctores:', error);
      res.status(500).json({message:" Error al obtener doctores" });
    }
}
//crear doctor
export const createDoctors = async (req,res) =>{
  try {
    const {name, description, availability, image_url} = req.body;

    await db.query('INSERT INTO doctors (name, description, availability, image_url) VALUES (?, ?, ?, ?)', [name, description, availability, image_url])

    res.status(201).json({success:true, message: 'Doctor creado exitosamente'});
  } catch (error) {
    console.error('Error al crear doctor:', error);
    res.status(500).json({message: 'Error al crear doctor'});
  }
}
//eliminar doctor
export const deleteDoctors = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query("DELETE FROM doctors WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "doctor no encontrado" });
    }

    res.json({ success: true, message: "doctor eleminado correctamente" });

  } catch (error) {
    console.error("Error al eliminar doctor:", error);
    res.status(500).json({ message: "Error al eliminar doctor" });
  }
};

  //actualizar doctor
  export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, availability, image_url } = req.body;

    const [result] = await db.query(
      `UPDATE doctors
      SET 
        id = ?, 
        name = ?, 
        description = ?, 
        availability = ?, 
        image_url = ?`,
      [name, description, availability, image_url, id]
    );
    
      if(result.affectedRow === 0){
        return res.status(400).json({message: "Doctor no encontrado" });
      }
        
      res.json({ success: true, message: "Doctor actualizado correctamente" });

    } catch (error) {
      console.error("Error al actualizar doctor:", error);
      res.status(500).json({ message: "Error al actualizar doctor" });
    }
  }
