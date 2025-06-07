export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="p-4">
      <h1 className="text-2xl">Welcome, {user?.name}</h1>
      <p>Role: {user?.role}</p>
    </div>
  );
}
