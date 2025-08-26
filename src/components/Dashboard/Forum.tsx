import { useState } from "react";
import { FaComments, FaPlus, FaReply } from "react-icons/fa";

const dummyTopics = [
  {
    id: 1,
    title: "Innovative Biomaterial Projects",
    category: "Biomaterials",
    author: "Ayesha R.",
    replies: 4,
    lastUpdated: "2 days ago",
  },
  {
    id: 2,
    title: "Agroecology Research Call Collaboration",
    category: "Agroecology",
    author: "David K.",
    replies: 2,
    lastUpdated: "5 hours ago",
  },
  {
    id: 3,
    title: "Art + Science: Creative Synergies",
    category: "Art",
    author: "Lina S.",
    replies: 7,
    lastUpdated: "1 day ago",
  },
];

const Forum = () => {
  const [topics] = useState(dummyTopics);

  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 animate-pulse-slow" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FaComments className="text-indigo-600 animate-bounce-slow" /> Community Forum
        </h1>
        <button className="mt-4 sm:mt-0 flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 hover:scale-105 transition-transform duration-300 shadow-md">
          <FaPlus /> New Topic
        </button>
      </div>

      {/* Forum Description */}
      <p className="text-gray-700 mb-6 font-medium">
        Connect with other members. Share insights, ask questions, and collaborate on
        projects related to biomaterials, agroecology, art, and funding.
      </p>

      {/* Forum Topics */}
      <div className="bg-white/70 backdrop-blur-md shadow-lg rounded overflow-hidden">
        <div className="divide-y">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="p-4 hover:bg-indigo-50 transition-colors duration-300 flex flex-col sm:flex-row sm:justify-between cursor-pointer"
            >
              <div>
                <h3 className="text-lg font-semibold text-indigo-700 hover:underline">
                  {topic.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {topic.category} • by {topic.author}
                </p>
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-2 sm:mt-0">
                <FaReply className="mr-1 text-indigo-500" />
                {topic.replies} replies • {topic.lastUpdated}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center text-sm text-gray-500 mt-6">
        Only verified members can post or reply in the forum.
      </div>

      {/* Custom animation styles */}
      <style >{`
        .animate-pulse-slow {
          animation: pulseBG 10s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }

        @keyframes pulseBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Forum;
