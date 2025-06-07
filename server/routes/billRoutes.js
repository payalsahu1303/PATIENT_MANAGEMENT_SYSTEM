import express from 'express';
import { addBill, getBills } from '../controllers/billController.js';
const router = express.Router();

router.post('/add', addBill);
router.get('/:patientId', getBills);

export default router;
