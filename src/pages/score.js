'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import GoalTrackerForm from '../components/GoalTrackerForm';
import ChatForm from '../components/ChatForm';

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
      className="min-h-screen flex flex-col items-center justify-start text-white px-4 py-10 gap-12"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp2175326.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 -z-10" />

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        
        <div className="flex-1 bg-white/20 p-6 rounded-xl shadow-2xl backdrop-blur-md text-center hover:scale-105 transition-transform duration-300">
          <h1 className="text-2xl font-bold text-amber-300 mb-4">Your Productivity Score</h1>
          <div className="text-4xl font-extrabold text-yellow-300 mb-2">{score} / 100</div>
          <p className="text-md mb-4">{recommendation}</p>
          <button
            onClick={signOut}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-md font-semibold text-white"
          >
            🚪 Sign Out
          </button>
        </div>

        <div className="flex-1 bg-white/20 p-6 rounded-xl shadow-2xl backdrop-blur-md hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold text-amber-300 mb-4 text-center">🎯 Weekly Goal Tracker</h2>
          <GoalTrackerForm />
        </div>
      </div>

      <div className="w-full max-w-2xl mt-4 p-4 bg-white/10 rounded-xl shadow-xl border border-amber-300 hover:border-amber-500 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(255,191,0,0.4)]">
        <ChatForm />
      </div>
    </div>
  );
}
