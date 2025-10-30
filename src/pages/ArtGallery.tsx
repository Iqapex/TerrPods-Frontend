import React, { useEffect, useState } from "react";
import axios from "axios";

const TERRAPODS_YELLOW = "#D6A900";
const TERRAPODS_YELLOW_DARK = "#b38a00";

const ArtGallery = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/gallery")
      .then((res) => setArtworks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-16 bg-gray-50 pt-[6rem]"> {/* Added top padding */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Artworks Gallery</h1>
        <p className="text-lg text-gray-600 mb-12">
          Discover, explore, and purchase artworks by talented artists.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {artworks.map((art) => (
            <div
              key={art._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <img
                src={art.imageUrl}
                alt={art.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold">{art.title}</h3>
                <p className="text-gray-500">{art.artist}</p>
                <p
                  className="font-bold mt-2"
                  style={{ color: TERRAPODS_YELLOW }}
                >
                  {art.price}
                </p>
                <button
                  className="mt-4 w-full py-2 rounded transition"
                  style={{
                    backgroundColor: TERRAPODS_YELLOW,
                    color: "#000",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW_DARK)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW)
                  }
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;
