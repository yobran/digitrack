import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { schoolAPI, visitAPI } from '../services/api';

export default function LogVisit() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState('');
  const [formData, setFormData] = useState({
    visitDate: new Date().toISOString().split('T')[0],
    gpsLatitude: '',
    gpsLongitude: '',
    notes: '',
  });
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSchools();
    getCurrentLocation();
    
    // Pre-select school from URL parameter
    const schoolId = searchParams.get('school');
    if (schoolId) {
      setSelectedSchool(schoolId);
    }
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await schoolAPI.getMySchools();
      setSchools(response.data);
    } catch (err) {
      setError('Failed to load schools');
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            gpsLatitude: position.coords.latitude,
            gpsLongitude: position.coords.longitude
          }));
        },
        (error) => {
          console.log('GPS not available:', error);
        }
      );
    }
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    
    // Validate file types and size
    const validFiles = files.filter(file => {
      if (!file.type.startsWith('image/')) {
        alert(`❌ ${file.name} is not an image file`);
        return false;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert(`❌ ${file.name} is too large (max 5MB)`);
        return false;
      }
      return true;
    });

    setPhotos(prev => [...prev, ...validFiles]);
  };

  const removePhoto = (index) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSchool) {
      setError('Please select a school');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const visitData = new FormData();
      visitData.append('schoolId', selectedSchool);
      visitData.append('visitDate', formData.visitDate);
      visitData.append('gpsLatitude', formData.gpsLatitude);
      visitData.append('gpsLongitude', formData.gpsLongitude);
      visitData.append('notes', formData.notes);

      // Append photos
      photos.forEach(photo => {
        visitData.append('photos', photo);
      });

      const response = await visitAPI.logVisit(visitData);
      
      alert('✅ Visit logged successfully with photos!');
      navigate('/schools');
      
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to log visit');
    } finally {
      setLoading(false);
    }
  };

  const takePhoto = () => {
    alert('📸 Camera access coming soon! For now, use "Choose Files" to upload photos from your device.');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Log School Visit</h1>
            <p className="text-gray-600">Record your DLP field visit with photo evidence</p>
          </div>
          <Link 
            to="/schools" 
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Back to Schools
          </Link>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Visit Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
          {/* School Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select School *
            </label>
            <select
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Choose a school</option>
              {schools.map((school) => (
                <option key={school.id} value={school.id}>
                  {school.name} - {school.code}
                </option>
              ))}
            </select>
          </div>

          {/* Visit Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Visit Date *
            </label>
            <input
              type="date"
              value={formData.visitDate}
              onChange={(e) => setFormData(prev => ({ ...prev, visitDate: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* GPS Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GPS Latitude
              </label>
              <input
                type="number"
                step="any"
                value={formData.gpsLatitude}
                onChange={(e) => setFormData(prev => ({ ...prev, gpsLatitude: e.target.value }))}
                placeholder="Auto-detected"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GPS Longitude
              </label>
              <input
                type="number"
                step="any"
                value={formData.gpsLongitude}
                onChange={(e) => setFormData(prev => ({ ...prev, gpsLongitude: e.target.value }))}
                placeholder="Auto-detected"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Photo Upload - Enhanced */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Visit Photos (Optional)
            </label>
            
            {/* Photo Actions */}
            <div className="flex gap-2 mb-4">
              <label className="flex-1 cursor-pointer">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
                <div className="w-full p-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition">
                  📁 Choose Files
                </div>
              </label>
              
              <button
                type="button"
                onClick={takePhoto}
                className="flex-1 p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                📸 Take Photo
              </button>
            </div>

            {/* Photo Preview */}
            {photos.length > 0 && (
              <div className="border rounded-lg p-4 bg-gray-50">
                <h4 className="font-medium text-gray-700 mb-2">
                  Selected Photos ({photos.length})
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {photos.map((photo, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt={`Visit photo ${index + 1}`}
                        className="w-full h-24 object-cover rounded border"
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition"
                      >
                        ×
                      </button>
                      <div className="text-xs text-gray-600 truncate mt-1">
                        {photo.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Visit Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Visit Notes & Observations
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              rows={4}
              placeholder="Describe your visit, observations, issues found, recommendations..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {loading ? '📸 Logging Visit with Photos...' : '📝 Log Visit with Photos'}
            </button>
            <Link
              to="/schools"
              className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 text-center font-medium"
            >
              Cancel
            </Link>
          </div>
        </form>

        {/* Quick Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <h3 className="font-semibold text-blue-800 mb-2">💡 Photo Documentation Tips</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Take photos of devices showing serial numbers</li>
            <li>• Capture any damaged or broken equipment</li>
            <li>• Document classroom setups and usage</li>
            <li>• Include timestamps and location evidence</li>
            <li>• Maximum 5 photos per visit (5MB each)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}