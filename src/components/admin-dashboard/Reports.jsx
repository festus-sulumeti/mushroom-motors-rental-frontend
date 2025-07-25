import React from 'react';
import { FaFileAlt, FaDownload } from 'react-icons/fa';

const Reports = () => {
  const reports = [
    { title: 'Rental Summary Report - July 2025', date: '2025-07-21' },
    { title: 'User Registrations - July 2025', date: '2025-07-19' },
    { title: 'Vehicle Performance - Q2 2025', date: '2025-07-01' },
  ];

  return (
    <div className="min-h-screen bg-[#0D1117] text-white p-10">
      <h2 className="text-4xl font-bold mb-8 text-[#FACC15]">Reports</h2>
      
      <ul className="space-y-6">
        {reports.map((report, index) => (
          <li key={index} className="bg-[#161B22] p-6 rounded-lg shadow hover:ring-2 hover:ring-[#FACC15] transition">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <FaFileAlt className="text-2xl text-[#FACC15]" />
                <div>
                  <h4 className="text-lg font-semibold">{report.title}</h4>
                  <p className="text-sm text-gray-400">Generated on {report.date}</p>
                </div>
              </div>
              <button className="flex items-center text-sm text-blue-400 hover:underline">
                <FaDownload className="mr-2" /> Download
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
