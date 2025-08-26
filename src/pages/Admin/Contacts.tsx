// src/pages/Admin/Contacts.tsx

import { useEffect, useState } from "react";

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const AdminContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        contacts.map((contact) => (
          <div key={contact.id} className="border p-4 mb-2 bg-white shadow">
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Message:</strong> {contact.message}</p>
            <p><strong>Received:</strong> {new Date(contact.createdAt).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminContacts;
