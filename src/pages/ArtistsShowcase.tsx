// src/pages/ArtistsShowcase.tsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Share2, MessageCircle } from 'lucide-react';

type Artist = {
  name: string;
  specialty: string;
  image: string;
  artwork: string;
  description: string;
  category: string;
  video?: string;
};

const ArtistsShowcase = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [comment, setComment] = useState('');
  const [activeArtist, setActiveArtist] = useState<Artist | null>(null);

  const artists: Artist[] = [
    {
      name: 'Maya Chen',
      specialty: 'Biomaterial Artist',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      artwork: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119',
      description: 'Exploring nature and art through sustainable materials.',
      category: 'Biomaterial Art',
      video: 'https://www.youtube.com/embed/ysz5S6PUM-U',
    },
    {
      name: 'James Wilson',
      specialty: 'Environmental Sculptor',
      image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a',
      artwork: 'https://images.unsplash.com/photo-1561839561-b13bcfe95249',
      description: 'Sculptures from repurposed and recycled materials.',
      category: 'Eco-Sculpture',
    },
    {
      name: 'Sofia Rodriguez',
      specialty: 'Eco-Fashion Designer',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
      artwork: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e',
      description: 'Sustainable textiles and innovative fashion.',
      category: 'Sustainable Fashion',
    },
    {
      name: 'Alex Kim',
      specialty: 'Digital Nature Artist',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
      artwork: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
      description: 'Digital art reflecting natural environments.',
      category: 'Digital Nature',
    },
  ];

  const uniqueCategories = Array.from(new Set(artists.map(a => a.category)));
  const categories = ['All', ...uniqueCategories];

  const filteredArtists =
    selectedCategory === 'All'
      ? artists
      : artists.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-20 bg-green-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Artist Showcase</h1>
          <p className="text-xl">Explore boundary-pushing sustainable creativity</p>
        </motion.div>
      </section>

      {/* Category Filter Grid */}
      <section className="text-center my-12 px-4">
        <h2 className="text-3xl font-bold mb-2">Browse by Category</h2>
        <p className="text-gray-600 mb-6">Explore different forms of sustainable art</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`py-3 px-4 rounded-lg text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-green-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        {selectedCategory !== 'All' && (
          <p className="mt-4 text-green-700 font-medium">
            Showing artworks for <strong>{selectedCategory}</strong>
          </p>
        )}
      </section>

      {/* Artist Grid */}
      <section ref={ref} className="pb-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {filteredArtists.map((artist, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={artist.artwork}
                  alt={artist.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex items-center space-x-4">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-12 h-12 rounded-full border-2 border-white"
                    />
                    <div className="text-white">
                      <h3 className="font-semibold">{artist.name}</h3>
                      <p className="text-sm">{artist.specialty}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-gray-700">{artist.description}</p>

                {artist.video && (
                  <iframe
                    src={artist.video}
                    className="w-full h-60 rounded"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={`${artist.name}-video`}
                  />
                )}

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 text-gray-600">
                    <button className="flex items-center hover:text-red-500">
                      <Heart className="w-4 h-4 mr-1" /> <span>245</span>
                    </button>
                    <button className="flex items-center hover:text-blue-500">
                      <MessageCircle className="w-4 h-4 mr-1" /> <span>18</span>
                    </button>
                    <button className="flex items-center hover:text-green-600">
                      <Share2 className="w-4 h-4 mr-1" /> <span>Share</span>
                    </button>
                  </div>
                  <button
                    onClick={() => setActiveArtist(artist)}
                    className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
                  >
                    View Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {activeArtist && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white max-w-3xl w-full p-6 rounded-lg relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveArtist(null)}
              className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-red-600"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-2">{activeArtist.name}</h2>
            <p className="mb-4 text-gray-600">{activeArtist.description}</p>

            <img
              src={activeArtist.artwork}
              alt={activeArtist.name}
              className="rounded-lg w-full mb-4"
            />

            {/* Immersive CTA */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg">Immersive Digital Exhibition</h3>
              <p className="text-sm text-gray-500">
                Step into an immersive 3D exhibition experience.
              </p>
              <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                Launch Virtual Tour
              </button>
            </div>

            {/* Comments */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Comments</h3>
              <textarea
                className="w-full border rounded p-2"
                placeholder="Leave a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Submit
              </button>
            </div>

            {/* Purchase */}
            <div className="mt-6 border-t pt-4">
              <p className="text-sm text-gray-600 mb-2">Want to support the artist?</p>
              <a
                href="https://www.ecosouk.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Purchase on Ecosouk
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistsShowcase;
