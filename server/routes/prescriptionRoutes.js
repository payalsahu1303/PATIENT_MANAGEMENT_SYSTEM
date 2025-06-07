import express from 'express';
import { addPrescription, getPrescriptions } from '../controllers/prescriptionController.js';
const router = express.Router();

router.post('/add', addPrescription);
router.get('/:patientId', getPrescriptions);

export default router;
