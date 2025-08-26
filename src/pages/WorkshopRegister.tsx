import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WorkshopRegister = () => {
  const [searchParams] = useSearchParams();
  const workshopTitle = searchParams.get("title");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/workshops/register", {
        name,
        email,
        workshop: workshopTitle,
      });

      if (response.status === 201) {
        toast.success("🎉 Successfully registered for the workshop!", {
          position: "top-right",
          autoClose: 3000,
        });
        setName("");
        setEmail("");
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "Registration failed.",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Register for {workshopTitle || "Workshop"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default WorkshopRegister;
