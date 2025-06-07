import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MedicalRecords() {
  const [records, setRecords] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    axios.get(`http://localhost:5000/api/records/${user.id}`)
      .then(res => setRecords(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Medical Records</h2>
      {records.map((rec, idx) => (
        <div key={idx} className="bg-white p-4 shadow rounded-lg mb-4">
          <p><strong>Diagnosis:</strong> {rec.diagnosis}</p>
          <p><strong>Treatment:</strong> {rec.treatment}</p>
          <p className="text-sm text-gray-500">Date: {new Date(rec.created_at).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}
