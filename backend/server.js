import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import appointmentsRoutes from "./src/routes/appointments.js";
import doctorsRoutes from "./src/routes/doctors.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/appointments', appointmentsRoutes);
app.use('/api/doctors', doctorsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
