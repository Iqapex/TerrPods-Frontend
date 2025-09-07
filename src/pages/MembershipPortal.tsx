import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Users, Book, Star, Check, ArrowRight } from 'lucide-react';

// TerraPods Yellow
const TERRAPODS_YELLOW = "#D6A900";       // PANTONE 605C
const TERRAPODS_YELLOW_DARK = "#b38a00";  // Darker for hover

const MembershipPortal = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const benefits = [
    {
      icon: <Shield className="h-12 w-12" style={{ color: TERRAPODS_YELLOW }} />,
      title: "Exclusive Access",
      description: "Priority registration for workshops and events"
    },
    {
      icon: <Users className="h-12 w-12" style={{ color: TERRAPODS_YELLOW }} />,
      title: "Community Network",
      description: "Connect with like-minded individuals and experts"
    },
    {
      icon: <Book className="h-12 w-12" style={{ color: TERRAPODS_YELLOW }} />,
      title: "Resource Library",
      description: "Access to our digital library and research materials"
    },
    {
      icon: <Star className="h-12 w-12" style={{ color: TERRAPODS_YELLOW }} />,
      title: "Special Discounts",
      description: "Member pricing on workshops and products"
    }
  ];

  const membershipTiers = [
    {
      name: "Community",
      price: "Free",
      features: [
        "Basic access to community forums",
        "Monthly newsletter",
        "Public events access",
        "Basic resource library"
      ]
    },
    {
      name: "Creator",
      price: "$10/month",
      features: [
        "Priority workshop registration",
        "Extended resource library",
        "Member-only events",
        "Discounted workshop fees",
        "Community forum participation",
        "Monthly virtual meetups"
      ],
      highlighted: true
    },
    {
      name: "Innovator",
      price: "$25/month",
      features: [
        "All Creator benefits",
        "Dedicated mentorship",
        "Project collaboration",
        "Lab space access",
        "Exhibition opportunities",
        "Research participation"
      ]
    }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Become part of a growing network of innovators, artists, and sustainability enthusiasts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Member Benefits</h2>
            <p className="text-xl text-gray-600">Unlock exclusive opportunities and resources</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600">Select the membership that fits your journey</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`rounded-lg overflow-hidden ${
                  tier.highlighted
                    ? `bg-[${TERRAPODS_YELLOW}] text-white transform scale-105 shadow-xl`
                    : 'bg-white text-gray-900 shadow-lg'
                }`}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  <div className="text-3xl font-bold mb-6">{tier.price}</div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 flex-shrink-0" style={{ color: TERRAPODS_YELLOW }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-full font-semibold flex items-center justify-center transition-colors ${
                      tier.highlighted
                        ? `bg-white text-[${TERRAPODS_YELLOW}] hover:bg-[#f3f3f3]`
                        : `bg-[${TERRAPODS_YELLOW}] text-white hover:bg-[${TERRAPODS_YELLOW_DARK}]`
                    }`}
                  >
                    Join Now
                    <ArrowRight className="ml-2 h-5 w-5" style={tier.highlighted ? { color: TERRAPODS_YELLOW } : { color: 'white' }} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Member Stories</h2>
            <p className="text-xl text-gray-600">Hear from our community members</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
                name: "Sarah Chen",
                role: "Artist & Researcher",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                quote: "Being part of TerraPods has opened up incredible opportunities for collaboration and growth."
              },
              {
                name: "Michael Rodriguez",
                role: "Environmental Designer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                quote: "The community and resources here have been invaluable for my sustainable design practice."
              },
              {
                name: "Emma Thompson",
                role: "Community Garden Leader",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                quote: "TerraPods has helped me turn my passion for sustainable agriculture into reality."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p style={{ color: TERRAPODS_YELLOW }}>{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about membership</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[{
                question: "How do I join?",
                answer: "Simply choose your membership tier and complete the registration process. You'll get immediate access to member benefits."
              },
              {
                question: "Can I upgrade my membership?",
                answer: "Yes, you can upgrade your membership at any time. The new benefits will be available immediately."
              },
              {
                question: "What's included in the resource library?",
                answer: "Our resource library includes research papers, guides, templates, and video tutorials on sustainable practices."
              },
              {
                question: "How do I access member events?",
                answer: "Members receive calendar invites and exclusive access links to all member events through their dashboard."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipPortal;
