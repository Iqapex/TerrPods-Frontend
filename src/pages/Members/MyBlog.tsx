import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, Edit, Trash2, Upload } from "lucide-react";
import { motion } from "framer-motion";

const TERRAPODS_YELLOW = "#D6A900";
const TERRAPODS_YELLOW_DARK = "#B88C00";

const MyBlog = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const API_URL = "http://localhost:5000/api/posts"; // change if deployed

  const currentUser = {
    id: "user_001",
    name: "Faith Joslin",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(API_URL);
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageUrl });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`${API_URL}/${editId}`, {
          ...formData,
          author: currentUser.name,
        });
      } else {
        await axios.post(API_URL, {
          ...formData,
          author: currentUser.name,
        });
      }
      setFormData({ title: "", content: "", image: "" });
      setIsEditing(false);
      fetchPosts();
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  const handleEdit = (post) => {
    setIsEditing(true);
    setEditId(post._id);
    setFormData({
      title: post.title,
      content: post.content,
      image: post.image,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts(posts.filter((p) => p._id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="p-8 mt-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1
          className="text-3xl font-extrabold text-gray-800 border-b-4 pb-2 inline-block"
          style={{ borderColor: TERRAPODS_YELLOW }}
        >
          🪴 My Blog Posts
        </h1>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <img
            src={currentUser.avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <p className="font-semibold text-gray-700">{currentUser.name}</p>
        </div>
      </div>

      {/* Blog Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 mb-10"
        whileHover={{ scale: 1.01 }}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          {isEditing ? "✏️ Edit Post" : "📰 Create a New Post"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2"
              style={{ borderColor: TERRAPODS_YELLOW }}
              placeholder="Enter your post title"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-3 h-40 resize-none focus:outline-none focus:ring-2"
              style={{ borderColor: TERRAPODS_YELLOW }}
              placeholder="Write your blog content..."
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">Upload Image</label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer flex items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg border border-gray-300">
                <Upload className="mr-2" size={18} /> Upload Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              {formData.image && (
                <img
                  src={formData.image}
                  alt="Preview"
                  className="h-20 w-28 rounded-lg object-cover"
                />
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 px-6 py-2 rounded-lg font-semibold text-white transition duration-300"
          style={{
            backgroundColor: TERRAPODS_YELLOW,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW_DARK)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW)
          }
        >
          {isEditing ? "Update Post" : "Publish Post"}
        </button>
      </motion.form>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <motion.div
            key={post._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 border"
            whileHover={{ scale: 1.02 }}
            style={{ borderColor: TERRAPODS_YELLOW }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-3">
                {new Date(post.date).toLocaleDateString()} • by {post.author}
              </p>
              <p className="text-gray-700 mb-4">{post.content}</p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => handleEdit(post)}
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <Edit size={16} /> Edit
                </button>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="text-red-600 hover:text-red-800 flex items-center gap-1"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyBlog;
