'use client';

import { useState, useEffect } from 'react';
import MotivationForm from '../components/MotivationForm';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(sessionStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleAddTask = () => {
    if (!newTask.trim() || !startTime || !endTime) return;

    const taskObj = `${newTask} (From ${startTime} to ${endTime})`;
    const updatedTasks = [...tasks, taskObj];

    setTasks(updatedTasks);
    sessionStorage.setItem('tasks', JSON.stringify(updatedTasks));

    setNewTask('');
    setStartTime('');
    setEndTime('');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white font-sans px-4 py-6"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp2175326.jpg')",
      }}
    >
      <h1 className="text-4xl font-bold text-center text-orange-300 mb-6">
        RateMyRoutine Dashboard
      </h1>

      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="flex gap-2 items-center flex-wrap justify-center">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Task Name"
            className="text-black px-4 py-2 rounded-md w-48"
          />
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="text-black px-3 py-2 rounded-md"
          />
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="text-black px-3 py-2 rounded-md"
          />
          <button
            onClick={handleAddTask}
            className="bg-orange-400 hover:bg-orange-500 text-black font-bold px-4 py-2 rounded-md"
          >
            Add
          </button>
        </div>
      </div>

      <ul className="text-center mb-4">
        {tasks.map((task, index) => (
          <li key={index} className="text-lg">{task}</li>
        ))}
      </ul>

      <div className="text-center my-6">
        <a href="/score">
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full font-bold text-white text-lg">
            View Score
          </button>
        </a>
      </div>

      <MotivationForm tasks={tasks} />
    </div>
  );
}
