import { useState } from 'react';
import axios from 'axios';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function AppointmentForm() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [form, setForm] = useState({
    patient_id: user.id,
    doctor_id: '',
    appointment_date: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/appointments/book', form);
      alert('Appointment booked successfully!');
    } catch (err) {
      alert(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800">Book Appointment</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <Label htmlFor="doctor_id" className="text-sm text-gray-700">Doctor ID</Label>
              <Input
                id="doctor_id"
                name="doctor_id"
                type="text"
                placeholder="Enter doctor ID"
                value={form.doctor_id}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="appointment_date" className="text-sm text-gray-700">Appointment Date</Label>
              <Input
                id="appointment_date"
                name="appointment_date"
                type="datetime-local"
                value={form.appointment_date}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Book Appointment
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
