import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Users, Globe, Leaf } from 'lucide-react';

// TerraPods Yellow
const TERRAPODS_YELLOW = "#D6A900";       // PANTONE 605C
const TERRAPODS_YELLOW_DARK = "#b38a00";  // Darker shade for hover

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    {
      name: "EcoInnovate Labs",
      type: "Research Partner",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
      description: "Leading research institution focusing on sustainable technologies"
    },
    {
      name: "Green Future Foundation",
      type: "Environmental Partner",
      logo: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      description: "Global organization dedicated to environmental conservation"
    },
    {
      name: "ArtEco Alliance",
      type: "Arts Partner",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      description: "Supporting artists working with sustainable materials"
    },
    {
      name: "Sustainable Agriculture Network",
      type: "Agriculture Partner",
      logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      description: "Promoting regenerative farming practices worldwide"
    }
  ];

  const stats = [
    { icon: <Building2 className="h-8 w-8" />, number: "50+", label: "Partner Organizations" },
    { icon: <Users className="h-8 w-8" />, number: "10k+", label: "Community Members" },
    { icon: <Globe className="h-8 w-8" />, number: "25+", label: "Countries" },
    { icon: <Leaf className="h-8 w-8" />, number: "100+", label: "Projects" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">

      {/* Hero Section */}
      <section style={{ backgroundColor: TERRAPODS_YELLOW }} className="relative py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partners & Supporters</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Together with our partners, we're building a more sustainable and creative future
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4" style={{ color: TERRAPODS_YELLOW }}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Partners</h2>
            <p className="text-xl text-gray-600">
              Meet the organizations helping us make a difference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{partner.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
                    style={{ backgroundColor: `${TERRAPODS_YELLOW}33`, color: TERRAPODS_YELLOW }} // Slightly transparent background
                  >
                    {partner.type}
                  </span>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section style={{ backgroundColor: TERRAPODS_YELLOW }} className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in our mission to create sustainable solutions and foster creativity
            </p>
            <button
              style={{ color: TERRAPODS_YELLOW, backgroundColor: "white" }}
              className="px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Partner With Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
