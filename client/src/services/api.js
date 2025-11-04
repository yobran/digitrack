import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('digi_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API methods
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
};

export const documentAPI = {
  upload: (formData) => api.post('/documents/upload', formData),
  list: () => api.get('/documents'),
  download: (id) => api.get(`/documents/download/${id}`),
};

export const schoolAPI = {
  getMySchools: () => api.get('/schools/my-schools'),
  getSchool: (id) => api.get(`/schools/${id}`),
};

export const visitAPI = {
  logVisit: (visitData) => api.post('/visits/log', visitData),
  getSchoolVisits: (schoolId) => api.get(`/visits/school/${schoolId}`),
};
export const deviceAPI = {
  addDevice: (deviceData) => api.post('/devices/add', deviceData),
  updateDeviceStatus: (deviceId, status) => api.patch(`/devices/${deviceId}/status`, { status }),
  getSchoolDevices: (schoolId) => api.get(`/devices/school/${schoolId}`),
};

export default api;