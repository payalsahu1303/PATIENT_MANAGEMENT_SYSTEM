import db from '../config/db.js';

export const addRecord = (req, res) => {
  const { patient_id, diagnosis, treatment } = req.body;
  const sql = 'INSERT INTO medical_records (patient_id, diagnosis, treatment) VALUES (?, ?, ?)';
  db.query(sql, [patient_id, diagnosis, treatment], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ message: 'Record added' });
  });
};

export const getRecords = (req, res) => {
  const { patientId } = req.params;
  db.query('SELECT * FROM medical_records WHERE patient_id = ?', [patientId], (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(results);
  });
};
