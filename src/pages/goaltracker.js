import GoalTrackerForm from '../components/GoalTrackerForm';

export default function GoalTrackerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-black flex items-center justify-center text-white p-6">
      <div className="w-full max-w-xl">
        <GoalTrackerForm />
      </div>
    </div>
  );
}
