import React, { useEffect, useState } from "react";
import axios from "axios";

const TERRAPODS_YELLOW = "#D6A900"; // Main yellow
const TERRAPODS_YELLOW_DARK = "#b38a00"; // Darker hover

const AdminPrograms = () => {
  const [programs, setPrograms] = useState([]);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    status: "Open",
    description: "",
    features: [],
    image: "",
    applicationLink: "",
  });
  const [editingId, setEditingId] = useState(null);

  const backendUrl = "http://localhost:5000/api/admin/programs";

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const res = await axios.get(backendUrl);
      setPrograms(res.data);
    } catch (err) {
      console.error("Error fetching programs:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({
      title: "",
      slug: "",
      status: "Open",
      description: "",
      features: [],
      image: "",
      applicationLink: "",
    });
    setEditingId(null);
  };

  const handleAddProgram = async () => {
    try {
      await axios.post(backendUrl, form);
      resetForm();
      fetchPrograms();
    } catch (err) {
      console.error("Error adding program:", err);
    }
  };

  const handleUpdateProgram = async () => {
    if (!editingId) return;
    try {
      await axios.put(`${backendUrl}/${editingId}`, form);
      resetForm();
      fetchPrograms();
    } catch (err) {
      console.error("Error updating program:", err);
    }
  };

  const handleDeleteProgram = async (id) => {
    try {
      await axios.delete(`${backendUrl}/${id}`);
      fetchPrograms();
    } catch (err) {
      console.error("Error deleting program:", err);
    }
  };

  const startEditing = (program) => {
    setForm({
      title: program.title,
      slug: program.slug,
      status: program.status,
      description: program.description,
      features: program.features || [],
      image: program.image,
      applicationLink: program.applicationLink || "",
    });
    setEditingId(program.id);
  };

  return (
    <div className="p-4 md:p-8 lg:p-10 max-w-7xl mx-auto">
      {/* Fix overlap with navbar by adding margin-top */}
      <h1
        className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 border-b-4"
        style={{ borderColor: TERRAPODS_YELLOW, marginTop: "80px" }}
      >
        Admin Dashboard — Programs
      </h1>

      {/* Program Form */}
      <div className="mb-8 border p-4 md:p-6 rounded-lg bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? "Edit Program" : "Add Program"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            name="slug"
            placeholder="Slug"
            value={form.slug}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          >
            <option>Open</option>
            <option>Closed</option>
            <option>In Review</option>
          </select>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            name="applicationLink"
            placeholder="Application Link"
            value={form.applicationLink}
            onChange={handleChange}
            className="p-2 border rounded w-full col-span-2"
          />
        </div>
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="p-2 border rounded w-full mt-4"
        ></textarea>
        <div className="mt-4 flex flex-wrap gap-2">
          {editingId ? (
            <>
              <button
                onClick={handleUpdateProgram}
                className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 px-4 rounded transition"
                style={{ backgroundColor: TERRAPODS_YELLOW }}
              >
                Update Program
              </button>
              <button
                onClick={resetForm}
                className="bg-gray-500 hover:bg-gray-600 text-white p-2 px-4 rounded transition"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleAddProgram}
              className="text-white p-2 px-4 rounded transition"
              style={{ backgroundColor: TERRAPODS_YELLOW }}
            >
              Add Program
            </button>
          )}
        </div>
      </div>

      {/* Programs List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div
            key={program.id}
            className="border p-4 rounded-lg bg-white shadow hover:shadow-lg flex flex-col"
          >
            {program.image && (
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
            )}
            <h2 className="font-bold text-lg mb-2">{program.title}</h2>
            <p className="text-gray-700 flex-grow">{program.description}</p>

            {/* Apply Now button */}
            {program.applicationLink && (
              <a
                href={program.applicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <button
                  className="text-white px-4 py-2 rounded w-full transition"
                  style={{ backgroundColor: TERRAPODS_YELLOW }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = TERRAPODS_YELLOW_DARK)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = TERRAPODS_YELLOW)
                  }
                >
                  Apply Now
                </button>
              </a>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => startEditing(program)}
                className="bg-yellow-500 p-2 px-4 text-white rounded hover:bg-yellow-600 transition"
                style={{ backgroundColor: TERRAPODS_YELLOW }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProgram(program.id)}
                className="bg-red-500 p-2 px-4 text-white rounded hover:bg-red-600 transition"
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

export default AdminPrograms;
