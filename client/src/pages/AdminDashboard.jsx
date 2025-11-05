import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { statsAPI, adminAPI, countyAPI } from '../services/api';

export default function AdminDashboard() {
    const { user, logout } = useAuth();
    const [activeTab, setActiveTab] = useState('overview');
    const [schools, setSchools] = useState([]);
    const [interns, setInterns] = useState([]);
    const [counties, setCounties] = useState([]);
    const [stats, setStats] = useState({ schools: 0, visits: 0, devices: 0, interns: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAdminData();
    }, []);

    const fetchAdminData = async () => {
        try {
            setLoading(true);
            const [statsResponse, schoolsResponse, internsResponse, countiesResponse] = await Promise.all([
                statsAPI.getDashboardStats(),
                adminAPI.getAllSchools(),
                adminAPI.getUsers(),
                countyAPI.getCounties()
            ]);
            
            setStats(statsResponse.data);
            setSchools(schoolsResponse.data);
            setInterns(internsResponse.data.filter(user => user.role === 'intern'));
            setCounties(countiesResponse.data);
        } catch (error) {
            console.error('Admin data error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            logout();
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-xl">Loading admin dashboard...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div>
                            <h1 className="text-3xl font-bold text-green-700">DigiTrack DLP - Admin</h1>
                            <p className="text-gray-600">County Management System</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="text-right">
                                <p className="text-sm font-medium text-gray-900">Welcome, {user?.name}</p>
                                <p className="text-sm text-gray-500 capitalize">{user?.role?.replace('_', ' ')}</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
                            >
                                <span className="mr-2">🚪</span>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8">
                        {['overview', 'schools', 'interns', 'devices', 'reports'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === tab
                                        ? 'border-green-500 text-green-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="mt-6">
                    {activeTab === 'overview' && <OverviewTab stats={stats} schools={schools} />}
                    {activeTab === 'schools' && <SchoolsTab schools={schools} counties={counties} interns={interns} onRefresh={fetchAdminData} />}
                    {activeTab === 'interns' && <InternsTab interns={interns} counties={counties} onRefresh={fetchAdminData} />}
                    {activeTab === 'devices' && <DevicesTab schools={schools} onRefresh={fetchAdminData} />}
                    {activeTab === 'reports' && <ReportsTab schools={schools} interns={interns} stats={stats} />}
                </div>
            </div>
        </div>
    );
}

// Tab Components
function OverviewTab({ stats, schools }) {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Total Schools</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.schools}</p>
                        </div>
                        <div className="p-3 bg-green-100 rounded-lg">
                            <span className="text-2xl">🏫</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Total Visits</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.visits}</p>
                        </div>
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <span className="text-2xl">📝</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Total Devices</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.devices}</p>
                        </div>
                        <div className="p-3 bg-purple-100 rounded-lg">
                            <span className="text-2xl">💻</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Active Interns</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.interns || 0}</p>
                        </div>
                        <div className="p-3 bg-yellow-100 rounded-lg">
                            <span className="text-2xl">👨‍💼</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Schools */}
            <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recently Added Schools</h3>
                {schools.slice(0, 5).map(school => (
                    <div key={school.id} className="flex justify-between items-center py-3 border-b">
                        <div>
                            <p className="font-medium">{school.name}</p>
                            <p className="text-sm text-gray-500">{school.location} • {school.subCounty?.name}</p>
                        </div>
                        <div className="text-right">
                            <span className="text-sm text-gray-500 block">{school.code}</span>
                            <span className="text-xs text-gray-400">
                                {school.user ? `Assigned to: ${school.user.name}` : 'Unassigned'}
                            </span>
                        </div>
                    </div>
                ))}
                {schools.length === 0 && (
                    <p className="text-gray-500 text-center py-4">No schools added yet</p>
                )}
            </div>
        </div>
    );
}

function SchoolsTab({ schools, counties, interns, onRefresh }) {
    const [showAddForm, setShowAddForm] = useState(false);
    const [subCounties, setSubCounties] = useState([]);
    const [loadingSubCounties, setLoadingSubCounties] = useState(false);
    const [newSchool, setNewSchool] = useState({
        name: '', code: '', location: '', 
        headteacherName: '', headteacherPhone: '',
        hasElectricity: false, hasInternet: false,
        totalStudents: 0, subCountyId: '', countyId: '', userId: ''
    });

    // Fetch subcounties when county is selected
    useEffect(() => {
        if (newSchool.countyId) {
            fetchSubCounties(newSchool.countyId);
        } else {
            setSubCounties([]);
        }
    }, [newSchool.countyId]);

    const fetchSubCounties = async (countyId) => {
        try {
            setLoadingSubCounties(true);
            const response = await countyAPI.getSubCounties(countyId);
            setSubCounties(response.data);
        } catch (error) {
            console.error('Error fetching subcounties:', error);
            setSubCounties([]);
        } finally {
            setLoadingSubCounties(false);
        }
    };

    const handleAddSchool = async (e) => {
        e.preventDefault();
        try {
            await adminAPI.createSchool(newSchool);
            setShowAddForm(false);
            setNewSchool({
                name: '', code: '', location: '', 
                headteacherName: '', headteacherPhone: '',
                hasElectricity: false, hasInternet: false,
                totalStudents: 0, subCountyId: '', countyId: '', userId: ''
            });
            setSubCounties([]);
            onRefresh();
        } catch (error) {
            console.error('Error adding school:', error);
            alert('Error adding school: ' + (error.response?.data?.error || error.message));
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">School Management ({schools.length} schools)</h2>
                <button
                    onClick={() => setShowAddForm(true)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center"
                >
                    <span className="mr-2">+</span> Add School
                </button>
            </div>

            {showAddForm && (
                <div className="bg-white p-6 rounded-lg shadow mb-6">
                    <h3 className="text-lg font-semibold mb-4">Add New School</h3>
                    <form onSubmit={handleAddSchool} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <h4 className="font-medium mb-2">Basic Information</h4>
                        </div>
                        
                        <input
                            type="text"
                            placeholder="School Name *"
                            value={newSchool.name}
                            onChange={(e) => setNewSchool({...newSchool, name: e.target.value})}
                            className="border rounded-lg p-2"
                            required
                        />
                        <input
                            type="text"
                            placeholder="School Code *"
                            value={newSchool.code}
                            onChange={(e) => setNewSchool({...newSchool, code: e.target.value})}
                            className="border rounded-lg p-2"
                            required
                        />
                        
                        <input
                            type="text"
                            placeholder="Location *"
                            value={newSchool.location}
                            onChange={(e) => setNewSchool({...newSchool, location: e.target.value})}
                            className="border rounded-lg p-2"
                            required
                        />
                        <input
                            type="number"
                            placeholder="Total Students"
                            value={newSchool.totalStudents}
                            onChange={(e) => setNewSchool({...newSchool, totalStudents: parseInt(e.target.value) || 0})}
                            className="border rounded-lg p-2"
                        />

                        <div className="md:col-span-2">
                            <h4 className="font-medium mb-2">Headteacher Information</h4>
                        </div>

                        <input
                            type="text"
                            placeholder="Headteacher Name *"
                            value={newSchool.headteacherName}
                            onChange={(e) => setNewSchool({...newSchool, headteacherName: e.target.value})}
                            className="border rounded-lg p-2"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Headteacher Phone *"
                            value={newSchool.headteacherPhone}
                            onChange={(e) => setNewSchool({...newSchool, headteacherPhone: e.target.value})}
                            className="border rounded-lg p-2"
                            required
                        />

                        <div className="md:col-span-2">
                            <h4 className="font-medium mb-2">Location & Assignment</h4>
                        </div>

                        <select
                            value={newSchool.countyId}
                            onChange={(e) => setNewSchool({...newSchool, countyId: e.target.value, subCountyId: ''})}
                            className="border rounded-lg p-2"
                            required
                        >
                            <option value="">Select County *</option>
                            {counties.map(county => (
                                <option key={county.id} value={county.id}>{county.name}</option>
                            ))}
                        </select>

                        <select
                            value={newSchool.subCountyId}
                            onChange={(e) => setNewSchool({...newSchool, subCountyId: e.target.value})}
                            className="border rounded-lg p-2"
                            required
                            disabled={!newSchool.countyId || loadingSubCounties}
                        >
                            <option value="">{loadingSubCounties ? 'Loading sub-counties...' : 'Select Sub-County *'}</option>
                            {subCounties.map(subCounty => (
                                <option key={subCounty.id} value={subCounty.id}>{subCounty.name}</option>
                            ))}
                        </select>

                        <select
                            value={newSchool.userId}
                            onChange={(e) => setNewSchool({...newSchool, userId: e.target.value})}
                            className="border rounded-lg p-2"
                        >
                            <option value="">Assign to Intern (Optional)</option>
                            {interns.map(intern => (
                                <option key={intern.id} value={intern.id}>{intern.name}</option>
                            ))}
                        </select>

                        <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={newSchool.hasElectricity}
                                    onChange={(e) => setNewSchool({...newSchool, hasElectricity: e.target.checked})}
                                    className="mr-2"
                                />
                                Has Electricity
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={newSchool.hasInternet}
                                    onChange={(e) => setNewSchool({...newSchool, hasInternet: e.target.checked})}
                                    className="mr-2"
                                />
                                Has Internet
                            </label>
                        </div>

                        <div className="md:col-span-2 flex space-x-2 pt-4">
                            <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                                Save School
                            </button>
                            <button 
                                type="button" 
                                onClick={() => setShowAddForm(false)}
                                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left p-4 font-semibold text-gray-900">School Name</th>
                            <th className="text-left p-4 font-semibold text-gray-900">Code</th>
                            <th className="text-left p-4 font-semibold text-gray-900">Location</th>
                            <th className="text-left p-4 font-semibold text-gray-900">Headteacher</th>
                            <th className="text-left p-4 font-semibold text-gray-900">Assigned To</th>
                            <th className="text-left p-4 font-semibold text-gray-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {schools.map(school => (
                            <tr key={school.id} className="hover:bg-gray-50">
                                <td className="p-4">
                                    <div>
                                        <p className="font-medium text-gray-900">{school.name}</p>
                                        <p className="text-sm text-gray-500">{school.subCounty?.name}</p>
                                    </div>
                                </td>
                                <td className="p-4 text-gray-900">{school.code}</td>
                                <td className="p-4 text-gray-900">{school.location}</td>
                                <td className="p-4">
                                    <p className="text-gray-900">{school.headteacherName}</p>
                                    <p className="text-sm text-gray-500">{school.headteacherPhone}</p>
                                </td>
                                <td className="p-4">
                                    {school.user ? (
                                        <span className="text-green-600 font-medium">{school.user.name}</span>
                                    ) : (
                                        <span className="text-orange-500">Unassigned</span>
                                    )}
                                </td>
                                <td className="p-4">
                                    <button className="text-blue-600 hover:text-blue-800 mr-3 text-sm font-medium">Edit</button>
                                    <button className="text-red-600 hover:text-red-800 text-sm font-medium">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {schools.length === 0 && (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No schools found. Add your first school above.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function InternsTab({ interns, counties, onRefresh }) {
    const [showAddForm, setShowAddForm] = useState(false);
    const [newIntern, setNewIntern] = useState({
        name: '', email: '', phone: '', countyId: '', password: 'temp123'
    });

    const handleAddIntern = async (e) => {
        e.preventDefault();
        try {
            await adminAPI.createUser({ 
                ...newIntern, 
                role: 'intern',
                password: newIntern.password
            });
            setShowAddForm(false);
            setNewIntern({ name: '', email: '', phone: '', countyId: '', password: 'temp123' });
            onRefresh();
        } catch (error) {
            console.error('Error adding intern:', error);
            alert('Error adding intern: ' + (error.response?.data?.error || error.message));
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Intern Management ({interns.length} interns)</h2>
                <button
                    onClick={() => setShowAddForm(true)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center"
                >
                    <span className="mr-2">+</span> Add Intern
                </button>
            </div>

            {showAddForm && (
                <div className="bg-white p-6 rounded-lg shadow mb-6">
                    <h3 className="text-lg font-semibold mb-4">Add New Intern</h3>
                    <form onSubmit={handleAddIntern} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Full Name *"
                            value={newIntern.name}
                            onChange={(e) => setNewIntern({...newIntern, name: e.target.value})}
                            className="border rounded-lg p-2"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email *"
                            value={newIntern.email}
                            onChange={(e) => setNewIntern({...newIntern, email: e.target.value})}
                            className="border rounded-lg p-2"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            value={newIntern.phone}
                            onChange={(e) => setNewIntern({...newIntern, phone: e.target.value})}
                            className="border rounded-lg p-2"
                        />
                        <select
                            value={newIntern.countyId}
                            onChange={(e) => setNewIntern({...newIntern, countyId: e.target.value})}
                            className="border rounded-lg p-2"
                        >
                            <option value="">Select County (Optional)</option>
                            {counties.map(county => (
                                <option key={county.id} value={county.id}>{county.name}</option>
                            ))}
                        </select>
                        <input
                            type="password"
                            placeholder="Temporary Password"
                            value={newIntern.password}
                            onChange={(e) => setNewIntern({...newIntern, password: e.target.value})}
                            className="border rounded-lg p-2"
                            required
                        />
                        <div className="md:col-span-2 flex space-x-2">
                            <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                                Create Intern
                            </button>
                            <button 
                                type="button" 
                                onClick={() => setShowAddForm(false)}
                                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left p-4 font-semibold">Name</th>
                            <th className="text-left p-4 font-semibold">Email</th>
                            <th className="text-left p-4 font-semibold">Phone</th>
                            <th className="text-left p-4 font-semibold">County</th>
                            <th className="text-left p-4 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {interns.map(intern => (
                            <tr key={intern.id} className="border-b hover:bg-gray-50">
                                <td className="p-4">{intern.name}</td>
                                <td className="p-4">{intern.email}</td>
                                <td className="p-4">{intern.phone || 'N/A'}</td>
                                <td className="p-4">{intern.county?.name || 'Not assigned'}</td>
                                <td className="p-4">
                                    <button className="text-blue-600 hover:text-blue-800 mr-3 text-sm font-medium">View Schools</button>
                                    <button className="text-green-600 hover:text-green-800 text-sm font-medium">Assign Schools</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {interns.length === 0 && (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No interns found. Add your first intern above.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function DevicesTab({ schools, onRefresh }) {
    const [showAddForm, setShowAddForm] = useState(false);
    const [newDevice, setNewDevice] = useState({
        schoolId: '', deviceType: '', serialNumber: '', status: 'working', notes: ''
    });

    const handleAddDevice = async (e) => {
        e.preventDefault();
        try {
            await adminAPI.addDevice(newDevice);
            setShowAddForm(false);
            setNewDevice({ schoolId: '', deviceType: '', serialNumber: '', status: 'working', notes: '' });
            onRefresh();
        } catch (error) {
            console.error('Error adding device:', error);
            alert('Error adding device: ' + (error.response?.data?.error || error.message));
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Device Management</h2>
                <button
                    onClick={() => setShowAddForm(true)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center"
                >
                    <span className="mr-2">+</span> Add Device
                </button>
            </div>

            {showAddForm && (
                <div className="bg-white p-6 rounded-lg shadow mb-6">
                    <h3 className="text-lg font-semibold mb-4">Add New Device</h3>
                    <form onSubmit={handleAddDevice} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select
                            value={newDevice.schoolId}
                            onChange={(e) => setNewDevice({...newDevice, schoolId: e.target.value})}
                            className="border rounded-lg p-2"
                            required
                        >
                            <option value="">Select School *</option>
                            {schools.map(school => (
                                <option key={school.id} value={school.id}>{school.name} - {school.code}</option>
                            ))}
                        </select>
                        <select
                            value={newDevice.deviceType}
                            onChange={(e) => setNewDevice({...newDevice, deviceType: e.target.value})}
                            className="border rounded-lg p-2"
                            required
                        >
                            <option value="">Device Type *</option>
                            <option value="laptop">Laptop</option>
                            <option value="tablet">Tablet</option>
                            <option value="projector">Projector</option>
                            <option value="router">Router</option>
                            <option value="printer">Printer</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Serial Number *"
                            value={newDevice.serialNumber}
                            onChange={(e) => setNewDevice({...newDevice, serialNumber: e.target.value})}
                            className="border rounded-lg p-2"
                            required
                        />
                        <select
                            value={newDevice.status}
                            onChange={(e) => setNewDevice({...newDevice, status: e.target.value})}
                            className="border rounded-lg p-2"
                        >
                            <option value="working">Working</option>
                            <option value="maintenance">Maintenance</option>
                            <option value="faulty">Faulty</option>
                            <option value="retired">Retired</option>
                        </select>
                        <textarea
                            placeholder="Notes (Optional)"
                            value={newDevice.notes}
                            onChange={(e) => setNewDevice({...newDevice, notes: e.target.value})}
                            className="border rounded-lg p-2 md:col-span-2"
                            rows="3"
                        />
                        <div className="md:col-span-2 flex space-x-2">
                            <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                                Add Device
                            </button>
                            <button 
                                type="button" 
                                onClick={() => setShowAddForm(false)}
                                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-600">Device management features coming soon...</p>
                <p className="text-sm text-gray-500 mt-2">Total schools: {schools.length}</p>
            </div>
        </div>
    );
}

function ReportsTab({ schools, interns, stats }) {
    const [selectedReport, setSelectedReport] = useState('summary');

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Reports & Analytics</h2>
                <select
                    value={selectedReport}
                    onChange={(e) => setSelectedReport(e.target.value)}
                    className="border rounded-lg p-2"
                >
                    <option value="summary">Summary Report</option>
                    <option value="schools">Schools Report</option>
                    <option value="interns">Interns Performance</option>
                    <option value="devices">Devices Report</option>
                </select>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">
                    {selectedReport === 'summary' && 'System Summary Report'}
                    {selectedReport === 'schools' && 'Schools Overview Report'}
                    {selectedReport === 'interns' && 'Interns Performance Report'}
                    {selectedReport === 'devices' && 'Devices Inventory Report'}
                </h3>
                
                {selectedReport === 'summary' && (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">Total Schools</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.schools}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">Total Visits</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.visits}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">Total Devices</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.devices}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">Active Interns</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.interns}</p>
                        </div>
                    </div>
                )}

                {selectedReport === 'schools' && (
                    <div>
                        <p className="text-sm text-gray-600 mb-4">List of schools and basic details.</p>
                        <div className="overflow-auto max-h-80">
                            <table className="min-w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="text-left p-3 font-semibold">Name</th>
                                        <th className="text-left p-3 font-semibold">Code</th>
                                        <th className="text-left p-3 font-semibold">Sub-County</th>
                                        <th className="text-left p-3 font-semibold">Assigned</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {schools.map(s => (
                                        <tr key={s.id} className="border-b hover:bg-gray-50">
                                            <td className="p-3">{s.name}</td>
                                            <td className="p-3">{s.code}</td>
                                            <td className="p-3">{s.subCounty?.name || 'N/A'}</td>
                                            <td className="p-3">{s.user ? s.user.name : 'Unassigned'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {schools.length === 0 && <p className="text-gray-500 mt-4">No schools available.</p>}
                    </div>
                )}

                {selectedReport === 'interns' && (
                    <div>
                        <p className="text-sm text-gray-600 mb-4">Interns and assigned schools count.</p>
                        <div className="overflow-auto max-h-80">
                            <table className="min-w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="text-left p-3 font-semibold">Intern</th>
                                        <th className="text-left p-3 font-semibold">Email</th>
                                        <th className="text-left p-3 font-semibold">County</th>
                                        <th className="text-left p-3 font-semibold">Assigned Schools</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {interns.map(intern => (
                                        <tr key={intern.id} className="border-b hover:bg-gray-50">
                                            <td className="p-3">{intern.name}</td>
                                            <td className="p-3">{intern.email}</td>
                                            <td className="p-3">{intern.county?.name || 'N/A'}</td>
                                            <td className="p-3">
                                                {schools.filter(s => s.user?.id === intern.id).length}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {interns.length === 0 && <p className="text-gray-500 mt-4">No interns available.</p>}
                    </div>
                )}

                {selectedReport === 'devices' && (
                    <div>
                        <p className="text-sm text-gray-600 mb-4">Devices inventory summary (placeholder).</p>
                        <p className="text-gray-500">Device reporting and charts will be added here.</p>
                    </div>
                )}
            </div>
        </div>
    );
}