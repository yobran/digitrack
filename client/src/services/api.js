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

export const schoolAPI = {
  getMySchools: () => api.get('/schools/my-schools'),
  getSchool: (id) => api.get(`/schools/${id}`),
  createSchool: (schoolData) => api.post('/schools', schoolData),
};

export const deviceAPI = {
  addDevice: (deviceData) => api.post('/devices', deviceData),
  updateDeviceStatus: (deviceId, status) => api.patch(`/devices/${deviceId}/status`, { status }),
  getSchoolDevices: (schoolId) => api.get(`/devices/school/${schoolId}`),
  getAllDevices: () => api.get('/devices'),
};

export const visitAPI = {
  logVisit: (visitData) => api.post('/visits', visitData),
  getSchoolVisits: (schoolId) => api.get(`/visits/school/${schoolId}`),
  getMyVisits: () => api.get('/visits/my-visits'),
};

export const reportAPI = {
  generate: (data) => api.post('/reports/generate', data),
};

// Dashboard stats API
export const statsAPI = {
  getDashboardStats: () => api.get('/dashboard/stats'),
};

export const adminAPI = {
  getAllSchools: () => api.get('/admin/schools'),
  createSchool: (schoolData) => api.post('/admin/schools', schoolData),
  getUsers: () => api.get('/admin/users'),
  createUser: (userData) => api.post('/admin/users', userData), // ADDED
  addDevice: (deviceData) => api.post('/admin/devices', deviceData), // ADDED
};

export const countyAPI = {
  getCounties: () => api.get('/counties'),
  getSubCounties: (countyId) => api.get(`/counties/${countyId}/subcounties`) // ADDED
};

export default api;