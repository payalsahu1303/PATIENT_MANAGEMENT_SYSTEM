import db from '../config/db.js';

export const addBill = (req, res) => {
  const { patient_id, amount } = req.body;
  const sql = 'INSERT INTO bills (patient_id, amount) VALUES (?, ?)';
  db.query(sql, [patient_id, amount], (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ message: 'Bill added' });
  });
};

export const getBills = (req, res) => {
  const { patientId } = req.params;
  db.query('SELECT * FROM bills WHERE patient_id = ?', [patientId], (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(results);
  });
};
