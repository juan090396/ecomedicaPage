import express from 'express';

import { getDoctors, createDoctors, deleteDoctors,updateDoctor} from '../controllers/doctorsControllers.js';

const router = express.Router();
router.get('/', getDoctors);
router.post('/', createDoctors);
router.delete('/:id', deleteDoctors);
router.put('/:id', updateDoctor);
router.patch('/:id', updateDoctor);

export default router;
