import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sprout, Heart, Globe } from 'lucide-react';

const IntroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nurtured by the sun, rooted in the soil, sustained by the rain. We've sprouted in the serene wilderness of Baskinta, 
            a rural village in Lebanon where bio-design, art, and agroecology co-create in abundant harmony.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Sprout className="h-12 w-12 text-[#D6A900]" />, // TerraPods Yellow
              title: "Sustainable Growth",
              description: "Fostering ecological practices that nurture both land and community",
            },
            {
              icon: <Heart className="h-12 w-12 text-[#D6A900]" />, // TerraPods Yellow
              title: "Community Care",
              description: "Building strong connections through shared learning and creation",
            },
            {
              icon: <Globe className="h-12 w-12 text-[#D6A900]" />, // TerraPods Yellow
              title: "Global Impact",
              description: "Inspiring change through innovative environmental solutions",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
