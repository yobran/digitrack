import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user, logout } = useAuth();
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">DigiTrack Dashboard</h1>
          <div>
            <span className="mr-4">Hi, {user?.name || 'User'}</span>
            <button onClick={logout} className="px-3 py-2 bg-red-600 text-white rounded">Logout</button>
          </div>
        </header>
        <main>
          <div className="bg-white p-6 rounded shadow">Welcome — this is the dashboard placeholder. Build features here.</div>
        </main>
      </div>
    </div>
  );
}
