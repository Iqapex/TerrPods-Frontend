import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Palette, FlaskRound as Flask, Users, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaRecycle, FaSeedling } from 'react-icons/fa';

const TERRAPODS_YELLOW = "#D6A900";
const TERRAPODS_YELLOW_DARK = "#b38a00";

const programs = [
  {
    title: 'Agroecology',
    slug: 'agroecology',
    status: 'Open',
    icon: <Leaf className="h-12 w-12" style={{ color: TERRAPODS_YELLOW }} />,
    description: 'Sustainable farming practices and food forest development',
    features: ['Regenerative farming techniques', 'Permaculture design', 'Soil health management', 'Water conservation'],
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d'
  },
  {
    title: 'Art Residencies',
    slug: 'art-residencies',
    status: 'Closed',
    icon: <Palette className="h-12 w-12" style={{ color: TERRAPODS_YELLOW }} />,
    description: 'Creative spaces for artists and innovators',
    features: ['Studio space', 'Exhibition opportunities', 'Collaborative projects', 'Community engagement'],
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f'
  },
  {
    title: 'Biomaterial Lab',
    slug: 'biomaterial-lab',
    status: 'Closed',
    icon: <Flask className="h-12 w-12" style={{ color: TERRAPODS_YELLOW }} />,
    description: 'Research and development of sustainable materials',
    features: ['Material innovation', 'Sustainable design', 'Waste reduction', 'Product development'],
    image: 'https://images.unsplash.com/photo-1581093458791-9d58e74010c1'
  },
  {
    title: 'Cigacycle',
    slug: 'cigacycle',
    status: 'In Review',
    icon: <FaRecycle className="h-12 w-12" style={{ color: TERRAPODS_YELLOW }} />,
    description: 'Upcycling cigarette butts into bricks and boards—reducing landfill waste and promoting environmental stewardship.',
    features: ['Waste collection drives', 'Innovative recycling techniques', 'Public awareness campaigns', 'Partnership with local vendors'],
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d00'
  },
  {
    title: 'Youth Innovation Fellowship',
    slug: 'youth-innovation',
    status: 'Open',
    icon: <FaSeedling className="h-12 w-12" style={{ color: TERRAPODS_YELLOW }} />,
    description: '6-month program supporting grassroots climate resilience innovations.',
    features: ['Mentorship from experienced leaders', 'Hands-on innovation labs', 'Field implementation support', 'Nationwide peer network'],
    image: 'https://images.unsplash.com/photo-1522008347694-86829f6eab2f'
  }
];

const workshops = [
  {
    title: 'Introduction to Permaculture',
    date: 'August 15, 2025',
    instructor: 'Michael Chen',
    spots: '10 spots left',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735'
  },
  {
    title: 'Biomaterial Design Workshop',
    date: 'September 5, 2025',
    instructor: 'Elena Rodriguez',
    spots: '5 spots left',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119'
  },
  {
    title: 'Sustainable Art Practices',
    date: 'October 10, 2025',
    instructor: 'David Kumar',
    spots: '8 spots left',
    image: 'https://images.unsplash.com/photo-1561839561-b13bcfe95249'
  }
];

const Programs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [statusFilter, setStatusFilter] = useState('All');
  const filteredPrograms = statusFilter === 'All' ? programs : programs.filter(p => p.status === statusFilter);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">

      {/* Hero Section */}
      <section className="relative py-20 text-white text-center" style={{ backgroundColor: TERRAPODS_YELLOW }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">Discover our innovative programs combining art, science, and sustainability</p>
        </motion.div>
      </section>

      {/* EcoSouk Marketplace */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold" style={{ color: TERRAPODS_YELLOW }}>EcoSouk: Our Regenerative Marketplace</h2>
          <p className="text-gray-700 mb-6">Discover sustainable businesses and eco-friendly products. Support artisans, farmers, and regenerative brands.</p>
          <div className="w-full h-[400px] sm:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe src="https://ecosouk.netlify.app/" title="EcoSouk" className="w-full h-full border-0" loading="lazy"></iframe>
          </div>
          <Link to="/open-calls">
            <button
              className="mt-6 px-6 py-3 font-semibold rounded-lg text-white"
              style={{ backgroundColor: TERRAPODS_YELLOW }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW_DARK)}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW)}
            >
              Stock Your Products
            </button>
          </Link>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold" style={{ color: TERRAPODS_YELLOW }}>Upcoming Events</h2>
        <p className="text-gray-700 mb-6">Stay connected with our events and trainings for communities and practitioners.</p>
        <div className="bg-white rounded-lg p-10 shadow-md">
          <p className="text-gray-500 italic">Calendar integration coming soon…</p>
        </div>
      </section>

      {/* Programs Section */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Buttons */}
          <div className="text-center mb-12">
            {['All', 'Open', 'Closed', 'In Review'].map(status => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-5 py-2 m-1 rounded-full border font-medium`}
                style={{
                  backgroundColor: statusFilter === status ? TERRAPODS_YELLOW : '#fff',
                  color: statusFilter === status ? '#fff' : '#374151',
                  borderColor: TERRAPODS_YELLOW
                }}
                onMouseOver={e => { if (statusFilter !== status) e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW_DARK; }}
                onMouseOut={e => { if (statusFilter !== status) e.currentTarget.style.backgroundColor = '#fff'; }}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          {filteredPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-20"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    {program.icon}
                    <h2 className="text-3xl font-bold text-gray-900">{program.title}</h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-8">{program.description}</p>
                  <ul className="space-y-4 mb-8">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: TERRAPODS_YELLOW }} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={`/apply/${program.slug}`}>
                    <button
                      className="px-6 py-3 rounded-full font-semibold inline-flex items-center text-white"
                      style={{ backgroundColor: TERRAPODS_YELLOW }}
                      onMouseOver={e => e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW_DARK}
                      onMouseOut={e => e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW}
                    >
                      Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <img src={program.image} alt={program.title} className="w-full h-96 object-cover rounded-lg shadow-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Workshops</h2>
            <p className="text-xl text-gray-600">Join our hands-on learning experiences</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img src={workshop.image} alt={workshop.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{workshop.title}</h3>
                  <div className="flex items-center text-gray-500 space-x-2 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500 space-x-2 mb-2">
                    <Users className="h-4 w-4" />
                    <span>{workshop.instructor}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-medium" style={{ color: TERRAPODS_YELLOW }}>{workshop.spots}</span>
                    <Link
                      to={`/workshop-register?title=${encodeURIComponent(workshop.title)}`}
                      className="px-6 py-3 rounded-full font-semibold inline-flex items-center text-white"
                      style={{ backgroundColor: TERRAPODS_YELLOW }}
                      onMouseOver={e => e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW_DARK}
                      onMouseOut={e => e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW}
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center text-white" style={{ backgroundColor: TERRAPODS_YELLOW }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Apply now to be part of our programs and workshops</p>
          <Link to="">
            <button className="px-8 py-3 rounded-full font-semibold text-yellow-600 bg-white hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Programs;
