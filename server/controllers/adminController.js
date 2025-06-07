import db from '../config/db.js';

export const getDashboardStats = (req, res) => {
  const queries = {
    users: 'SELECT COUNT(*) as count FROM users WHERE role = "patient"',
    doctors: 'SELECT COUNT(*) as count FROM users WHERE role = "doctor"',
    appointments: 'SELECT COUNT(*) as count FROM appointments',
    earnings: 'SELECT SUM(amount) as total FROM bills WHERE status = "paid"',
  };

  Promise.all(Object.values(queries).map(q => new Promise((resolve, reject) =>
    db.query(q, (err, result) => err ? reject(err) : resolve(result[0]))
  )))
    .then(([patients, doctors, appointments, earnings]) => {
      res.json({ patients, doctors, appointments, earnings });
    })
    .catch(err => res.status(500).json({ message: err.message }));
};
