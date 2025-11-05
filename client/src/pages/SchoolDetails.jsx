import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { schoolAPI } from '../services/api';

export default function SchoolDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [school, setSchool] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSchoolDetails();
  }, [id]);

  const fetchSchoolDetails = async () => {
    try {
      const response = await schoolAPI.getSchool(id);
      setSchool(response.data);
    } catch (err) {
      setError('Failed to load school details');
      console.error('Error fetching school:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading school details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-600 text-xl">{error}</div>
      </div>
    );
  }

  if (!school) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">School not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{school.name}</h1>
            <p className="text-gray-600">School Code: {school.code}</p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/schools"
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Back to Schools
            </Link>
            <Link
              to={`/log-visit?school=${school.id}`}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Log Visit
            </Link>
          </div>
        </div>

        {/* School Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">School Information</h2>
            <div className="space-y-3">
              <div>
                <label className="font-medium text-gray-700">Location:</label>
                <p className="text-gray-900">{school.location}</p>
              </div>
              <div>
                <label className="font-medium text-gray-700">County:</label>
                <p className="text-gray-900">{school.county}</p>
              </div>
              {school.principal && (
                <div>
                  <label className="font-medium text-gray-700">Principal:</label>
                  <p className="text-gray-900">{school.principal}</p>
                </div>
              )}
              {school.phone && (
                <div>
                  <label className="font-medium text-gray-700">Phone:</label>
                  <p className="text-gray-900">{school.phone}</p>
                </div>
              )}
            </div>
          </div>

          {/* Devices Summary */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Devices Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Total Devices:</span>
                <span className="font-bold">{school.devices?.length || 0}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Working:</span>
                <span className="font-bold">
                  {school.devices?.filter(d => d.status === 'working').length || 0}
                </span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>Broken:</span>
                <span className="font-bold">
                  {school.devices?.filter(d => d.status === 'broken').length || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link
                to={`/log-visit?school=${school.id}`}
                className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Log New Visit
              </Link>
              <Link
                to="/devices"
                className="block w-full text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Manage Devices
              </Link>
              <Link
                to="/reports"
                className="block w-full text-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Generate Report
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Visits */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Visits</h2>
          {school.visits && school.visits.length > 0 ? (
            <div className="space-y-4">
              {school.visits.map((visit) => (
                <div key={visit.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">
                        {new Date(visit.visitDate).toLocaleDateString()}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {visit.notes || 'No notes provided'}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {visit.user?.name || 'Unknown user'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No visits recorded yet</p>
          )}
        </div>
      </div>
    </div>
  );
}