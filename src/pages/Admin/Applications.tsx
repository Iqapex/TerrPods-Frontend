import { useEffect, useState } from "react";

interface Applicant {
  name: string;
  email: string;
  phone: string;
  [key: string]: any;
}

interface Application {
  id: string;
  programSlug: string;
  applicant: Applicant;
  submittedAt: string;
}

const Applications = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/applications")
      .then(res => res.json())
      .then(data => setApplications(data));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Program Applications</h2>
      {applications.map(app => (
        <div key={app.id} className="border p-4 mb-2 bg-white shadow">
          <p><strong>Program:</strong> {app.programSlug}</p>
          <p><strong>Applicant:</strong> {JSON.stringify(app.applicant)}</p>
          <p><strong>Submitted At:</strong> {new Date(app.submittedAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Applications;
