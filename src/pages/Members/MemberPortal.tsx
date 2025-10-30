import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Upload, Video, Image as ImageIcon, Globe } from "lucide-react";

const TERRAPODS_YELLOW = "#D6A900";
const TERRAPODS_YELLOW_DARK = "#B88C00";

const API_URL = "http://localhost:5000/api/members"; // Backend API URL

const MemberPortal = () => {
  const memberId = "6704d332b9a0b4d92bdf10d3"; // Replace with logged-in user's ID
  const [member, setMember] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  // ✅ Fetch member details on mount
  useEffect(() => {
    axios
      .get(`${API_URL}/${memberId}`)
      .then((res) => {
        setMember(res.data);
        setEditData(res.data);
      })
      .catch((err) => console.error("Failed to fetch member:", err));
  }, [memberId]);

  // ✅ Input field changes
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // ✅ Image upload preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEditData({ ...editData, avatar: imageUrl });
    }
  };

  // ✅ Save (update member)
  const handleSave = async () => {
    try {
      const res = await axios.put(`${API_URL}/${memberId}`, editData);
      setMember(res.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  if (!member) return <p className="p-8 text-center">Loading...</p>;

  return (
    <div className="p-8 mt-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1
          className="text-3xl font-extrabold text-gray-800 border-b-4 pb-2 inline-block"
          style={{ borderColor: TERRAPODS_YELLOW }}
        >
          🌿 Member Profile
        </h1>

        <button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className="px-5 py-2 rounded-lg text-white font-semibold transition"
          style={{ backgroundColor: TERRAPODS_YELLOW }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW_DARK)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW)
          }
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>

      {/* Profile Section */}
      <motion.div className="bg-white rounded-2xl shadow-lg p-8 mb-10" whileHover={{ scale: 1.01 }}>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar */}
          <div className="relative">
            <img
              src={isEditing ? editData.avatar : member.avatar}
              alt="Avatar"
              className="w-40 h-40 object-cover rounded-full border-4"
              style={{ borderColor: TERRAPODS_YELLOW }}
            />
            {isEditing && (
              <label className="absolute bottom-0 right-0 bg-gray-100 p-2 rounded-full cursor-pointer border">
                <Upload size={18} />
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
            )}
          </div>

          {/* Info */}
          <div className="flex-1">
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                  className="text-2xl font-bold border-b w-full mb-3 focus:outline-none"
                  style={{ borderColor: TERRAPODS_YELLOW }}
                />
                <textarea
                  name="bio"
                  value={editData.bio}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mb-3 focus:outline-none"
                  style={{ borderColor: TERRAPODS_YELLOW }}
                  rows={4}
                />
                <input
                  type="text"
                  name="website"
                  value={editData.website}
                  onChange={handleChange}
                  placeholder="Website URL"
                  className="border rounded-lg p-2 w-full focus:outline-none"
                  style={{ borderColor: TERRAPODS_YELLOW }}
                />
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800">{member.name}</h2>
                <p className="text-gray-600 mt-2 mb-4">{member.bio}</p>
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-2"
                  >
                    <Globe size={16} /> {member.website}
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </motion.div>

      {/* Gallery */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
          <ImageIcon /> Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {member.gallery?.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl"
              whileHover={{ scale: 1.03 }}
            />
          ))}
        </div>
      </div>

      {/* Videos */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
          <Video /> Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {member.videos?.map((video, index) => (
            <iframe
              key={index}
              src={video}
              title={`Video ${index}`}
              className="rounded-lg shadow-lg w-full h-64"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">📰 My Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {member.blogPosts?.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 border"
              whileHover={{ scale: 1.02 }}
              style={{ borderColor: TERRAPODS_YELLOW }}
            >
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-1">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberPortal;
