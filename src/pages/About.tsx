import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Heart, Globe, Sun } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#FFF5E0]"> 
        {/* light tint of TerraPods yellow for background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Founding Roots</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              TerraPods emerged from a vision to create a space where nature, art, and innovation converge
              to address our world's most pressing environmental challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Vision</h2>
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
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
                alt="TerraPods Vision"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

      {/* FAQs Section */}
      <section className="py-20 bg-gradient-to-b from-[#FFF5E0] to-[#ffffff]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fadeIn">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "What is TerraPods?",
                answer: "TerraPods is an initiative focused on combining nature, art, and innovation to address global environmental issues."
              },
              {
                question: "Who can apply for the programs?",
                answer: "Our programs are open to individuals and communities passionate about sustainability, art, and innovation."
              },
              {
                question: "How can I support TerraPods?",
                answer: "You can support by donating, volunteering, or partnering with us through CSR initiatives."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-fadeUp"
              >
                <h3 className="text-xl font-semibold text-[#D6A537]">{faq.question}</h3>
                <p className="mt-3 text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
