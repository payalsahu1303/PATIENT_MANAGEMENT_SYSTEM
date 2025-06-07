import db from '../config/db.js';

export const bookAppointment = (req, res) => {
  const { patient_id, doctor_id, appointment_date } = req.body;
  const sql = `INSERT INTO appointments (patient_id, doctor_id, appointment_date) VALUES (?, ?, ?)`;
  db.query(sql, [patient_id, doctor_id, appointment_date], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ message: 'Appointment booked successfully' });
  });
};

export const getAppointments = (req, res) => {
  const { patientId } = req.params;
  const sql = `SELECT * FROM appointments WHERE patient_id = ?`;
  db.query(sql, [patientId], (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(results);
  });
};
