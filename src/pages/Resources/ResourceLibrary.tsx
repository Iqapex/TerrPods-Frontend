import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// TerraPods brand yellow
const TERRAPODS_YELLOW = "#D6A900";

interface Resource {
  id: string;
  title: string;
  category: string;
  description: string;
  type: "public" | "member";
}

const ResourceLibrary = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [filter, setFilter] = useState<"all" | "public" | "member">("all");
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all resources from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/resources")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch resources");
        return res.json();
      })
      .then((data: Resource[]) => setResources(data))
      .catch((err) => console.error("Error fetching resources:", err))
      .finally(() => setLoading(false));
  }, []);

  // ✅ Filter logic
  const filteredResources =
    filter === "all"
      ? resources
      : resources.filter((r) => r.type === filter);

  if (loading) return <div className="p-8">Loading resources...</div>;
  if (!resources.length)
    return <div className="p-8 text-gray-500">No resources available.</div>;

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        📚 Resource Library
      </motion.h1>

      {/* Filter Buttons */}
      <div className="mb-6 flex flex-wrap gap-4">
        {["all", "public", "member"].map((f) => (
          <button
            key={f}
            className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
              filter === f
                ? "bg-[#D6A900] text-white shadow-md"
                : "bg-white text-gray-800 border hover:bg-gray-100"
            }`}
            onClick={() => setFilter(f as "all" | "public" | "member")}
          >
            {f === "all"
              ? "All"
              : f === "public"
              ? "Public Resources"
              : "Members Only"}
          </button>
        ))}
      </div>

      {/* Resource Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.map((resource) => (
          <motion.div
            key={resource.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 border border-transparent hover:border-[#D6A900]"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-xl font-bold mb-2 text-gray-800">{resource.title}</h2>
            <p className="text-sm text-gray-600 mb-2">
              Category: <span className="font-semibold">{resource.category}</span>
            </p>
            <p className="text-gray-700 mb-4 line-clamp-3">
              {resource.description}
            </p>

            {/* ✅ Updated to React Router Link */}
            <Link
              to={`/resources/${resource.id}`}
              className="inline-block px-4 py-2 rounded-full font-semibold text-white bg-[#D6A900] hover:bg-[#b38a00] transition duration-300"
            >
              View Resource
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResourceLibrary;
