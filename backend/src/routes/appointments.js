import express from 'express';
import { createAppointment, getAppointments, getAppointmentById , updateAppointment, deleteAppointment } from '../controllers/appointmentsControllers.js';

const router = express.Router();

router.get('/', getAppointments);
router.get("/:id", getAppointmentById);
router.post('/', createAppointment);
router.put('/:id',updateAppointment);
router.patch('/:id',updateAppointment);
router.delete('/:id', deleteAppointment);
export default router;
