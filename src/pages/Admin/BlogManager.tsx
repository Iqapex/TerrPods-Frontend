import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Upload } from "lucide-react";
import { motion } from "framer-motion";

const TERRAPODS_YELLOW = "#D6A900";
const TERRAPODS_YELLOW_DARK = "#B88C00";

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    image: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Example: Fetch blogs (replace with real API later)
  useEffect(() => {
    // Mock data for now
    setBlogs([
      {
        id: 1,
        title: "Sustainable Mycelium Practices",
        author: "Faith Joslin",
        image: "https://placehold.co/300x200",
        date: "Oct 4, 2025",
      },
      {
        id: 2,
        title: "Agroecology Residency Reflections",
        author: "TerraPods Team",
        image: "https://placehold.co/300x200",
        date: "Sept 28, 2025",
      },
    ]);
  }, []);

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageUrl });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isEditing) {
      setBlogs(
        blogs.map((b) =>
          b.id === editId ? { ...b, ...formData } : b
        )
      );
      setIsEditing(false);
    } else {
      const newPost = {
        ...formData,
        id: Date.now(),
        date: new Date().toLocaleDateString(),
      };
      setBlogs([newPost, ...blogs]);
    }

    setFormData({ title: "", content: "", author: "", image: "" });
  };

  const handleEdit = (blog: any) => {
    setIsEditing(true);
    setEditId(blog.id);
    setFormData({
      title: blog.title,
      content: blog.content || "",
      author: blog.author,
      image: blog.image,
    });
  };

  const handleDelete = (id: number) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  return (
    <div className="p-8 mt-16">
      {/* Header */}
      <h1
        className="text-3xl font-extrabold mb-8 text-gray-800 border-b-4 pb-3 inline-block"
        style={{ borderColor: TERRAPODS_YELLOW }}
      >
        📰 Manage Blog Posts
      </h1>

      {/* Blog Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 mb-10"
        whileHover={{ scale: 1.01 }}
      >
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
              placeholder="Enter blog title"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2"
              style={{ borderColor: TERRAPODS_YELLOW }}
              placeholder="Author name"
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
              placeholder="Write your blog post content..."
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">Image Upload</label>
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
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 border"
            whileHover={{ scale: 1.02 }}
            style={{ borderColor: TERRAPODS_YELLOW }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-500 mb-3">
                By {blog.author} • {blog.date}
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => handleEdit(blog)}
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <Edit size={16} /> Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
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

export default BlogManager;
