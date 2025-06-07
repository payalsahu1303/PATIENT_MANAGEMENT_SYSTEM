import db from '../config/db.js';

export const registerUser = (req, res) => {
  const { name, email, password, role } = req.body;
  const sql = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, password, role], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ message: 'User registered successfully' });
  });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    if (results.length > 0) {
      res.json({ message: 'Login successful', user: results[0] });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
};
