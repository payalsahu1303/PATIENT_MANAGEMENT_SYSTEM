import db from '../config/db.js';

export const addPrescription = (req, res) => {
  const { patient_id, doctor_id, medication, dosage } = req.body;
  const sql = 'INSERT INTO prescriptions (patient_id, doctor_id, medication, dosage) VALUES (?, ?, ?, ?)';
  db.query(sql, [patient_id, doctor_id, medication, dosage], (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ message: 'Prescription added' });
  });
};

export const getPrescriptions = (req, res) => {
  const { patientId } = req.params;
  db.query('SELECT * FROM prescriptions WHERE patient_id = ?', [patientId], (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(results);
  });
};
