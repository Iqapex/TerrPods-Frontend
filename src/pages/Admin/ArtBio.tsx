// src/pages/admin/ArtBio.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const TERRAPODS_YELLOW = "#D6A900";

const ArtBio = () => {
  const [programType, setProgramType] = useState("artsResidency"); // artsResidency or biomaterialWorkshop
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    applicationLink: ""
  });
  const [editId, setEditId] = useState(null);

  const backendUrl = "http://localhost:5000/api/programs"; // backend base URL

  const fetchEntries = async () => {
    try {
      const res = await axios.get(`${backendUrl}/${programType}`);
      setEntries(res.data || []);
    } catch (err) {
      console.error("Fetch error:", err);
      setEntries([]);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, [programType]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value || "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${backendUrl}/${programType}/${editId}`, form);
      } else {
        await axios.post(`${backendUrl}/${programType}`, form);
      }
      setForm({ title: "", description: "", applicationLink: "" });
      setEditId(null);
      fetchEntries();
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  const handleEdit = (entry) => {
    setForm({
      title: entry.title || "",
      description: entry.description || "",
      applicationLink: entry.applicationLink || ""
    });
    setEditId(entry._id || entry.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this entry?")) return;
    try {
      await axios.delete(`${backendUrl}/${programType}/${id}`);
      fetchEntries();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="p-8 mt-16">
      <h1 className="text-3xl font-bold mb-6">
        Manage Arts Residency & Biomaterial Workshop
      </h1>

      {/* Program Selector */}
      <div className="mb-6">
        <label className="font-semibold mr-4">Select Program:</label>
        <select
          value={programType}
          onChange={(e) => setProgramType(e.target.value)}
          className="border px-3 py-1 rounded"
        >
          <option value="artsResidency">Arts Residency</option>
          <option value="biomaterialWorkshop">Biomaterial Workshop</option>
        </select>
      </div>

      {/* Add/Edit Form */}
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">
          {editId ? "Edit Entry" : "Add New Entry"} —{" "}
          <span style={{ color: TERRAPODS_YELLOW }}>
            {programType === "artsResidency" ? "Arts Residency" : "Biomaterial Workshop"}
          </span>
        </h2>

        <div className="mb-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="border w-full px-3 py-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="border w-full px-3 py-2 rounded"
            rows="3"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="url"
            name="applicationLink"
            placeholder="Application Link"
            value={form.applicationLink}
            onChange={handleChange}
            className="border w-full px-3 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          {editId ? "Update Entry" : "Add Entry"}
        </button>

        {editId && (
          <button
            type="button"
            className="ml-4 px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            onClick={() => {
              setEditId(null);
              setForm({ title: "", description: "", applicationLink: "" });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      {/* Entries Table */}
      <h2 className="text-2xl font-bold mb-4">Entries</h2>
      {entries.length === 0 ? (
        <p>No entries found for {programType}.</p>
      ) : (
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Link</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={entry._id || entry.id || index}>
                <td className="border px-4 py-2">{entry.title}</td>
                <td className="border px-4 py-2">{entry.description}</td>
                <td className="border px-4 py-2">
                  <a
                    href={entry.applicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Link
                  </a>
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(entry)}
                    className="px-4 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(entry._id || entry.id)}
                    className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ArtBio;
