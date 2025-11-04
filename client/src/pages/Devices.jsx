import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { schoolAPI, deviceAPI } from '../services/api';

export default function Devices() {
  const { user } = useAuth();
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState('');
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDevice, setNewDevice] = useState({
    deviceType: 'Laptop',
    serialNumber: '',
    status: 'working',
    notes: ''
  });

  useEffect(() => {
    fetchSchools();
  }, []);

  useEffect(() => {
    if (selectedSchool) {
      fetchSchoolDevices(selectedSchool);
    }
  }, [selectedSchool]);

  const fetchSchools = async () => {
    try {
      const response = await schoolAPI.getMySchools();
      setSchools(response.data);
      if (response.data.length > 0) {
        setSelectedSchool(response.data[0].id);
      }
    } catch (err) {
      setError('Failed to load schools');
    } finally {
      setLoading(false);
    }
  };

  const fetchSchoolDevices = async (schoolId) => {
    try {
      const response = await deviceAPI.getSchoolDevices(schoolId);
      setDevices(response.data);
    } catch (err) {
      setError('Failed to load devices');
    }
  };

  const handleAddDevice = async (e) => {
    e.preventDefault();
    if (!selectedSchool) {
      setError('Please select a school first');
      return;
    }

    try {
      const deviceData = {
        schoolId: selectedSchool,
        deviceType: newDevice.deviceType,
        serialNumber: newDevice.serialNumber,
        status: newDevice.status,
        notes: newDevice.notes
      };

      const response = await deviceAPI.addDevice(deviceData);
      
      setDevices(prev => [...prev, response.data.device]);
      setNewDevice({
        deviceType: 'Laptop',
        serialNumber: '',
        status: 'working',
        notes: ''
      });
      setShowAddForm(false);
      alert('✅ Device added successfully!');
      
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to add device');
    }
  };

  const updateDeviceStatus = async (deviceId, newStatus) => {
    try {
      const response = await deviceAPI.updateDeviceStatus(deviceId, newStatus);
      setDevices(prev => 
        prev.map(device => 
          device.id === deviceId ? { ...device, status: newStatus } : device
        )
      );
      alert(`✅ Device status updated to: ${newStatus}`);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update device status');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'working': return 'bg-green-100 text-green-800';
      case 'broken': return 'bg-red-100 text-red-800';
      case 'stolen': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading devices...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Device Management</h1>
            <p className="text-gray-600">Track and manage DLP equipment</p>
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

        {/* School Selection */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select School
          </label>
          <select
            value={selectedSchool}
            onChange={(e) => setSelectedSchool(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Choose a school</option>
            {schools.map((school) => (
              <option key={school.id} value={school.id}>
                {school.name} - {school.code} ({school.devices?.length || 0} devices)
              </option>
            ))}
          </select>
        </div>

        {/* Add Device Button */}
        {selectedSchool && (
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              Devices at {schools.find(s => s.id == selectedSchool)?.name}
            </h2>
            <button
              onClick={() => setShowAddForm(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              ➕ Add New Device
            </button>
          </div>
        )}

        {/* Add Device Form */}
        {showAddForm && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Add New Device</h3>
            <form onSubmit={handleAddDevice} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Device Type
                  </label>
                  <select
                    value={newDevice.deviceType}
                    onChange={(e) => setNewDevice(prev => ({ ...prev, deviceType: e.target.value }))}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="Laptop">Laptop</option>
                    <option value="Tablet">Tablet</option>
                    <option value="Projector">Projector</option>
                    <option value="Printer">Printer</option>
                    <option value="Router">Router</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Serial Number
                  </label>
                  <input
                    type="text"
                    value={newDevice.serialNumber}
                    onChange={(e) => setNewDevice(prev => ({ ...prev, serialNumber: e.target.value }))}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., LP-001"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={newDevice.status}
                    onChange={(e) => setNewDevice(prev => ({ ...prev, status: e.target.value }))}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="working">Working</option>
                    <option value="broken">Broken</option>
                    <option value="stolen">Stolen/Missing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notes
                  </label>
                  <input
                    type="text"
                    value={newDevice.notes}
                    onChange={(e) => setNewDevice(prev => ({ ...prev, notes: e.target.value }))}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Computer Lab, Staff Room..."
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Add Device
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Devices List */}
        {selectedSchool ? (
          devices.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">No Devices Found</h3>
              <p className="text-gray-600 mb-4">This school doesn't have any devices registered yet.</p>
              <button
                onClick={() => setShowAddForm(true)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add First Device
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {devices.map((device) => (
                <div key={device.id} className="bg-white rounded-lg shadow hover:shadow-md transition">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{device.deviceType}</h3>
                        <p className="text-sm text-gray-600">Serial: {device.serialNumber}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(device.status)}`}>
                        {device.status}
                      </span>
                    </div>
                    
                    {device.notes && (
                      <p className="text-sm text-gray-700 mb-4">{device.notes}</p>
                    )}

                    <p className="text-xs text-gray-500 mb-4">
                      Added: {new Date(device.createdAt).toLocaleDateString()}
                    </p>

                    <div className="flex gap-2">
                      <button
                        onClick={() => updateDeviceStatus(device.id, 'working')}
                        className="flex-1 text-center px-2 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                      >
                        ✅ Working
                      </button>
                      <button
                        onClick={() => updateDeviceStatus(device.id, 'broken')}
                        className="flex-1 text-center px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                      >
                        🔧 Broken
                      </button>
                      <button
                        onClick={() => updateDeviceStatus(device.id, 'stolen')}
                        className="flex-1 text-center px-2 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700"
                      >
                        ⚠️ Missing
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600">Please select a school to view devices</p>
          </div>
        )}
      </div>
    </div>
  );
}