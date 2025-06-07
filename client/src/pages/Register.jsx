import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { registerUser } from '../services/api';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

// Zod schema for validation
const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['patient', 'doctor', 'admin']),
});

export default function Register() {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: 'patient',
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await registerUser(data);
      alert(res.data.message);
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="w-full h-screen flex bg-white">
      {/* Left form section */}
      <div className="w-full md:w-1/2 pl-12 pr-10 py-10 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">Create Your Account</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

            <FormField
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="text-sm py-2 px-3"
                      placeholder="Enter your full name"
                      {...field}
                    />
                  </FormControl>
                  {fieldState.error && (
                    <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="text-sm py-2 px-3"
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  {fieldState.error && (
                    <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className="text-sm py-2 px-3"
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  {fieldState.error && (
                    <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="text-sm bg-white py-2 px-3 border rounded-md w-full"
                    >
                      <option value="patient">Patient</option>
                      <option value="doctor">Doctor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-sm py-2"
            >
              Register
            </Button>
          </form>
        </Form>
      </div>

      {/* Right image section */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="../../public/onboarding-img.jpg"
          alt="Medical theme"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
