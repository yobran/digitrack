import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { schoolAPI } from '../services/api';
import { Link } from 'react-router-dom';

export default function Schools() {
  const { user } = useAuth();
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await schoolAPI.getMySchools();
      setSchools(response.data);
    } catch (err) {
      setError('Failed to load schools');
      console.error('Error fetching schools:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading your schools...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Schools</h1>
            <p className="text-gray-600">Schools assigned to you for DLP monitoring</p>
          </div>
          <Link 
            to="/dashboard" 
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Back to Dashboard
          </Link>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Schools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="text-6xl mb-4">🏫</div>
              <h3 className="text-xl font-semibold mb-2">No Schools Assigned</h3>
              <p className="text-gray-600 mb-4">You haven't been assigned any schools yet.</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Request Schools
              </button>
            </div>
          ) : (
            schools.map((school) => (
              <div key={school.id} className="bg-white rounded-lg shadow hover:shadow-md transition">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{school.name}</h3>
                      <p className="text-gray-600 text-sm">Code: {school.code}</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Active
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">📍</span>
                      {school.location}, {school.county}
                    </div>
                    {school.principal && (
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">👨‍🏫</span>
                        Principal: {school.principal}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">{school.devices?.length || 0}</p>
                      <p className="text-xs text-gray-600">Devices</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">{school.visits?.length || 0}</p>
                      <p className="text-xs text-gray-600">Visits</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link 
                      to={`/schools/${school.id}`}
                      className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                    >
                      View Details
                    </Link>
                    <Link 
                      to={`/log-visit?school=${school.id}`}
                      className="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                    >
                      Log Visit
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}