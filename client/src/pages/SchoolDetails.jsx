import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { schoolAPI } from '../services/api';

export default function SchoolDetails() {
  const { id } = useParams();
  const { user } = useAuth();
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

  if (error || !school) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-red-600">{error || 'School not found'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{school.name}</h1>
            <p className="text-gray-600">School Code: {school.code}</p>
          </div>
          <Link 
            to="/schools" 
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Back to Schools
          </Link>
        </div>

        {/* School Information */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">School Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>Location:</strong> {school.location}, {school.county}</p>
              <p><strong>Principal:</strong> {school.principal || 'Not specified'}</p>
            </div>
            <div>
              <p><strong>Phone:</strong> {school.phone || 'Not specified'}</p>
              <p><strong>Registered:</strong> {new Date(school.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* Devices Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Devices</h2>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
              {school.devices?.length || 0} devices
            </span>
          </div>
          
          {school.devices?.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No devices registered for this school.</p>
          ) : (
            <div className="space-y-4">
              {school.devices?.map((device) => (
                <div key={device.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{device.deviceType}</h3>
                      <p className="text-sm text-gray-600">Serial: {device.serialNumber}</p>
                      <p className="text-sm">{device.notes}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      device.status === 'working' ? 'bg-green-100 text-green-800' :
                      device.status === 'broken' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {device.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Added: {new Date(device.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Visit History */}
        {/* Inside the visit mapping in SchoolDetails.jsx */}
{visit.visitPhotos && visit.visitPhotos.length > 0 && (
  <div className="mt-2">
    <p className="text-sm text-gray-600 mb-1">Photos:</p>
    <div className="flex gap-2">
      {visit.visitPhotos.map((photo, photoIndex) => (
        <img
          key={photoIndex}
          src={`http://localhost:5000${photo.photoUrl}`}
          alt={`Visit photo ${photoIndex + 1}`}
          className="w-16 h-16 object-cover rounded border cursor-pointer"
          onClick={() => window.open(`http://localhost:5000${photo.photoUrl}`, '_blank')}
        />
      ))}
    </div>
  </div>
)}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Visit History</h2>
          {school.visits?.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>No visits recorded yet.</p>
              <Link 
                to={`/log-visit?school=${school.id}`}
                className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Log First Visit
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {school.visits?.map((visit) => (
                <div key={visit.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">
                        Visit on {new Date(visit.visitDate).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-600">By {visit.user?.name}</p>
                      {visit.notes && (
                        <p className="text-sm mt-2">{visit.notes}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}