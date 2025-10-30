import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TERRAPODS_YELLOW = "#D6A900";

type BlogPost = { _id: string; title: string; content: string; media?: string };
type Product = { _id: string; name: string; image: string; price: string };

export default function MemberProfilePage() {
  const userId = "user_001"; // Simulated logged-in user

  const [about, setAbout] = useState("");
  const [aboutEdit, setAboutEdit] = useState(false);

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogContent, setNewBlogContent] = useState("");
  const [newBlogMedia, setNewBlogMedia] = useState("");

  const [products, setProducts] = useState<Product[]>([]);

  const API_BASE = "http://localhost:5000/api";

  useEffect(() => {
    fetchProfile();
    fetchBlogs();
    fetchProducts();
  }, []);

  const fetchProfile = async () => {
    const res = await fetch(`${API_BASE}/profile/${userId}`);
    const data = await res.json();
    setAbout(data.about || "Tell us about yourself...");
  };

  const fetchBlogs = async () => {
    const res = await fetch(`${API_BASE}/blogs/${userId}`);
    const data = await res.json();
    setBlogPosts(data);
  };

  const fetchProducts = async () => {
    const res = await fetch(`${API_BASE}/products/${userId}`);
    const data = await res.json();
    setProducts(data);
  };

  const saveAbout = async () => {
    await fetch(`${API_BASE}/profile/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ about }),
    });
    setAboutEdit(false);
  };

  const addBlogPost = async () => {
    if (!newBlogTitle || !newBlogContent) return;
    await fetch(`${API_BASE}/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        title: newBlogTitle,
        content: newBlogContent,
        media: newBlogMedia,
      }),
    });
    setNewBlogTitle("");
    setNewBlogContent("");
    setNewBlogMedia("");
    fetchBlogs();
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <motion.h1 className="text-3xl font-bold mb-6">🖼 My Profile</motion.h1>

      <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        {aboutEdit ? (
          <div>
            <textarea
              className="w-full border rounded-lg p-3 mb-2"
              rows={4}
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
            <button
              onClick={saveAbout}
              className={`bg-[${TERRAPODS_YELLOW}] text-white py-2 px-4 rounded-full font-semibold hover:bg-[#b38a00]`}
            >
              Save
            </button>
          </div>
        ) : (
          <div>
            <p className="mb-2">{about}</p>
            <button
              onClick={() => setAboutEdit(true)}
              className="text-blue-600 hover:underline"
            >
              Edit About
            </button>
          </div>
        )}
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">My Blog Posts</h2>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Blog Title"
            value={newBlogTitle}
            onChange={(e) => setNewBlogTitle(e.target.value)}
            className="w-full border rounded-lg p-2 mb-2"
          />
          <textarea
            rows={4}
            placeholder="Blog Content"
            value={newBlogContent}
            onChange={(e) => setNewBlogContent(e.target.value)}
            className="w-full border rounded-lg p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Media URL"
            value={newBlogMedia}
            onChange={(e) => setNewBlogMedia(e.target.value)}
            className="w-full border rounded-lg p-2 mb-2"
          />
          <button
            onClick={addBlogPost}
            className={`bg-[${TERRAPODS_YELLOW}] text-white py-2 px-4 rounded-full font-semibold hover:bg-[#b38a00]`}
          >
            Add Blog Post
          </button>
        </div>

        <div className="space-y-4">
          {blogPosts.map((post) => (
            <div key={post._id} className="border p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-2">{post.title}</h3>
              <p className="mb-2">{post.content}</p>
              {post.media && <img src={post.media} alt={post.title} className="max-w-full rounded-lg" />}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">My Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg shadow-sm">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-2" />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
