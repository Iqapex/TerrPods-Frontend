import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Calendar,
  User,
  Clock,
  MessageCircle,
  FileText,
  ArrowRight,
} from 'lucide-react';
import { useState } from 'react';

// TerraPods Yellow
const TERRAPODS_YELLOW = "#D6A900";
const TERRAPODS_YELLOW_DARK = "#b38a00"; // darker hover

// Like Button
const LikeButton = () => {
  const [likes, setLikes] = useState<number>(0);
  return (
    <button
      onClick={() => setLikes((prev) => prev + 1)}
      style={{ color: TERRAPODS_YELLOW }}
      className="text-sm hover:opacity-80 mr-3"
    >
      👍 {likes}
    </button>
  );
};

// Comment Box
const CommentBox = () => {
  const [comment, setComment] = useState<string>('');
  const [allComments, setAllComments] = useState<string[]>([]);

  const submitComment = () => {
    if (comment.trim()) {
      setAllComments((prev) => [...prev, comment]);
      setComment('');
    }
  };

  return (
    <div className="mt-2">
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        className="border px-2 py-1 rounded w-full text-sm mb-1"
      />
      <button
        onClick={submitComment}
        style={{ backgroundColor: TERRAPODS_YELLOW }}
        className="text-xs px-3 py-1 text-white rounded hover:opacity-90"
      >
        Post
      </button>
      <ul className="mt-2 space-y-1 text-gray-800 text-sm">
        {allComments.map((c, idx) => (
          <li key={idx}>💬 {c}</li>
        ))}
      </ul>
    </div>
  );
};

// Share Button
interface ShareButtonProps {
  postUrl: string;
}

const ShareButton = ({ postUrl }: ShareButtonProps) => {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Check this out!',
        url: postUrl,
      });
    } catch (err) {
      alert('Sharing not supported. Try copying the URL manually.');
    }
  };

  return (
    <button
      onClick={handleShare}
      style={{ color: TERRAPODS_YELLOW }}
      className="text-sm hover:opacity-80"
    >
      🔗 Share
    </button>
  );
};

const Blog = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const posts = [
    {
      title: 'Cultivating a Greener Tomorrow Through Smart Agriculture',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d',
      author: 'Dr. Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '8 min',
      excerpt: 'Exploring innovative techniques in regenerative farming...',
    },
    {
      title: 'Art as a Catalyst for Environmental Change',
      image: 'https://images.unsplash.com/photo-1501084817091-258c42bd1b4f',
      author: 'Elena Rodriguez',
      date: 'March 12, 2024',
      readTime: '6 min',
      excerpt: 'How artists use sustainable materials to inspire...',
    },
    {
      title: 'Building Community Through Shared Gardens',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735',
      author: 'Michael Chen',
      date: 'March 10, 2024',
      readTime: '5 min',
      excerpt: 'The impact of gardens in local food and community...',
    },
  ];

  const libraryItems: string[] = [
    'Regenerative Farming Techniques',
    'Sustainable Biomaterial Recipes',
    'Agroecology Case Studies',
    'Art & Activism in Rural Spaces',
  ];

  const forumPosts = [
    { title: 'Looking for clay-based natural pigment guides', user: 'artist_mila', replies: 5 },
    { title: 'Seed saving tips from your region?', user: 'farmer_jo', replies: 12 },
    { title: 'Need help identifying compost fungi', user: 'biopod_guru', replies: 3 },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 pb-20 px-4 sm:px-6 md:px-10">
      {/* Hero Section */}
      <section style={{ backgroundColor: TERRAPODS_YELLOW }} className="relative py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">TerraPods Blog</h1>
            <p className="text-lg sm:text-xl opacity-90">
              Explore stories, research, community dialogue, and knowledge-sharing by and for TerraPods.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg overflow-hidden shadow-xl"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-96 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
                  alt="Reflections Hub Image"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 text-gray-900">
                <span
                  style={{ backgroundColor: "#FFF3B0", color: TERRAPODS_YELLOW }}
                  className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4"
                >
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Revolutionizing Agriculture: The TerraPods Approach
                </h2>
                <p className="mb-6">
                  Discover how our innovative farming techniques are transforming local food systems
                  and creating sustainable solutions for the future...
                </p>
                <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>March 18, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>10 min read</span>
                  </div>
                </div>
                <button
                  style={{ color: TERRAPODS_YELLOW }}
                  className="inline-flex items-center font-semibold hover:opacity-80"
                >
                  Read More <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Latest Posts</h2>
          <h1 className="text-center mb-6">Explore our recent articles and insights</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-gray-50 rounded-lg shadow hover:shadow-md transition hover:-translate-y-1"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover rounded-t-lg"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{post.excerpt}</p>
                  <div className="flex justify-between text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <User size={14} /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {post.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <LikeButton />
                    <ShareButton postUrl={`https://yourdomain.com/blog/${idx}`} />
                  </div>
                  <CommentBox />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Forum */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-8">Forum & Peer Learning</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {forumPosts.slice(0, 3).map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="border p-6 rounded-md bg-gray-50 hover:bg-gray-100 transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 flex justify-center items-center gap-2">
                <User size={14} /> {post.user} · <MessageCircle size={14} /> {post.replies} replies
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upload Section */}
      <section className="text-center mb-12 px-4 py-12" style={{ background: "linear-gradient(to bottom, #fff, #FFF8E1, #FFE58F)" }}>
        <h2 className="text-3xl font-bold mb-6" style={{ color: TERRAPODS_YELLOW }}>
          Digital Library
        </h2>
        <div className="inline-block mb-6">
          <input
            type="file"
            id="fileUpload"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files?.[0];
              if (file) alert(`Uploading "${file.name}"...`);
            }}
            className="hidden"
          />
          <label
            htmlFor="fileUpload"
            className="cursor-pointer inline-block px-5 py-2.5 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100 transition-all duration-200 text-sm font-medium text-gray-700"
          >
            Choose File
          </label>
        </div>
        <div>
          <button
            style={{ backgroundColor: TERRAPODS_YELLOW }}
            className="px-6 py-2 text-white text-sm rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg"
          >
            Upload File
          </button>
        </div>
      </section>

      {/* Library Items Section */}
      <section className="px-4 py-12" style={{ backgroundColor: "#FFF8E1" }}>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {libraryItems.map((item: string, idx: number) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-between"
              style={{ borderColor: TERRAPODS_YELLOW }}
            >
              <div className="flex items-center gap-3">
                <FileText size={24} style={{ color: TERRAPODS_YELLOW }} />
                <span className="text-sm font-medium text-gray-800 break-words">{item}</span>
              </div>
              <button
                onClick={() => alert(`Downloading "${item}"...`)}
                style={{ color: TERRAPODS_YELLOW }}
                className="text-sm underline hover:opacity-80"
              >
                Download
              </button>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Updates / Director’s Corner */}
      <section
        className="px-4 py-10 md:px-8 md:py-12 rounded-md mb-10 shadow-inner overflow-hidden"
        style={{ background: "linear-gradient(to bottom right, #FFF8E1, #FFE58F, #FFF8E1)" }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: TERRAPODS_YELLOW }}>
          Director’s Corner & Community Stories
        </h2>
        <p className="text-gray-700 mb-2 text-center text-lg max-w-3xl mx-auto">
          Stay connected with updates from our leadership and inspiring voices from the TerraPods network.
        </p>
        <div className="text-sm text-gray-500 text-center mb-8">
          <Calendar size={16} style={{ color: TERRAPODS_YELLOW }} className="inline mr-1" />
          Last update: July 18, 2025
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            {
              title: "Leadership Insights",
              description: "Messages from our director on vision and progress.",
            },
            {
              title: "Community Voices",
              description: "Stories and reflections from the TerraPods community.",
            },
            {
              title: "Latest Events",
              description: "Updates on recent events and impactful moments.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out text-center border-t-4"
              style={{ borderColor: TERRAPODS_YELLOW }}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: TERRAPODS_YELLOW }}>
                {item.title}
              </h3>
              <p className="text-gray-600 break-words">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
