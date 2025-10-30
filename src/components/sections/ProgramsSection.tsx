import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ProgramsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/photos").then((res) => {
      setPhotos(res.data);
    });
  }, []);

  const programs = [
    {
      sectionName: "ProgramsSection_Agroecology",
      title: "Agroecology",
      description: "Sustainable farming practices and food forest development",
      link: "/programs#agroecology",
    },
    {
      sectionName: "ProgramsSection_Residencies",
      title: "Art Residencies",
      description: "Creative spaces for artists and innovators",
      link: "/programs#residencies",
    },
    {
      sectionName: "ProgramsSection_Workshops",
      title: "Workshops",
      description: "Hands-on learning experiences in biomaterials and more",
      link: "/programs#workshops",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our innovative programs combining art, science, and nature
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const photo = photos.find((p) => p.section === program.sectionName);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {photo ? (
                    <img
                      src={`http://localhost:5000${photo.image}`}
                      alt={program.title}
                      className="h-12 w-12 object-cover rounded"
                    />
                  ) : (
                    <div className="h-12 w-12 bg-gray-200 flex items-center justify-center rounded">
                      No Image
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Link
                  to={program.link}
                  className="text-[#D6A900] hover:text-[#B88F00] font-medium inline-flex items-center"
                >
                  Learn more
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
