// src/components/Dashboard/Inbox.tsx
import { useEffect, useState } from 'react';

interface Message {
  id: number;
  subject: string;
  sender: string;
  body: string;
  date: string;
  read: boolean;
}

const Inbox = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  // Simulate fetching messages
  useEffect(() => {
    const dummyMessages: Message[] = [
      {
        id: 1,
        subject: "Welcome to the Community!",
        sender: "Admin",
        body: "Thank you for joining. Check out the latest residencies and workshops!",
        date: "2025-07-20",
        read: false,
      },
      {
        id: 2,
        subject: "Your Application is Under Review",
        sender: "Application Team",
        body: "We’ve received your application for the Residency Program. You’ll hear back soon.",
        date: "2025-07-18",
        read: true,
      },
      {
        id: 3,
        subject: "Upcoming Workshop Reminder",
        sender: "Events",
        body: "Don't forget: 'Agroecology Methods' workshop starts tomorrow at 10 AM.",
        date: "2025-07-17",
        read: true,
      },
    ];

    setMessages(dummyMessages);
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 animate-gradient bg-[length:200%_200%]">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Inbox</h2>

      {messages.length === 0 ? (
        <p className="text-gray-500">You have no messages at the moment.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((msg) => (
            <li
              key={msg.id}
              className={`p-4 rounded-lg shadow-sm border transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${
                msg.read ? "bg-white" : "bg-blue-50 border-blue-300"
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{msg.subject}</h3>
                  <p className="text-sm text-gray-500">From: {msg.sender}</p>
                </div>
                <p className="text-sm text-gray-400 mt-2 md:mt-0">
                  {new Date(msg.date).toLocaleDateString()}
                </p>
              </div>
              <p className="mt-2 text-gray-700">{msg.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Inbox;
