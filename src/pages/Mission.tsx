import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Leaf, Heart, Globe, Sun } from "lucide-react";

const Mission = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Our Mission */}
      <section className="py-16 bg-[#FFF5E0]"> 
        {/* soft tint of TerraPods yellow */}
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-emerald-800 mb-6 mt-20">Our Mission</h1>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            At TerraPods, our mission is to grow a regenerative future through the power of{" "}
            <strong>art, science, and community</strong>. We believe that by weaving together
            bio-design, agroecology, and creative expression, we can nurture ecosystems that
            sustain both people and the planet.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rooted in the serene wilderness of Baskinta, Lebanon, TerraPods is a living
            laboratory where makers, artists, and innovators collaborate to develop solutions
            that honor biodiversity, promote circular economies, and foster environmental
            stewardship. Our programmes span from immersive artist residencies to agroecological
            farming, from biomaterial research to community-driven workshops — all designed to
            cultivate skills, ideas, and relationships that regenerate our shared world.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We are committed to creating an inclusive and safe space where diverse voices can
            contribute to reimagining sustainable futures. Guided by the principles of ecological
            balance, cultural heritage, and creative collaboration, we strive to plant seeds — 
            both literal and metaphorical — that will flourish for generations to come.
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 mt-8">
            "Nurtured by the sun, rooted in the soil, sustained by the rain — we invite you to join
            us in transforming our ecology with TerraPods."
          </blockquote>
        </div>
      </section>

      {/* Founding Roots */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Founding Roots
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              TerraPods emerged from a vision to create a space where nature, art, and innovation
              converge to address our world's most pressing environmental challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                We envision a world where sustainable practices, artistic expression, and ecological innovation
                work in harmony to create positive environmental and social impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Leaf className="h-8 w-8 text-[#D6A537]" />, text: "Sustainable Growth" },
                  { icon: <Heart className="h-8 w-8 text-[#D6A537]" />, text: "Community Care" },
                  { icon: <Globe className="h-8 w-8 text-[#D6A537]" />, text: "Global Impact" },
                  { icon: <Sun className="h-8 w-8 text-[#D6A537]" />, text: "Innovation" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    {item.icon}
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <img
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
                alt="Our Vision"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do at TerraPods, from our daily operations
              to our long-term vision for the future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Environmental Stewardship",
                description: "We are committed to protecting and nurturing our natural environment through sustainable practices."
              },
              {
                title: "Creative Innovation",
                description: "We believe in the power of creativity to solve environmental challenges and inspire change."
              },
              {
                title: "Community Empowerment",
                description: "We work to build strong, resilient communities through education and collaboration."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#D6A537]"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
