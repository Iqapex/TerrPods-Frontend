import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

// ✅ TerraPods brand yellow (Pantone 605C)
const TERRAPODS_YELLOW = "#D6A900";
const TERRAPODS_YELLOW_DARK = "#B88C00";

const ContactMessagesAdmin = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://terrapods-backend.onrender.com/api/contact");
      setMessages(res.data);
    } catch (err) {
      console.error("Error fetching messages", err);
    }
    setLoading(false);
  };

  const deleteMessage = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await axios.delete(`https://terrapods-backend.onrender.com/api/contact/${id}`);
      setMessages((prev) => prev.filter((msg) => msg._id !== id));
    } catch (err) {
      console.error("Error deleting message", err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 mt-16">
      {/* ✅ TerraPods Yellow underline */}
      <h1
        className="text-3xl font-extrabold mb-8 text-gray-800 border-b-4 pb-3 inline-block"
        style={{ borderColor: TERRAPODS_YELLOW }}
      >
        📬 Contact Messages
      </h1>

      {loading ? (
        <p className="text-gray-600">Loading messages...</p>
      ) : messages.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border">
          <p className="text-gray-500">No contact messages found.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white shadow-md p-6 rounded-xl transition duration-300 border hover:shadow-lg"
              style={{ borderColor: TERRAPODS_YELLOW }}
            >
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <p>
                    <strong className="text-gray-700">👤 Name:</strong>{" "}
                    <span style={{ color: TERRAPODS_YELLOW }}>{msg.name}</span>
                  </p>
                  <p>
                    <strong className="text-gray-700">📧 Email:</strong>{" "}
                    {msg.email}
                  </p>
                  <p>
                    <strong className="text-gray-700">📝 Subject:</strong>{" "}
                    {msg.subject}
                  </p>
                  <p className="text-gray-700 whitespace-pre-wrap">
                    <strong>💬 Message:</strong> {msg.message}
                  </p>
                  <p className="text-sm text-gray-500">
                    📅 {new Date(msg.createdAt).toLocaleString()}
                  </p>
                </div>
                <button
                  className="text-red-600 hover:text-red-800 transition ml-4"
                  onClick={() => deleteMessage(msg._id)}
                  title="Delete Message"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactMessagesAdmin;
