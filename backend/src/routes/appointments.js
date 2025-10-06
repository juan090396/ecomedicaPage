import express from 'express';
import {createAppointment, getAppointments} from '../controllers/appointmentsController.js';

const router = express.Router();

router.get('/', getAppointments);
router.post('/', createAppointment);
export default router;
