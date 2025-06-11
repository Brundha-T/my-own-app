import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredUsername = e.target.username.value;
    setUsername(enteredUsername);
    setLoginMessage(`${enteredUsername} logged in`);

    // Simulate short delay before routing
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-fixed text-white font-sans"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp2175326.jpg')",
      }}
    >
      <header className="bg-black flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-amber-300 tracking-wide">
          RateMyRoutine
        </div>
        <nav className="space-x-4 text-white font-semibold">
          <a href="/" className="hover:text-amber-300">
            🏠 Home
          </a>
          <a href="/about" className="hover:text-amber-300">
            ℹ️ About
          </a>
          <a href="/Admin" className="hover:text-amber-300">
            👨‍💼 Admin
          </a>
        </nav>
      </header>

      <h1 className="text-4xl text-center mt-10 mb-6 text-yellow-100 font-semibold">
        Sign Up
      </h1>

      <div className="bg-white/10 p-8 rounded-xl shadow-lg w-[90%] max-w-md mx-auto text-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            id="username"
            placeholder="Username"
            required
            minLength="3"
            className="p-3 rounded-md text-black"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            minLength="6"
            className="p-3 rounded-md text-black"
          />
          <input
            type="number"
            id="age"
            placeholder="Age"
            required
            min="10"
            max="100"
            className="p-3 rounded-md text-black"
          />
          <input
            type="submit"
            value="Sign Up"
            className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold py-3 rounded-md hover:from-orange-400 hover:to-pink-500 cursor-pointer"
          />
        </form>

        {/* Login Message */}
        {loginMessage && (
          <p className="mt-6 text-green-300 font-semibold text-lg">
            ✅ {loginMessage}
          </p>
        )}
      </div>

      <footer className="mt-auto bg-black/70 text-center py-4 text-sm text-gray-300">
        &copy; 2025 RateMyRoutine. All rights reserved.
      </footer>
    </div>
  );
}
