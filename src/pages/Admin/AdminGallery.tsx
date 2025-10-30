import React, { useEffect, useState } from "react";
import axios from "axios";

const TERRAPODS_YELLOW = "#D6A900";
const TERRAPODS_YELLOW_DARK = "#b38a00";

const AdminGallery = () => {
  const [artworks, setArtworks] = useState<any[]>([]);
  const [form, setForm] = useState({
    title: "",
    artist: "",
    imageUrl: "",
    price: "",
  });

  const fetchArtworks = () => {
    axios.get("/api/gallery").then((res) => setArtworks(res.data));
  };

  useEffect(() => {
    fetchArtworks();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post("/api/gallery", form).then(() => {
      fetchArtworks();
      setForm({ title: "", artist: "", imageUrl: "", price: "" });
    });
  };

  const handleDelete = (id: string) => {
    axios.delete(`/api/gallery/${id}`).then(() => fetchArtworks());
  };

  return (
    <div className="p-8 max-w-6xl mx-auto pt-28">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Manage Gallery</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 bg-white p-4 rounded shadow-sm"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={form.artist}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <button
          type="submit"
          className="text-white font-semibold px-4 py-2 rounded transition duration-300"
          style={{ backgroundColor: TERRAPODS_YELLOW }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW_DARK)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW)
          }
        >
          Add Artwork
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded shadow-sm">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 border text-left">Title</th>
              <th className="py-3 px-4 border text-left">Artist</th>
              <th className="py-3 px-4 border text-left">Price</th>
              <th className="py-3 px-4 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {artworks.map((art) => (
              <tr key={art._id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{art.title}</td>
                <td className="border px-4 py-2">{art.artist}</td>
                <td className="border px-4 py-2">{art.price}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    className="text-white px-4 py-1 rounded transition duration-300"
                    style={{ backgroundColor: TERRAPODS_YELLOW }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        TERRAPODS_YELLOW_DARK)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW)
                    }
                    onClick={() => handleDelete(art._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminGallery;
