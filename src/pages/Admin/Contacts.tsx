// src/pages/Admin/Contacts.tsx

import { useEffect, useState } from "react";

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

// ✅ TerraPods Yellow (Pantone 605C)
const TERRAPODS_YELLOW = "#D6A900";
const TERRAPODS_YELLOW_DARK = "#B88C00";

const AdminContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetch("https://terrapods-backend.onrender.com/api/admin/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div className="p-8 mt-16">
      {/* ✅ TerraPods Yellow underline */}
      <h2
        className="text-3xl font-extrabold mb-8 text-gray-800 border-b-4 pb-3 inline-block"
        style={{ borderColor: TERRAPODS_YELLOW }}
      >
        📬 Contact Messages
      </h2>

      {contacts.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border">
          <p className="text-gray-500">No contacts found.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white shadow-md p-6 rounded-xl transition duration-300 border hover:shadow-lg"
              style={{ borderColor: TERRAPODS_YELLOW }}
            >
              <p>
                <strong className="text-gray-700">👤 Name:</strong>{" "}
                <span style={{ color: TERRAPODS_YELLOW }}>{contact.name}</span>
              </p>
              <p>
                <strong className="text-gray-700">📧 Email:</strong>{" "}
                {contact.email}
              </p>
              <p className="text-gray-700 whitespace-pre-wrap">
                <strong>💬 Message:</strong> {contact.message}
              </p>
              <p className="text-sm text-gray-500">
                📅 {new Date(contact.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminContacts;
