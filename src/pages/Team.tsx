import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface SocialLinks {
  linkedin: string;
  twitter: string;
  email: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: SocialLinks;
}

// ✅ TerraPods Yellow (Pantone 605C)
const TERRAPODS_YELLOW = "#D6A900";
const TERRAPODS_YELLOW_DARK = "#b38a00";

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers: {
    leadership: TeamMember[];
    creative: TeamMember[];
    research: TeamMember[];
  } = {
    leadership: [
      {
        name: "Sarah Johnson",
        role: "Founder & Executive Director",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        bio: "Visionary leader with 15+ years in sustainable innovation",
        social: {
          linkedin: "#",
          twitter: "#",
          email: "sarah@terrapods.org"
        }
      },
      {
        name: "Michael Chen",
        role: "Head of Agroecology",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        bio: "Expert in regenerative farming and permaculture design",
        social: {
          linkedin: "#",
          twitter: "#",
          email: "michael@terrapods.org"
        }
      }
    ],
    creative: [
      {
        name: "Elena Rodriguez",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
        bio: "Award-winning artist specializing in sustainable materials",
        social: {
          linkedin: "#",
          twitter: "#",
          email: "elena@terrapods.org"
        }
      },
      {
        name: "David Kumar",
        role: "Design Innovation Lead",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        bio: "Pioneering biomaterial design solutions",
        social: {
          linkedin: "#",
          twitter: "#",
          email: "david@terrapods.org"
        }
      }
    ],
    research: [
      {
        name: "Dr. Lisa Wang",
        role: "Research Director",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
        bio: "Leading research initiatives in sustainable technologies",
        social: {
          linkedin: "#",
          twitter: "#",
          email: "lisa@terrapods.org"
        }
      },
      {
        name: "James Wilson",
        role: "Environmental Scientist",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
        bio: "Specializing in ecosystem restoration",
        social: {
          linkedin: "#",
          twitter: "#",
          email: "james@terrapods.org"
        }
      }
    ]
  };

  const renderTeamSection = (
    title: string,
    description: string,
    members: TeamMember[],
    bg: string = "bg-white"
  ) => (
    <section className={`py-20 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {members.map((member: TeamMember, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="md:flex h-[320px]">
                <div className="md:w-1/3 h-full overflow-hidden">
                  <div className="zoom-wrapper w-full h-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover zoom-image"
                    />
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="font-medium mb-4" style={{ color: TERRAPODS_YELLOW }}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-500">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-green-500">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* ✅ TerraPods Yellow header */}
      <section
        className="relative py-20 text-gray-900"
        style={{ backgroundColor: TERRAPODS_YELLOW }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Meet the passionate individuals driving innovation and sustainability at TerraPods
            </p>
          </motion.div>
        </div>
      </section>

      <div ref={ref}>
        {renderTeamSection("Leadership Team", "Guiding our vision and mission", teamMembers.leadership)}
        {renderTeamSection("Creative Team", "Bringing innovation to life", teamMembers.creative, "bg-gray-50")}
        {renderTeamSection("Research Team", "Advancing sustainable solutions", teamMembers.research)}
      </div>

      {/* ✅ TerraPods Yellow CTA */}
      <section style={{ backgroundColor: TERRAPODS_YELLOW }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-gray-900"
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our mission
            </p>
            <button
              className="px-8 py-3 rounded-full font-semibold transition-colors"
              style={{
                backgroundColor: "white",
                color: TERRAPODS_YELLOW,
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW_DARK)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              View Open Positions
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
