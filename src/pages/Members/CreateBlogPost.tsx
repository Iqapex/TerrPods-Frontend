import { useState } from "react";
import { motion } from "framer-motion";

// TerraPods brand yellow
const TERRAPODS_YELLOW = "#D6A900";

const CreateBlogPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");

  const handleSubmit = () => {
    if (!title || !content) {
      alert("Please add both a title and content for your blog post.");
      return;
    }

    const newPost = {
      title,
      content,
      mediaUrl,
      createdAt: new Date().toISOString(),
    };

    console.log("Blog Post Created:", newPost);

    // TODO: Connect to backend API to save blog post
    setTitle("");
    setContent("");
    setMediaUrl("");
    alert("Blog post created successfully!");
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        ✍ Create Blog Post
      </motion.h1>

      <section className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog post title"
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Content</label>
          <textarea
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog content here..."
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Media URL</label>
          <input
            type="text"
            value={mediaUrl}
            onChange={(e) => setMediaUrl(e.target.value)}
            placeholder="Enter image/video URL"
            className="w-full border rounded-lg p-2"
          />
        </div>

        <button
          onClick={handleSubmit}
          className={`bg-[${TERRAPODS_YELLOW}] text-white py-2 px-6 rounded-full font-semibold hover:bg-[#b38a00]`}
        >
          Create Post
        </button>
      </section>
    </div>
  );
};

export default CreateBlogPost;
