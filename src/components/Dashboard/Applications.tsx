// src/components/Dashboard/Applications.tsx

import { useEffect, useState } from 'react';

type ApplicationStatus = 'Pending' | 'Under Review' | 'Accepted' | 'Rejected';

interface Application {
  id: string;
  title: string;
  submittedAt: string;
  status: ApplicationStatus;
  downloadUrl: string;
  adminFeedback?: string;
}

const Applications = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  // Simulate fetching applications from an API
  useEffect(() => {
    const mockApplications: Application[] = [
      {
        id: 'app-001',
        title: 'Residency: Biomaterial Lab 2025',
        submittedAt: '2025-06-10',
        status: 'Under Review',
        downloadUrl: '/docs/application_001.pdf',
        adminFeedback: 'Your application is strong. Please prepare for an interview.',
      },
      {
        id: 'app-002',
        title: 'EcoFellowship Workshop',
        submittedAt: '2025-05-25',
        status: 'Accepted',
        downloadUrl: '/docs/application_002.pdf',
      },
      {
        id: 'app-003',
        title: 'Agroecology Training',
        submittedAt: '2025-04-15',
        status: 'Rejected',
        downloadUrl: '/docs/application_003.pdf',
        adminFeedback: 'Unfortunately, the project did not meet this cycle’s criteria.',
      },
    ];

    setApplications(mockApplications);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-6 bg-gradient-to-br from-[#f0f4ff] to-[#e0f7fa] animate-gradient">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">My Applications</h1>

      {applications.length === 0 ? (
        <p className="text-gray-600 text-center">No applications submitted yet.</p>
      ) : (
        <div className="grid gap-6 max-w-4xl mx-auto">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]"
            >
              <h2 className="text-lg font-semibold">{app.title}</h2>
              <p className="text-sm text-gray-500 mb-2">
                Submitted on: {new Date(app.submittedAt).toLocaleDateString()}
              </p>

              <p
                className={`text-sm font-medium mb-1 ${
                  app.status === 'Accepted'
                    ? 'text-green-600'
                    : app.status === 'Under Review'
                    ? 'text-yellow-600'
                    : app.status === 'Rejected'
                    ? 'text-red-600'
                    : 'text-gray-600'
                }`}
              >
                Status: {app.status}
              </p>

              {app.adminFeedback && (
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Feedback:</strong> {app.adminFeedback}
                </p>
              )}

              <a
                href={app.downloadUrl}
                download
                className="inline-block mt-2 text-sm text-blue-600 hover:underline hover:text-blue-800"
              >
                Download Application
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Applications;
