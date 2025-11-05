import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { statsAPI } from '../services/api';

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    schools: 0,
    visits: 0,
    devices: 0
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Redirect admins to admin dashboard
    if (user?.role === 'national_admin' || user?.role === 'county_admin') {
      navigate('/admin');
      return;
    }
    
    fetchDashboardData();
  }, [user, navigate]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch real data from the new stats API
      const statsResponse = await statsAPI.getDashboardStats();
      const dashboardData = statsResponse.data;

      // Set real stats from database
      setStats({
        schools: dashboardData.schools,
        visits: dashboardData.visits,
        devices: dashboardData.devices
      });

      // Set real recent activity from database
      setRecentActivity(dashboardData.recentActivity || []);

    } catch (error) {
      console.error('Dashboard data error:', error);
      // Fallback to mock data if API fails
      setStats({
        schools: 0,
        visits: 0,
        devices: 0
      });
      setRecentActivity([]);
    } finally {
      setLoading(false);
    }
  };

  // Don't render anything if redirecting admin
  if (user?.role === 'national_admin' || user?.role === 'county_admin') {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-bold text-green-700">DigiTrack DLP</h1>
                <p className="text-gray-600">Digital Literacy Programme Management System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Welcome, {user?.name}</p>
                <p className="text-sm text-gray-500">{user?.role === 'intern' ? 'DLP Field Officer' : 'Administrator'}</p>
              </div>
              <Link 
                to="/logout" 
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Link to="/schools" className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition-shadow">
            <div className="text-4xl mb-2">🏫</div>
            <h3 className="font-semibold text-gray-900">My Schools</h3>
            <p className="text-sm text-gray-600">View assigned schools</p>
          </Link>

          <Link to="/log-visit" className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition-shadow">
            <div className="text-4xl mb-2">📝</div>
            <h3 className="font-semibold text-gray-900">Log Visit</h3>
            <p className="text-sm text-gray-600">Record school visit</p>
          </Link>

          <Link to="/devices" className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition-shadow">
            <div className="text-4xl mb-2">💻</div>
            <h3 className="font-semibold text-gray-900">Devices</h3>
            <p className="text-sm text-gray-600">Manage equipment</p>
          </Link>

          <Link to="/reports" className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition-shadow">
            <div className="text-4xl mb-2">📊</div>
            <h3 className="font-semibold text-gray-900">Reports</h3>
            <p className="text-sm text-gray-600">Generate reports</p>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Assigned Schools</p>
                <p className="text-2xl font-bold text-gray-900">{stats.schools}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <span className="text-2xl">🏫</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Schools under your care</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Recent Visits</p>
                <p className="text-2xl font-bold text-gray-900">{stats.visits}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <span className="text-2xl">📝</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Visits this month</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Devices Tracked</p>
                <p className="text-2xl font-bold text-gray-900">{stats.devices}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <span className="text-2xl">💻</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Laptops, tablets, projectors</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          {recentActivity.length > 0 ? (
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-xl">📝</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(activity.timestamp).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-4xl mb-2">📋</div>
              <p className="text-gray-600 mb-4">No recent activity</p>
              <p className="text-sm text-gray-500">
                Start by visiting your assigned schools and logging your first visit!
              </p>
            </div>
          )}
        </div>

        {/* Quick Start */}
        {stats.schools === 0 && (
          <div className="bg-white rounded-lg shadow p-6 mt-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Started</h3>
            <p className="text-gray-600 mb-4">View your assigned schools to begin monitoring</p>
            <Link 
              to="/schools" 
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
            >
              View My Schools
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}