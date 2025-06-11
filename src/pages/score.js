'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import GoalTrackerForm from '../components/GoalTrackerForm';

export default function Score() {
  const [score, setScore] = useState(0);
  const [recommendation, setRecommendation] = useState('');
  const router = useRouter();

  useEffect(() => {
    const tasks = JSON.parse(sessionStorage.getItem('tasks')) || [];
    const calculatedScore = Math.min(tasks.length * 10, 100);
    setScore(calculatedScore);

    if (calculatedScore >= 80) setRecommendation('Great job! Keep up the excellent productivity.');
    else if (calculatedScore >= 50) setRecommendation('Good effort! Try to improve your consistency.');
    else if (calculatedScore > 0) setRecommendation('You can do better. Focus and reduce distractions.');
    else setRecommendation('No tasks found. Add routines to see your score.');
  }, []);

  const signOut = () => {
    sessionStorage.clear();
    router.push('/');
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white px-4 py-10"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp2175326.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 -z-10" />

      {/* Side-by-side layout */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        
        {/* Score Box with Title */}
        <div className="flex-1 bg-white/20 p-8 rounded-xl shadow-xl text-center">
          <h1 className="text-3xl font-bold text-amber-300 mb-6">Your Productivity Score</h1>
          <div className="text-5xl font-extrabold text-yellow-300 mb-4">{score} / 100</div>
          <p className="text-lg mb-6">{recommendation}</p>
          <button
            onClick={signOut}
            className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-md font-semibold text-white"
          >
            🚪 Sign Out
          </button>
        </div>

        {/* Goal Tracker Box with Title */}
        <div className="flex-1 bg-white/20 p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-amber-300 mb-6 text-center">🎯 Weekly Goal Tracker</h2>
          <GoalTrackerForm />
        </div>
      </div>
    </div>
  );
}
