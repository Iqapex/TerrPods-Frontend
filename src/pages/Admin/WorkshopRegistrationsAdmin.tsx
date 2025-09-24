import { useEffect, useState } from "react";
import axios from "axios";

// ✅ TerraPods Yellow (Pantone 605C)
const TERRAPODS_YELLOW = "#D6A900";
const TERRAPODS_YELLOW_DARK = "#B88C00";

const WorkshopRegistrationsAdmin = () => {
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const res = await axios.get("https://terrapods-backend.onrender.com/api/workshops/registrations");
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
    <div className="p-8 mt-16">
      {/* ✅ TerraPods Yellow underline */}
      <h2
        className="text-3xl font-extrabold mb-8 text-gray-800 border-b-4 pb-3 inline-block"
        style={{ borderColor: TERRAPODS_YELLOW }}
      >
        📝 Workshop Registrations
      </h2>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : registrations.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border">
          <p className="text-gray-500">No registrations found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-xl border">
          <table className="min-w-full border border-gray-300 bg-white rounded-lg overflow-hidden">
            <thead>
              <tr style={{ backgroundColor: TERRAPODS_YELLOW }}>
                <th className="px-4 py-3 border text-left text-gray-900 font-semibold">
                  👤 Name
                </th>
                <th className="px-4 py-3 border text-left text-gray-900 font-semibold">
                  📧 Email
                </th>
                <th className="px-4 py-3 border text-left text-gray-900 font-semibold">
                  🎯 Workshop
                </th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((reg, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 border text-gray-700">{reg.name}</td>
                  <td className="px-4 py-3 border text-gray-700">{reg.email}</td>
                  <td
                    className="px-4 py-3 border font-medium"
                    style={{ color: TERRAPODS_YELLOW_DARK }}
                  >
                    {reg.workshop}
                  </td>
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
