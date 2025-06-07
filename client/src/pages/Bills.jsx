import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Bills() {
  const [bills, setBills] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/bills/${user.id}`)
      .then((res) => setBills(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto min-h-screen bg-white">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Billing History</h2>

      <div className="space-y-4">
        {bills.length === 0 && (
          <p className="text-gray-600 text-center">No bills found.</p>
        )}

        {bills.map((bill, idx) => (
          <Card key={idx} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-blue-700">
                ₹{bill.amount}
              </CardTitle>
              <Badge
                variant={bill.status === 'Paid' ? 'default' : 'destructive'}
                className="mt-2"
              >
                {bill.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Date: {new Date(bill.created_at).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
