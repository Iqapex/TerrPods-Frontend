import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Palette, FlaskRound as Flask, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const TERRAPODS_YELLOW = "#D6A900";
const TERRAPODS_YELLOW_DARK = "#b38a00";

const Programs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [programs, setPrograms] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const res = await axios.get("/api/admin/programs");
      setPrograms(res.data);
    } catch (error) {
      console.error("Error fetching programs:", error);
    }
  };

  const filteredPrograms = statusFilter === "All"
    ? programs
    : programs.filter((p) => p.status === statusFilter);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 text-white text-center" style={{ backgroundColor: TERRAPODS_YELLOW }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">Discover our innovative programs combining art, science, and sustainability</p>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Buttons */}
          <div className="text-center mb-12">
            {["All", "Open", "Closed", "In Review"].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-5 py-2 m-1 rounded-full border font-medium`}
                style={{
                  backgroundColor: statusFilter === status ? TERRAPODS_YELLOW : "#fff",
                  color: statusFilter === status ? "#fff" : "#374151",
                  borderColor: TERRAPODS_YELLOW
                }}
                onMouseOver={(e) => {
                  if (statusFilter !== status) e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW_DARK;
                }}
                onMouseOut={(e) => {
                  if (statusFilter !== status) e.currentTarget.style.backgroundColor = "#fff";
                }}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          {filteredPrograms.map((program, index) => (
            <motion.div
              key={program._id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-20"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center space-x-4 mb-6">
                    {program.title === "Agroecology" && <Leaf className="h-12 w-12" style={{ color: TERRAPODS_YELLOW }} />}
                    {program.title === "Arts Residency" && <Palette className="h-12 w-12" style={{ color: TERRAPODS_YELLOW }} />}
                    {program.title === "Biomaterial" && <Flask className="h-12 w-12" style={{ color: TERRAPODS_YELLOW }} />}
                    <h2 className="text-3xl font-bold text-gray-900">{program.title}</h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-8">{program.description}</p>
                  <Link to={`/apply/${program.slug}`}>
                    <button
                      className="px-6 py-3 rounded-full font-semibold inline-flex items-center text-white"
                      style={{ backgroundColor: TERRAPODS_YELLOW }}
                      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW_DARK)}
                      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW)}
                    >
                      Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <img src={program.image} alt={program.title} className="w-full h-96 object-cover rounded-lg shadow-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Programs;
