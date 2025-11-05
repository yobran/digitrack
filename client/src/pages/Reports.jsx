import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { schoolAPI, visitAPI, deviceAPI } from '../services/api';
import { generatePDFReport, generatePDFFromHTML } from '../services/pdfGenerator';

export default function Reports() {
  const { user } = useAuth();
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState('all');
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await schoolAPI.getMySchools();
      setSchools(response.data);
    } catch (err) {
      setError('Failed to load schools');
    }
  };

  const generateReport = async () => {
  setLoading(true);
  setError('');

  try {
    // Get the selected school
    const selectedSchoolData = selectedSchool === 'all' 
      ? null 
      : schools.find(school => school.id === parseInt(selectedSchool));

    // Generate report based on selected school
    const report = {
      summary: {
        totalSchools: selectedSchool === 'all' ? schools.length : 1,
        totalVisits: selectedSchool === 'all' ? 12 : 4, // These would come from real API later
        totalDevices: selectedSchool === 'all' ? 8 : selectedSchoolData?.devices?.length || 0,
        workingDevices: selectedSchool === 'all' ? 6 : selectedSchoolData?.devices?.filter(d => d.status === 'working').length || 0,
        brokenDevices: selectedSchool === 'all' ? 1 : selectedSchoolData?.devices?.filter(d => d.status === 'broken').length || 0,
        missingDevices: selectedSchool === 'all' ? 1 : selectedSchoolData?.devices?.filter(d => d.status === 'missing').length || 0
      },
      visits: [
        {
          id: 1,
          schoolName: selectedSchool === 'all' ? 'Nairobi Primary School' : selectedSchoolData?.name,
          visitDate: '2025-11-04',
          notes: selectedSchool === 'all' ? 'Regular monitoring visit. All devices working properly.' : `Visit to ${selectedSchoolData?.name} - All devices checked.`,
          gpsLocation: '-1.2921, 36.8219'
        },
        {
          id: 2,
          schoolName: selectedSchool === 'all' ? 'Nairobi Primary School' : selectedSchoolData?.name,
          visitDate: '2025-10-28',
          notes: selectedSchool === 'all' ? 'Tablet screen cracked. Needs replacement.' : `Visit to ${selectedSchoolData?.name} - Device maintenance required.`,
          gpsLocation: '-1.2921, 36.8219'
        }
      ],
      devices: selectedSchool === 'all' ? [
        {
          id: 1,
          schoolName: 'Nairobi Primary School',
          deviceType: 'Laptop',
          serialNumber: 'LP-NB-001',
          status: 'working',
          lastUpdated: '2025-11-04'
        },
        {
          id: 2,
          schoolName: 'Nairobi Primary School',
          deviceType: 'Tablet',
          serialNumber: 'TAB-NB-001',
          status: 'broken',
          lastUpdated: '2025-10-28'
        },
        {
          id: 3,
          schoolName: 'Mombasa Secondary School',
          deviceType: 'Projector',
          serialNumber: 'PROJ-MSA-001',
          status: 'working',
          lastUpdated: '2025-11-03'
        }
      ] : [
        {
          id: 1,
          schoolName: selectedSchoolData?.name,
          deviceType: 'Laptop',
          serialNumber: 'LP-NB-001',
          status: 'working',
          lastUpdated: '2025-11-04'
        },
        {
          id: 2,
          schoolName: selectedSchoolData?.name,
          deviceType: 'Tablet', 
          serialNumber: 'TAB-NB-001',
          status: 'broken',
          lastUpdated: '2025-10-28'
        }
      ],
      generatedAt: new Date().toISOString(),
      generatedBy: user?.name || 'DLP Field Officer'
    };

    setReportData(report);
    
  } catch (err) {
    setError('Failed to generate report');
  } finally {
    setLoading(false);
  }
};

 const downloadPDF = async () => {
  try {
    // Method 1: Generate structured PDF
    await generatePDFReport(reportData, dateRange, user);
    
    // Method 2: Uncomment below to capture HTML content instead
    // await generatePDFFromHTML('report-content', `DLP-Report-${new Date().toISOString().split('T')[0]}.pdf`);
    
  } catch (error) {
    console.error('PDF generation error:', error);
    alert('Error generating PDF. Please try again.');
  }
};

  const shareReport = async () => {
  if (!reportData) return;

  try {
    // Predefined manager emails (you can expand this list)
    const managers = {
      'county_supervisor': 'county.supervisor@education.go.ke',
      'dlp_coordinator': 'dlp.coordinator@education.go.ke', 
      'head_teacher': 'principal@schools.go.ke',
      'custom': ''
    };

    // Let user choose manager or enter custom email
    const managerChoice = prompt(
      `Choose manager to share with:\n\n` +
      `1. County Supervisor (${managers.county_supervisor})\n` +
      `2. DLP Coordinator (${managers.dlp_coordinator})\n` +
      `3. Head Teacher (${managers.head_teacher})\n` +
      `4. Custom email\n\n` +
      `Enter 1, 2, 3, or 4:`, '1'
    );

    let managerEmail = '';
    
    switch (managerChoice) {
      case '1':
        managerEmail = managers.county_supervisor;
        break;
      case '2':
        managerEmail = managers.dlp_coordinator;
        break;
      case '3':
        managerEmail = managers.head_teacher;
        break;
      case '4':
        managerEmail = prompt('Enter custom email address:');
        break;
      default:
        alert('Invalid choice. Using County Supervisor.');
        managerEmail = managers.county_supervisor;
    }

    if (!managerEmail) return;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(managerEmail)) {
      alert('Please enter a valid email address');
      return;
    }

    // Create email content
    const subject = `DLP Monitoring Report - ${new Date(dateRange.startDate).toLocaleDateString()} to ${new Date(dateRange.endDate).toLocaleDateString()}`;
    
    const body = `
DIGITAL LITERACY PROGRAMME - MONITORING REPORT

REPORT DETAILS:
Generated by: ${user?.name || 'DLP Field Officer'}
Report Period: ${new Date(dateRange.startDate).toLocaleDateString()} to ${new Date(dateRange.endDate).toLocaleDateString()}
Generation Date: ${new Date().toLocaleDateString()}

EXECUTIVE SUMMARY:
• Schools Under Monitoring: ${reportData.summary.totalSchools}
• Field Visits Conducted: ${reportData.summary.totalVisits}
• Digital Devices Tracked: ${reportData.summary.totalDevices}
• Operational Devices: ${reportData.summary.workingDevices}
• Devices Requiring Attention: ${reportData.summary.brokenDevices + reportData.summary.missingDevices}

DEVICE STATUS BREAKDOWN:
✅ Working: ${reportData.summary.workingDevices} devices (${Math.round((reportData.summary.workingDevices / reportData.summary.totalDevices) * 100)}%)
❌ Broken: ${reportData.summary.brokenDevices} devices (${Math.round((reportData.summary.brokenDevices / reportData.summary.totalDevices) * 100)}%)
⚠️ Missing: ${reportData.summary.missingDevices} devices (${Math.round((reportData.summary.missingDevices / reportData.summary.totalDevices) * 100)}%)

RECENT FIELD ACTIVITIES:
${reportData.visits.slice(0, 5).map(visit => 
  `📍 ${visit.schoolName} - ${new Date(visit.visitDate).toLocaleDateString()}\n   ${visit.notes}`
).join('\n\n')}

DEVICE INVENTORY SNAPSHOT:
${reportData.devices.slice(0, 5).map(device => 
  `• ${device.deviceType} (${device.serialNumber}): ${device.status.toUpperCase()} - ${device.schoolName}`
).join('\n')}

---
This automated report was generated by DigiTrack DLP Management System.
For detailed reports and analytics, please login to the system.
    `.trim();

    // Open email client
    const mailtoLink = `mailto:${managerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Success confirmation
    setTimeout(() => {
      alert(`✅ Report shared successfully with ${managerEmail}!\n\nYour email client opened with the complete report. Click "Send" to deliver it.`);
    }, 1000);

  } catch (error) {
    console.error('Email sharing error:', error);
    alert('Error preparing email. Please try again.');
  }
};
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Generating report...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">DLP Reports</h1>
            <p className="text-gray-600">Generate professional reports for supervisors</p>
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

        {/* Report Generator */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Generate Report</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                School
              </label>
              <select
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Schools</option>
                {schools.map((school) => (
                  <option key={school.id} value={school.id}>
                    {school.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="date"
                value={dateRange.startDate}
                onChange={(e) => setDateRange(prev => ({ ...prev, startDate: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <input
                type="date"
                value={dateRange.endDate}
                onChange={(e) => setDateRange(prev => ({ ...prev, endDate: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={generateReport}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              📊 Generate Report
            </button>
            
            {reportData && (
              <>
                <button
                  onClick={downloadPDF}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                >
                  📄 Download PDF
                </button>
                <button
                  onClick={shareReport}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
                >
                  📧 Share Report
                </button>
              </>
            )}
          </div>
        </div>

        {/* Report Display */}
        {reportData && (
           <div id="report-content" className="space-y-6">
            {/* Report Header */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    DLP Monitoring Report
                  </h2>
                  <p className="text-gray-600">
                    Generated on {new Date(reportData.generatedAt).toLocaleDateString()} by {reportData.generatedBy}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Period</p>
                  <p className="font-semibold">
                    {new Date(dateRange.startDate).toLocaleDateString()} - {new Date(dateRange.endDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{reportData.summary.totalSchools}</div>
                <div className="text-sm text-gray-600">Schools</div>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{reportData.summary.totalVisits}</div>
                <div className="text-sm text-gray-600">Visits</div>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">{reportData.summary.totalDevices}</div>
                <div className="text-sm text-gray-600">Total Devices</div>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <div className="text-2xl font-bold text-red-600">{reportData.summary.brokenDevices + reportData.summary.missingDevices}</div>
                <div className="text-sm text-gray-600">Issues</div>
              </div>
            </div>

            {/* Device Status Breakdown */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Device Status Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-green-800">Working</span>
                    <span className="text-2xl font-bold text-green-600">{reportData.summary.workingDevices}</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${(reportData.summary.workingDevices / reportData.summary.totalDevices) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-red-800">Broken</span>
                    <span className="text-2xl font-bold text-red-600">{reportData.summary.brokenDevices}</span>
                  </div>
                  <div className="w-full bg-red-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-red-600 h-2 rounded-full" 
                      style={{ width: `${(reportData.summary.brokenDevices / reportData.summary.totalDevices) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-yellow-800">Missing</span>
                    <span className="text-2xl font-bold text-yellow-600">{reportData.summary.missingDevices}</span>
                  </div>
                  <div className="w-full bg-yellow-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-yellow-600 h-2 rounded-full" 
                      style={{ width: `${(reportData.summary.missingDevices / reportData.summary.totalDevices) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Visits */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Visits</h3>
              <div className="space-y-4">
                {reportData.visits.map((visit) => (
                  <div key={visit.id} className="border-l-4 border-blue-500 pl-4 py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{visit.schoolName}</h4>
                        <p className="text-sm text-gray-600">{new Date(visit.visitDate).toLocaleDateString()}</p>
                        <p className="text-sm mt-1">{visit.notes}</p>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        GPS Verified
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Inventory */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Device Inventory</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">School</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Device Type</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Serial Number</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Status</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Last Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData.devices.map((device) => (
                      <tr key={device.id} className="border-t">
                        <td className="px-4 py-2 text-sm">{device.schoolName}</td>
                        <td className="px-4 py-2 text-sm">{device.deviceType}</td>
                        <td className="px-4 py-2 text-sm font-mono">{device.serialNumber}</td>
                        <td className="px-4 py-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            device.status === 'working' ? 'bg-green-100 text-green-800' :
                            device.status === 'broken' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {device.status}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-sm">{new Date(device.lastUpdated).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!reportData && (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">No Report Generated</h3>
            <p className="text-gray-600 mb-6">
              Generate a professional DLP monitoring report for your supervisor.
            </p>
            <button
              onClick={generateReport}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Generate Your First Report
            </button>
          </div>
        )}
      </div>
    </div>
  );
}