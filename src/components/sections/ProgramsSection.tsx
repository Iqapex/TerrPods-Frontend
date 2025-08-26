import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Users, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProgramsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
          {[
            {
              icon: <Leaf className="h-12 w-12 text-yellow-600" />,
              title: "Agroecology",
              description: "Sustainable farming practices and food forest development",
              link: "/programs#agroecology"
            },
            {
              icon: <Users className="h-12 w-12 text-yellow-600" />,
              title: "Art Residencies",
              description: "Creative spaces for artists and innovators",
              link: "/programs#residencies"
            },
            {
              icon: <Calendar className="h-12 w-12 text-yellow-600" />,
              title: "Workshops",
              description: "Hands-on learning experiences in biomaterials and more",
              link: "/programs#workshops"
            },
          ].map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <Link
                to={program.link}
                className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
