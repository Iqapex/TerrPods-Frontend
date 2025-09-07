import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trees as Tree, Heart, Users, Leaf } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Donate = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    donationType: '',
    amount: '',
    message: ''
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
        name: form.name,
        email: form.email,
        message: form.message
      });
      toast.success('Message sent successfully!');
      setForm({ ...form, message: '' });
    } catch (err) {
      console.error(err);
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/donations/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          donationType: form.donationType,
          amount: parseFloat(form.amount)
        })
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error('No URL received from Stripe.');
      }
    } catch (error) {
      console.error('Fetch failed:', error);
      toast.error('Failed to connect to backend. Please make sure the server is running.');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#D4A017] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Grow With Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              With every donation, we will plant a native tree in your name along the walking path in our food forest.
              A testament to each individual who grew TerraPods with us from seed to fruit!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your support helps us continue our mission of fostering sustainable practices and
              nurturing creative innovation in our community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: <Tree className="h-12 w-12" />, number: '1000+', label: 'Trees Planted' },
              { icon: <Heart className="h-12 w-12" />, number: '500+', label: 'Donors' },
              { icon: <Users className="h-12 w-12" />, number: '200+', label: 'Artists Supported' },
              { icon: <Leaf className="h-12 w-12" />, number: '50+', label: 'Projects Funded' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4 text-[#D4A017]">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Support Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose how you'd like to contribute to our mission
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'One-Time Donation',
                description: 'Make a single contribution to support our programs',
                amount: 'Choose Amount',
                color: 'bg-white'
              },
              {
                title: 'Monthly Supporter',
                description: 'Become a regular contributor to our mission',
                amount: 'From $10/month',
                color: 'bg-[#D4A017] text-white'
              },
              {
                title: 'Corporate Sponsorship',
                description: 'Partner with us for lasting impact',
                amount: 'Custom Amount',
                color: 'bg-white'
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`${option.color} p-8 rounded-lg shadow-lg text-center`}
              >
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    option.color === 'bg-white' ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {option.title}
                </h3>
                <p
                  className={`mb-6 ${
                    option.color === 'bg-white' ? 'text-gray-600' : 'text-white'
                  }`}
                >
                  {option.description}
                </p>
                <div
                  className={`text-xl font-semibold mb-6 ${
                    option.color === 'bg-white' ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {option.amount}
                </div>
                <button
                  onClick={toggleModal}
                  className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                    option.color === 'bg-white'
                      ? 'bg-[#D4A017] text-white hover:bg-[#B38912]'
                      : 'bg-white text-[#D4A017] hover:bg-gray-100'
                  }`}
                >
                  Donate Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Make a Donation</h2>
            <form className="flex flex-col gap-3" onSubmit={handleDonate}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border p-2 rounded"
                value={form.name}
                onChange={handleFormChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border p-2 rounded"
                value={form.email}
                onChange={handleFormChange}
                required
              />
              <select
                name="donationType"
                className="border p-2 rounded"
                value={form.donationType}
                onChange={handleFormChange}
                required
              >
                <option value="">Select Donation Type</option>
                <option value="one-time">One-time</option>
                <option value="monthly">Monthly</option>
              </select>
              <input
                type="number"
                name="amount"
                placeholder="Amount in USD"
                className="border p-2 rounded"
                value={form.amount}
                onChange={handleFormChange}
                required
              />
              <button
                type="submit"
                className="bg-[#D4A017] text-white py-2 rounded hover:bg-[#B38912] transition"
              >
                Proceed to Payment
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center text-[#D4A017]">
              Contact for CSR/Partnership
            </h2>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleFormChange}
                className="border p-2 rounded"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleFormChange}
                className="border p-2 rounded"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleFormChange}
                rows={4}
                className="border p-2 rounded"
                required
              />
              <button
                type="submit"
                className="bg-[#D4A017] text-white py-2 rounded hover:bg-[#B38912] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
