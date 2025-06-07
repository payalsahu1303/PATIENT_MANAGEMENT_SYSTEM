import express from 'express';
import { addRecord, getRecords } from '../controllers/recordController.js';
const router = express.Router();

router.post('/add', addRecord);
router.get('/:patientId', getRecords);

export default router;
