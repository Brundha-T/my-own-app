import { useEffect, useState } from 'react';

export default function AdminInfo() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const dummyUsers = [
      { name: 'Alice', active: true, tasks: 5 },
      { name: 'Bob', active: false, tasks: 1 },
      { name: 'Charlie', active: true, tasks: 4 },
      { name: 'David', active: false, tasks: 0 },
    ];
    setUsers(dummyUsers);
  }, []);

  const activeUsers = users.filter((u) => u.active).length;
  const inactiveUsers = users.length - activeUsers;
  const productivityRate = Math.round(
    (users.filter((u) => u.tasks >= 3).length / users.length) * 100
  );

  return (
    <div className="backdrop-blur-md bg-white/10 text-white rounded-xl p-6 shadow-xl w-full max-w-xl border border-white/20">
      <h2 className="text-3xl font-bold mb-4 text-center text-orange-300">📈 User Statistics</h2>

      <div className="space-y-2 text-lg">
        <p>🟢 Active Users: <strong>{activeUsers}</strong></p>
        <p>🔴 Inactive Users: <strong>{inactiveUsers}</strong></p>
        <p>📊 Productivity Rate: <strong>{productivityRate}%</strong></p>
      </div>

      <hr className="my-4 border-white/30" />

      <h3 className="text-xl font-semibold mb-2 text-purple-200">User List:</h3>
      <ul className="list-disc pl-6 space-y-1 text-white">
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.active ? '🟢 Active' : '🔴 Inactive'}, Tasks: {user.tasks}
          </li>
        ))}
      </ul>
    </div>
  );
}
