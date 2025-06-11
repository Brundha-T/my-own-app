import { useState, useEffect } from 'react';

export default function GoalTrackerForm() {
  const [goal, setGoal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [savedGoal, setSavedGoal] = useState('');

  useEffect(() => {
    const existingGoal = localStorage.getItem('weeklyGoal');
    if (existingGoal) {
      setSavedGoal(existingGoal);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal.trim()) {
      localStorage.setItem('weeklyGoal', goal);
      setSavedGoal(goal);
      setSubmitted(true);
      setGoal('');
    }
  };

  return (
    <div className="bg-white/10 p-8 rounded-xl shadow-md">
      {savedGoal && (
        <div className="mb-4 p-4 bg-green-800/60 rounded-lg">
          <p className="text-sm text-green-200">Current goal:</p>
          <p className="text-lg font-bold">{savedGoal}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter your new weekly goal"
          className="p-3 rounded-md text-black"
          required
        />
        <button
          type="submit"
          className="bg-amber-400 hover:bg-amber-500 text-black py-2 rounded-md font-semibold"
        >
          Save Goal
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-green-300 text-center">✅ Goal saved! Stay productive.</p>
      )}
    </div>
  );
}
