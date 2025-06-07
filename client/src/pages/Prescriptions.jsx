import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Prescriptions() {
  const [prescriptions, setPrescriptions] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    axios.get(`http://localhost:5000/api/prescriptions/${user.id}`)
      .then(res => setPrescriptions(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Prescriptions</h2>
      {prescriptions.map((item, idx) => (
        <div key={idx} className="bg-white p-4 shadow rounded-lg mb-4">
          <p><strong>Medication:</strong> {item.medication}</p>
          <p><strong>Dosage:</strong> {item.dosage}</p>
          <p className="text-sm text-gray-500">Date: {new Date(item.created_at).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}
