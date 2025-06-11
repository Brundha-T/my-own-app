'use client';
import AdminInfo from '../components/AdminInfo';

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-black flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-amber-300 tracking-wide">RateMyRoutine</div>
        <nav className="space-x-4 text-white font-semibold">
          <a href="/" className="hover:text-amber-300">🏠 Home</a>
          <a href="/dashboard" className="hover:text-amber-300">📊 Dashboard</a>
        </nav>
      </header>

      {/* Background Section */}
      <section
        className="flex-grow px-4 py-10 text-white"
        style={{
          backgroundImage: "url('https://quotefancy.com/media/wallpaper/3840x2160/8046315-CONQUER-Wallpaper.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-8">👨‍💼 Admin Dashboard</h1>

          {/* Only User Statistics Component */}
          <AdminInfo />
        </div>
      </section>
    </div>
  );
}
