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

// ✅ TerraPods brand yellow (Pantone 605C)
const TERRAPODS_YELLOW = "#D6A900";
const TERRAPODS_YELLOW_DARK = "#B88C00";

const Applications = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    fetch("https://terrapods-backend.onrender.com/api/admin/applications")
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, []);

  return (
    <div className="p-8 mt-16">
      {/* ✅ TerraPods Yellow underline */}
      <h2
        className="text-2xl font-extrabold mb-6 text-gray-800 border-b-4 pb-3 inline-block"
        style={{ borderColor: TERRAPODS_YELLOW }}
      >
        Program Applications
      </h2>

      {applications.length === 0 ? (
        <p className="text-gray-500 italic">No applications found.</p>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => (
            <div
              key={app.id}
              className="p-6 bg-white shadow-lg rounded-xl transition duration-300 border hover:shadow-2xl"
              style={{ borderColor: TERRAPODS_YELLOW }}
            >
              <p className="mb-2">
                <strong className="text-gray-800">Program:</strong>{" "}
                <span style={{ color: TERRAPODS_YELLOW }}>{app.programSlug}</span>
              </p>
              <p className="mb-2">
                <strong className="text-gray-800">Applicant:</strong>{" "}
                {app.applicant.name} | {app.applicant.email} | {app.applicant.phone}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Submitted At:</strong>{" "}
                {new Date(app.submittedAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Applications;
