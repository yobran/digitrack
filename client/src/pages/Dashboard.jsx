import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { schoolAPI } from '../services/api';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [stats, setStats] = useState({
    schools: 0,
    devices: 0,
    visits: 0
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await schoolAPI.getMySchools();
      const schools = response.data;

      // Calculate stats
      const schoolCount = schools.length;
      const deviceCount = schools.reduce((total, school) => total + (school.devices?.length || 0), 0);
      const visitCount = schools.reduce((total, school) => total + (school.visits?.length || 0), 0);

      // Get recent visits (last 5)
      const allVisits = schools.flatMap(school => 
        (school.visits || []).map(visit => ({
          ...visit,
          schoolName: school.name
        }))
      ).sort((a, b) => new Date(b.visitDate) - new Date(a.visitDate)).slice(0, 5);

      setStats({
        schools: schoolCount,
        devices: deviceCount,
        visits: visitCount
      });
      setRecentActivity(allVisits);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading dashboard...</div>
      </div>
    );
  }

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
            <p className="text-3xl font-bold text-blue-600">{stats.schools}</p>
            <p className="text-sm text-gray-500">Schools under your care</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Recent Visits</h3>
            <p className="text-3xl font-bold text-green-600">{stats.visits}</p>
            <p className="text-sm text-gray-500">Visits this month</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Devices Tracked</h3>
            <p className="text-3xl font-bold text-purple-600">{stats.devices}</p>
            <p className="text-sm text-gray-500">Laptops, tablets, projectors</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          {recentActivity.length === 0 ? (
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
          ) : (
            <div className="space-y-4">
              {recentActivity.map((visit, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Visit to {visit.schoolName}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(visit.visitDate).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    Completed
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}