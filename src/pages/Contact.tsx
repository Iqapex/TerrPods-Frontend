// src/pages/Contact.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      if (res.status === 201) {
        toast.success('📨 Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      toast.error('❌ Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 bg-[#FFF264] p-6 rounded-lg"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sow a Connection</h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us with any questions, ideas, or opportunities for collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFF264] focus:border-[#FFF264]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFF264] focus:border-[#FFF264]"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFF264] focus:border-[#FFF264]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFF264] focus:border-[#FFF264]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FFF264] text-gray-900 font-semibold px-6 py-3 rounded-md hover:bg-[#FFE600] transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#FFF264] mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Location</h3>
                    <p className="text-gray-600">Baskinta, Lebanon</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#FFF264] mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@terrapods.org</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#FFF264] mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+961 1 234 567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Visit Us</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-5xl mx-auto my-16 px-4 sm:px-6 lg:px-8 ">
          <div className="bg-gradient-to-br from-[#FFF9C2] to-green-50 p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-yellow-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:bg-[#FFFBEA] transition duration-300">
                <h3 className="text-xl font-semibold text-green-800">How can I get involved?</h3>
                <p className="text-gray-700 mt-2">
                  You can reach out via the contact form, or check out our volunteer and donation sections.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:bg-[#FFFBEA] transition duration-300">
                <h3 className="text-xl font-semibold text-[#9A8700]">Where are you based?</h3>
                <p className="text-gray-700 mt-2">
                  We’re located in Baskinta, Lebanon, but we work with partners globally.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:bg-[#FFFBEA] transition duration-300">
                <h3 className="text-xl font-semibold text-[#9A8700]">How can I make a donation?</h3>
                <p className="text-gray-700 mt-2">
                  You can visit the donation section of our website and choose your preferred donation method.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-[#FFFBEA] hover:bg-[#FFF9C2] transition-all duration-300 transform hover:scale-[1.02] p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-6 text-center">
            Community Guidelines
          </h2>
          <div className="flex items-center justify-center min-h-[250px]">
            <ul className="list-disc pl-6 text-gray-800 space-y-3 text-left sm:text-lg text-base max-w-3xl">
              <li>Respect all individuals regardless of background or belief.</li>
              <li>Use this platform to spread awareness and inspire action.</li>
              <li>No spamming or self-promotion in comments or submissions.</li>
              <li>Be honest, kind, and constructive when giving feedback.</li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Contact;
