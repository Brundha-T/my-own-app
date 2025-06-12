export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-black flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-amber-300 tracking-wide">RateMyRoutine</div>
        <nav className="space-x-4 text-white font-semibold">
          <a href="/" className="hover:text-amber-300">🏠 Home</a>
          <a href="/dashboard" className="hover:text-amber-300">📊 Dashboard</a>
        </nav>
      </header>

      <section className="flex flex-wrap flex-grow p-10 gap-8 bg-gradient-to-br from-zinc-800 to-zinc-900 text-white min-h-screen">
        <div className="flex-1 min-w-[300px] p-4">
          <h1 className="text-4xl font-bold text-amber-300 mb-6">About Us</h1>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            <strong className="text-white">RateMyRoutine</strong> is a smart productivity tracking platform that helps users assess their daily routines and stay focused. Whether you're a student, professional, or homemaker, this tool empowers you to log tasks, measure your performance, and receive real-time feedback.
          </p>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            The system calculates a daily productivity score based on your task completion and provides helpful recommendations to improve consistency and time management. With an intuitive interface and motivational prompts, RateMyRoutine makes staying on track easier than ever.
          </p>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            By using RateMyRoutine regularly, you can build stronger habits, reduce procrastination, and boost your overall efficiency — one day at a time.
          </p>
        </div>
        <div className="flex-1 min-w-[300px] flex justify-center items-center p-4">
          <img
            src="https://quotefancy.com/media/wallpaper/3840x2160/8046315-CONQUER-Wallpaper.jpg"
            alt="Productivity Visual"
            className="rounded-xl shadow-[0_8px_20px_rgba(255,204,128,0.4)] max-w-full"
          />
        </div>
      </section>
    </div>
  );
}
