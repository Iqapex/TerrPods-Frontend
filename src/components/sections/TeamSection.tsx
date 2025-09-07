import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "Leading TerraPods' vision of sustainable innovation",
    },
    {
      name: "Michael Chen",
      role: "Head of Agroecology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Expert in regenerative farming practices",
    },
    {
      name: "Elena Rodriguez",
      role: "Art Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Curating our artistic vision and residencies",
    },
    {
      name: "David Kumar",
      role: "Biomaterial Researcher",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      bio: "Innovating sustainable material solutions",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the passionate individuals driving innovation at TerraPods
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-60 overflow-hidden">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                {/* ✅ TerraPods Yellow applied */}
                <p className="text-[#D6A900] font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
