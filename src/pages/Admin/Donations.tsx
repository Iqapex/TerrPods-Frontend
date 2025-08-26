import { useEffect, useState } from "react";

interface Donation {
  id: string;
  name: string;
  email: string;
  amount: number;
  createdAt: string;
}

const Donations = () => {
  const [donations, setDonations] = useState<Donation[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/donations")
      .then(res => res.json())
      .then(data => setDonations(data));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Donations</h2>
      {donations.map(donation => (
        <div key={donation.id} className="border p-4 mb-2 bg-white shadow">
          <p><strong>Name:</strong> {donation.name}</p>
          <p><strong>Email:</strong> {donation.email}</p>
          <p><strong>Amount:</strong> ₹{donation.amount}</p>
          <p><strong>Time:</strong> {new Date(donation.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Donations;
