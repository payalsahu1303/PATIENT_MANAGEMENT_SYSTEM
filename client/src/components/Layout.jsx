import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/records', label: 'Medical Records' },
  { path: '/prescriptions', label: 'Prescriptions' },
  { path: '/bills', label: 'Bills' },
  { path: '/appointments', label: 'Appointments' },
];

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-white p-6">
        <h1 className="text-2xl font-bold mb-8">Patient Panel</h1>
        <nav className="flex flex-col gap-4">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-full hover:bg-blue-200 ${isActive ? 'bg-blue-500 text-white' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1 bg-white p-6">
        <Outlet />
      </main>
    </div>
  );
}
