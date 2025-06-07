import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

export default function AdminDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/stats')
      .then(res => setStats(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard title="Patients" value={stats.patients?.count || 0} />
        <StatCard title="Doctors" value={stats.doctors?.count || 0} />
        <StatCard title="Appointments" value={stats.appointments?.count || 0} />
        <StatCard title="Total Earnings" value={`₹${stats.earnings?.total || 0}`} />
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-md text-gray-700">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-blue-600">{value}</p>
      </CardContent>
    </Card>
  );
}
