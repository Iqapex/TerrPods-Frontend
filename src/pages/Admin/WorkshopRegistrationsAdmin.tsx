import { useEffect, useState } from "react";
import axios from "axios";

const WorkshopRegistrationsAdmin = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/workshops/registrations");
        setRegistrations(res.data);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Workshop Registrations</h2>

      {loading ? (
        <p>Loading...</p>
      ) : registrations.length === 0 ? (
        <p>No registrations found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Workshop</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((reg: any, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{reg.name}</td>
                  <td className="px-4 py-2 border">{reg.email}</td>
                  <td className="px-4 py-2 border">{reg.workshop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WorkshopRegistrationsAdmin;
