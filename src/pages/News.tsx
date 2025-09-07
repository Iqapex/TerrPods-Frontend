import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

// TerraPods Yellow
const TERRAPODS_YELLOW = "#D6A900";       // PANTONE 605C
const TERRAPODS_YELLOW_DARK = "#b38a00";  // Darker for hover

const News = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const newsArticles = [
    {
      title: "TerraPods Launches New Biomaterial Research Initiative",
      image: "https://images.unsplash.com/photo-1581093458791-9d58e74010c1",
      date: "March 15, 2024",
      author: "Sarah Johnson",
      category: "Research",
      excerpt: "Groundbreaking research program explores sustainable materials for the future...",
      videoUrl: "https://www.youtube.com/embed/O6Xo21L0ybE",
    },
    {
      title: "Community Garden Project Expands to New Location",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
      date: "March 12, 2024",
      author: "Michael Chen",
      category: "Community",
      excerpt: "Local initiative brings sustainable gardening practices to more neighborhoods...",
    },
    {
      title: "Artist Residency Program Announces New Partners",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
      date: "March 10, 2024",
      author: "Elena Rodriguez",
      category: "Arts",
      excerpt: "Expanding opportunities for artists working in sustainable mediums...",
      videoUrl: "https://youtu.be/olMiiN66qLU?si=tCf-scDWiA0XVFbF",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">

      {/* Featured News */}
      <section style={{ backgroundColor: TERRAPODS_YELLOW }} className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full mb-4">
                Featured Story
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                TerraPods Celebrates 5 Years of Environmental Innovation
              </h1>
              <p className="text-xl mb-8 opacity-90">
                A journey of sustainable practices, artistic expression, and community building that has transformed our local ecosystem.
              </p>
              <button style={{ color: TERRAPODS_YELLOW, backgroundColor: "white" }}
                      className="px-6 py-3 rounded-full font-semibold inline-flex items-center hover:bg-gray-100 transition-colors">
                Read Full Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
                alt="TerraPods Anniversary"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-xl text-gray-600">Stay updated with our latest initiatives and achievements</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag className="h-4 w-4" style={{ color: TERRAPODS_YELLOW }} />
                    <span className="text-sm" style={{ color: TERRAPODS_YELLOW }}>{article.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>

                  {/* Embedded Video */}
                  {article.videoUrl && (
                    <iframe
                      src={article.videoUrl}
                      className="w-full h-60 mb-4 rounded-lg"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={`video-${index}`}
                    />
                  )}

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "All News",
              "Research",
              "Community",
              "Arts",
              "Events",
              "Sustainability",
              "Innovation",
              "Partners"
            ].map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={ index === 0
                  ? { backgroundColor: TERRAPODS_YELLOW, color: "white" }
                  : { backgroundColor: "#f3f3f3", color: "#333" } }
                className={`px-6 py-2 rounded-full transition-colors hover:brightness-90`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
