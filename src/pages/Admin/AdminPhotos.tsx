import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const TERRAPODS_YELLOW = "#D6A900";       // Brand Yellow
const TERRAPODS_YELLOW_DARK = "#b38a00";  // Darker Hover Yellow

const AdminPhotos = () => {
  const [photos, setPhotos] = useState<any[]>([]);
  const [section, setSection] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/photos");
      setPhotos(res.data);
    } catch (err) {
      console.error("Error fetching photos:", err);
    }
  };

  const handleAddPhoto = async () => {
    if (!section || !fileInputRef.current?.files?.[0]) {
      alert("Please select section and image file");
      return;
    }

    const formData = new FormData();
    formData.append("section", section);
    formData.append("image", fileInputRef.current.files[0]);

    try {
      await axios.post("http://localhost:5000/api/admin/photos", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSection("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      fetchPhotos();
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  const handleDeletePhoto = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/photos/${id}`);
      fetchPhotos();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto pt-28">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Admin — Manage Photos
      </h1>

      <div className="mb-6 border p-4 rounded bg-gray-50 shadow-sm">
        <input
          type="text"
          placeholder="Section Name (e.g. ProgramsSection_Agroecology)"
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="p-2 border m-2 w-full rounded"
        />
        <input
          type="file"
          ref={fileInputRef}
          className="p-2 border m-2 w-full rounded"
        />
        <button
          onClick={handleAddPhoto}
          className="p-2 m-2 text-white rounded font-semibold w-full sm:w-auto transition duration-300"
          style={{ backgroundColor: TERRAPODS_YELLOW }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW_DARK)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW)
          }
        >
          Add Photo
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="border rounded-lg shadow-sm overflow-hidden flex flex-col bg-white"
          >
            <img
              src={`http://localhost:5000${photo.image}`}
              alt={photo.section}
              className="h-40 w-full object-cover"
            />
            <div className="p-3 flex flex-col items-center flex-grow">
              <h2 className="font-bold text-gray-800 text-center">
                {photo.section}
              </h2>
              <button
                onClick={() => handleDeletePhoto(photo.id)}
                className="mt-3 px-4 py-2 text-sm text-white rounded transition duration-300"
                style={{ backgroundColor: TERRAPODS_YELLOW }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    TERRAPODS_YELLOW_DARK)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPhotos;
