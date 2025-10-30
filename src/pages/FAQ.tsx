import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FAQ = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about membership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              question: "How do I join?",
              answer:
                "Simply choose your membership tier and complete the registration process. You'll get immediate access to member benefits.",
            },
            {
              question: "Can I upgrade my membership?",
              answer:
                "Yes, you can upgrade your membership at any time. The new benefits will be available immediately.",
            },
            {
              question: "What's included in the resource library?",
              answer:
                "Our resource library includes research papers, guides, templates, and video tutorials on sustainable practices.",
            },
            {
              question: "How do I access member events?",
              answer:
                "Members receive calendar invites and exclusive access links to all member events through their dashboard.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {faq.question}
              </h4>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
