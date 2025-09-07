import { useEffect, useState } from "react";

interface Donation {
  id: string;
  name: string;
  email: string;
  amount: number;
  createdAt: string;
}

// ✅ TerraPods Yellow (Pantone 605C)
const TERRAPODS_YELLOW = "#D6A900";
const TERRAPODS_YELLOW_DARK = "#B88C00";

const Donations = () => {
  const [donations, setDonations] = useState<Donation[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/donations")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  return (
    <div className="p-8 mt-16">
      {/* ✅ TerraPods Yellow underline */}
      <h2
        className="text-3xl font-extrabold mb-8 text-gray-800 border-b-4 pb-3 inline-block"
        style={{ borderColor: TERRAPODS_YELLOW }}
      >
        💰 Donations
      </h2>

      {donations.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border">
          <p className="text-gray-500">No donations found.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {donations.map((donation) => (
            <div
              key={donation.id}
              className="bg-white shadow-md p-6 rounded-xl transition duration-300 border hover:shadow-lg"
              style={{ borderColor: TERRAPODS_YELLOW }}
            >
              <p>
                <strong className="text-gray-700">👤 Name:</strong>{" "}
                <span style={{ color: TERRAPODS_YELLOW }}>{donation.name}</span>
              </p>
              <p>
                <strong className="text-gray-700">📧 Email:</strong>{" "}
                {donation.email}
              </p>
              <p>
                <strong className="text-gray-700">💵 Amount:</strong>{" "}
                <span style={{ color: TERRAPODS_YELLOW }}>
                  ₹{donation.amount}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                📅 {new Date(donation.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Donations;
