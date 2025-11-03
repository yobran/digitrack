import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8 bg-white rounded-lg shadow p-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">DigiTrack DLP</h1>
            <p className="text-gray-600">Digital Literacy Programme Management System</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-medium">Welcome, {user?.name || 'Intern'}</p>
              <p className="text-sm text-gray-500">DLP Field Officer</p>
            </div>
            <button 
              onClick={logout} 
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link 
            to="/schools" 
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center"
          >
            <div className="text-3xl mb-2">🏫</div>
            <h3 className="font-semibold text-lg">My Schools</h3>
            <p className="text-gray-600 text-sm">View assigned schools</p>
          </Link>

          <Link 
            to="/log-visit" 
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center"
          >
            <div className="text-3xl mb-2">📝</div>
            <h3 className="font-semibold text-lg">Log Visit</h3>
            <p className="text-gray-600 text-sm">Record school visit</p>
          </Link>

          <Link 
            to="/devices" 
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center"
          >
            <div className="text-3xl mb-2">💻</div>
            <h3 className="font-semibold text-lg">Devices</h3>
            <p className="text-gray-600 text-sm">Manage equipment</p>
          </Link>

          <Link 
            to="/reports" 
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center"
          >
            <div className="text-3xl mb-2">📊</div>
            <h3 className="font-semibold text-lg">Reports</h3>
            <p className="text-gray-600 text-sm">Generate reports</p>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Assigned Schools</h3>
            <p className="text-3xl font-bold text-blue-600">0</p>
            <p className="text-sm text-gray-500">Schools under your care</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Recent Visits</h3>
            <p className="text-3xl font-bold text-green-600">0</p>
            <p className="text-sm text-gray-500">Visits this month</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Devices Tracked</h3>
            <p className="text-3xl font-bold text-purple-600">0</p>
            <p className="text-sm text-gray-500">Laptops, tablets, projectors</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="text-center py-8 text-gray-500">
            <div className="text-4xl mb-2">📋</div>
            <p>No recent activity</p>
            <p className="text-sm">Start by visiting your assigned schools and logging your first visit!</p>
            <Link 
              to="/schools" 
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              View My Schools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}