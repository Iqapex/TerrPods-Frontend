// src/components/Dashboard/Gallery.tsx
import { useState } from "react";

interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  author: string;
  category: string;
}

const mockGalleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Eco Textile Research",
    imageUrl: "/gallery/image1.jpg",
    description: "A sustainable textile sample created from banana fiber.",
    author: "Rina S.",
    category: "Biomaterial",
  },
  {
    id: 2,
    title: "Agroecology Map",
    imageUrl: "/gallery/image2.jpg",
    description: "Visualizing intercropping methods in eastern India.",
    author: "Amit D.",
    category: "Agroecology",
  },
  {
    id: 3,
    title: "Biomaterial Sculpture",
    imageUrl: "/gallery/image3.jpg",
    description: "Art meets sustainability in this mycelium-based sculpture.",
    author: "Leena K.",
    category: "Art & Research",
  },
];

const Gallery = () => {
  const [galleryItems] = useState<GalleryItem[]>(mockGalleryData);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 animate-background bg-fixed">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
        Digital Gallery & Member Showcase
      </h1>

      <div className="mb-6 flex flex-wrap gap-3 justify-center">
        {["All", "Biomaterial", "Agroecology", "Art & Research"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg 
                ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-800 border-gray-300"
                }`}
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-56 object-cover transition duration-300 hover:opacity-90"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-indigo-800">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <div className="text-xs text-gray-500">By {item.author}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Section – visible only for contributors (example, toggle or role-based) */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-3 text-gray-800">
          Contribute Your Work
        </h2>
        <p className="mb-4 text-sm text-gray-600">
          Submit your artwork, research update, or bio-based innovation for
          community showcase.
        </p>

        <form className="bg-white p-6 rounded-lg space-y-4 max-w-2xl shadow-md">
          <input
            type="text"
            placeholder="Title"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <textarea
            placeholder="Description"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
            rows={4}
          />
          <input
            type="file"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition duration-300"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default Gallery;
