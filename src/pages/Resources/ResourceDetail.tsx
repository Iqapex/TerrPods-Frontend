import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TERRAPODS_YELLOW = "#D6A900";

interface ResourceDetailType {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string; // full recipe/paper content
  type: "public" | "member";
  author: string;
}

const ResourceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [resource, setResource] = useState<ResourceDetailType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/api/resources/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch resource");
        return res.json();
      })
      .then((data) => {
        setResource(data);
      })
      .catch((err) => {
        console.error(err);
        setResource(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!resource) return <div className="p-8 text-red-500">Resource not found</div>;

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-4">{resource.title}</h1>
        <p className="text-sm text-gray-600 mb-2">
          Category: <span className="font-semibold">{resource.category}</span>
        </p>
        <p className="text-sm text-gray-600 mb-4">Author: {resource.author}</p>
        <p className="text-gray-700 mb-6">{resource.description}</p>

        <div className="prose max-w-none">
          {/* Render markdown or plain text */}
          {resource.content.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ResourceDetail;
