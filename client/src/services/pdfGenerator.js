import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePDFReport = async (reportData, dateRange, user) => {
  // Create new PDF document
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  let yPosition = 20;

  // Add header
  pdf.setFillColor(41, 128, 185);
  pdf.rect(0, 0, pageWidth, 40, 'F');
  
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(24);
  pdf.text('DLP MONITORING REPORT', pageWidth / 2, 20, { align: 'center' });
  
  pdf.setFontSize(12);
  pdf.text(`Generated on ${new Date().toLocaleDateString()} by ${user?.name || 'DLP Field Officer'}`, pageWidth / 2, 30, { align: 'center' });

  yPosition = 50;

  // Report Period
  pdf.setTextColor(0, 0, 0);
  pdf.setFontSize(14);
  pdf.text('REPORT PERIOD', 20, yPosition);
  pdf.setFontSize(11);
  yPosition += 8;
  pdf.text(`From: ${new Date(dateRange.startDate).toLocaleDateString()} To: ${new Date(dateRange.endDate).toLocaleDateString()}`, 20, yPosition);
  
  yPosition += 20;

  // Summary Statistics
  pdf.setFontSize(14);
  pdf.text('SUMMARY STATISTICS', 20, yPosition);
  yPosition += 15;

  const summary = reportData.summary;
  const stats = [
    { label: 'Total Schools', value: summary.totalSchools, color: [52, 152, 219] },
    { label: 'Total Visits', value: summary.totalVisits, color: [46, 204, 113] },
    { label: 'Total Devices', value: summary.totalDevices, color: [155, 89, 182] },
    { label: 'Issues Reported', value: summary.brokenDevices + summary.missingDevices, color: [231, 76, 60] }
  ];

  stats.forEach((stat, index) => {
    const x = 20 + (index % 2) * 85;
    const y = yPosition + Math.floor(index / 2) * 25;
    
    pdf.setFillColor(...stat.color);
    pdf.rect(x, y, 75, 20, 'F');
    
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(16);
    pdf.text(stat.value.toString(), x + 37.5, y + 8, { align: 'center' });
    
    pdf.setFontSize(8);
    pdf.text(stat.label.toUpperCase(), x + 37.5, y + 15, { align: 'center' });
  });

  yPosition += 60;

  // Device Status Breakdown
  pdf.setFontSize(14);
  pdf.setTextColor(0, 0, 0);
  pdf.text('DEVICE STATUS BREAKDOWN', 20, yPosition);
  yPosition += 10;

  const deviceStats = [
    { label: 'Working', value: summary.workingDevices, color: [46, 204, 113], percentage: (summary.workingDevices / summary.totalDevices) * 100 },
    { label: 'Broken', value: summary.brokenDevices, color: [231, 76, 60], percentage: (summary.brokenDevices / summary.totalDevices) * 100 },
    { label: 'Missing', value: summary.missingDevices, color: [241, 196, 15], percentage: (summary.missingDevices / summary.totalDevices) * 100 }
  ];

  deviceStats.forEach((stat, index) => {
    const y = yPosition + (index * 15);
    
    // Status label and value
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    pdf.text(`${stat.label}: ${stat.value} devices (${stat.percentage.toFixed(1)}%)`, 20, y);
    
    // Progress bar background
    pdf.setDrawColor(200, 200, 200);
    pdf.rect(80, y - 4, 100, 6);
    
    // Progress bar fill
    pdf.setFillColor(...stat.color);
    pdf.rect(80, y - 4, stat.percentage, 6, 'F');
  });

  yPosition += 60;

  // Recent Visits
  if (reportData.visits && reportData.visits.length > 0) {
    pdf.setFontSize(14);
    pdf.text('RECENT VISITS', 20, yPosition);
    yPosition += 10;

    reportData.visits.slice(0, 5).forEach((visit, index) => {
      if (yPosition > 250) {
        pdf.addPage();
        yPosition = 20;
      }

      pdf.setFontSize(10);
      pdf.setTextColor(52, 152, 219);
      pdf.text(visit.schoolName, 20, yPosition);
      
      pdf.setTextColor(100, 100, 100);
      pdf.setFontSize(8);
      pdf.text(new Date(visit.visitDate).toLocaleDateString(), 20, yPosition + 5);
      
      pdf.setTextColor(0, 0, 0);
      pdf.text(visit.notes, 20, yPosition + 12, { maxWidth: 170 });
      
      yPosition += 25;
    });
  }

  yPosition += 10;

  // Device Inventory
  if (reportData.devices && reportData.devices.length > 0) {
    if (yPosition > 200) {
      pdf.addPage();
      yPosition = 20;
    }

    pdf.setFontSize(14);
    pdf.text('DEVICE INVENTORY', 20, yPosition);
    yPosition += 10;

    // Table header
    pdf.setFillColor(240, 240, 240);
    pdf.rect(20, yPosition, 170, 8, 'F');
    pdf.setFontSize(8);
    pdf.setTextColor(0, 0, 0);
    
    const headers = ['School', 'Device', 'Serial', 'Status'];
    const colWidths = [60, 40, 40, 30];
    let x = 20;
    
    headers.forEach((header, index) => {
      pdf.text(header, x + 2, yPosition + 5);
      x += colWidths[index];
    });

    yPosition += 8;

    // Table rows
    reportData.devices.slice(0, 15).forEach((device) => {
      if (yPosition > 270) {
        pdf.addPage();
        yPosition = 20;
        
        // Header on new page
        pdf.setFillColor(240, 240, 240);
        pdf.rect(20, yPosition, 170, 8, 'F');
        pdf.setFontSize(8);
        
        x = 20;
        headers.forEach((header, index) => {
          pdf.text(header, x + 2, yPosition + 5);
          x += colWidths[index];
        });
        yPosition += 8;
      }

      pdf.setFontSize(7);
      x = 20;
      
      // School name (truncated)
      const schoolName = device.schoolName.length > 20 ? device.schoolName.substring(0, 20) + '...' : device.schoolName;
      pdf.text(schoolName, x + 2, yPosition + 4);
      x += colWidths[0];
      
      // Device type
      pdf.text(device.deviceType, x + 2, yPosition + 4);
      x += colWidths[1];
      
      // Serial number
      pdf.text(device.serialNumber, x + 2, yPosition + 4);
      x += colWidths[2];
      
      // Status with color
      const statusColors = {
        'working': [46, 204, 113],
        'broken': [231, 76, 60],
        'stolen': [241, 196, 15]
      };
      
      pdf.setFillColor(...(statusColors[device.status] || [100, 100, 100]));
      pdf.rect(x, yPosition - 2, 25, 4, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.text(device.status, x + 12.5, yPosition + 1, { align: 'center' });
      
      yPosition += 6;
    });
  }

  // Footer
  const totalPages = pdf.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    pdf.setPage(i);
    pdf.setFontSize(8);
    pdf.setTextColor(100, 100, 100);
    pdf.text(`Page ${i} of ${totalPages} - DigiTrack DLP Management System`, pageWidth / 2, 290, { align: 'center' });
  }

  // Save the PDF
  pdf.save(`DLP-Report-${new Date().toISOString().split('T')[0]}.pdf`);
};

// Alternative method: Capture HTML content and convert to PDF
export const generatePDFFromHTML = async (elementId, filename = 'DLP-Report.pdf') => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error('Element not found for PDF generation');
    return;
  }

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = imgWidth / imgHeight;
    
    let width = pageWidth;
    let height = width / ratio;
    
    if (height > pageHeight) {
      height = pageHeight;
      width = height * ratio;
    }
    
    pdf.addImage(imgData, 'PNG', 0, 0, width, height);
    pdf.save(filename);
    
  } catch (error) {
    console.error('Error generating PDF from HTML:', error);
    alert('Error generating PDF. Please try again.');
  }
};