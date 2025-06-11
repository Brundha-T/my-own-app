import AdminInfo from '../components/AdminInfo';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Admin Dashboard</h1>
      <AdminInfo />
    </div>
  );
}
