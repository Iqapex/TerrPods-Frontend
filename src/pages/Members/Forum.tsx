import { useState } from "react";
import { motion } from "framer-motion";

// TerraPods brand yellow
const TERRAPODS_YELLOW = "#D6A900";

type Post = {
  id: number;
  author: string;
  content: string;
  media?: string;
  comments: { author: string; comment: string }[];
};

const Forum = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postContent, setPostContent] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [commentText, setCommentText] = useState("");
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const handlePost = () => {
    if (!postContent) {
      alert("Please enter content for your post");
      return;
    }
    const newPost: Post = {
      id: Date.now(),
      author: "Member", // This should be dynamic
      content: postContent,
      media: mediaUrl || undefined,
      comments: [],
    };
    setPosts([newPost, ...posts]);
    setPostContent("");
    setMediaUrl("");
  };

  const handleComment = (postId: number) => {
    if (!commentText) return;
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, { author: "Member", comment: commentText }],
            }
          : post
      )
    );
    setCommentText("");
    setSelectedPostId(null);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        💬 Member Forum
      </motion.h1>

      {/* New Post Box */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Create a New Post</h2>
        <textarea
          className="w-full border rounded-lg p-3 mb-3"
          rows={4}
          placeholder="Share your ideas..."
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <input
          type="text"
          className="w-full border rounded-lg p-2 mb-3"
          placeholder="Media URL (image/video/file)"
          value={mediaUrl}
          onChange={(e) => setMediaUrl(e.target.value)}
        />
        <button
          onClick={handlePost}
          className={`bg-[${TERRAPODS_YELLOW}] text-white py-2 px-4 rounded-full font-semibold hover:bg-[#b38a00]`}
        >
          Post
        </button>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="font-semibold text-lg">{post.author}</h3>
            <p className="mb-2">{post.content}</p>

            {/* Media */}
            {post.media && (
              <div className="mb-4">
                {post.media.endsWith(".mp4") ? (
                  <video controls className="max-w-full rounded-lg">
                    <source src={post.media} type="video/mp4" />
                  </video>
                ) : (
                  <img src={post.media} alt="Post Media" className="max-w-full rounded-lg" />
                )}
              </div>
            )}

            {/* Comments */}
            <div className="mt-4">
              <h4 className="font-semibold">Comments</h4>
              {post.comments.map((comment, index) => (
                <p key={index} className="border-t py-2">
                  <span className="font-semibold">{comment.author}:</span> {comment.comment}
                </p>
              ))}

              {/* Add Comment */}
              {selectedPostId === post.id ? (
                <div className="mt-2 flex flex-col gap-2">
                  <textarea
                    rows={2}
                    className="border rounded-lg p-2"
                    placeholder="Write a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                  <button
                    onClick={() => handleComment(post.id)}
                    className={`bg-[${TERRAPODS_YELLOW}] text-white py-1 px-4 rounded-full font-semibold hover:bg-[#b38a00]`}
                  >
                    Submit Comment
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSelectedPostId(post.id)}
                  className="text-blue-600 mt-2 hover:underline"
                >
                  Add Comment
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
