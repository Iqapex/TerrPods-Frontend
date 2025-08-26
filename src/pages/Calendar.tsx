import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar as CalendarIcon, Clock, MapPin, Users, Filter } from 'lucide-react';

const Calendar = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      title: "Spring Permaculture Workshop",
      date: "April 15, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Main Garden",
      type: "Workshop",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
      spots: "10 spots left"
    },
    {
      title: "Art & Nature Exhibition",
      date: "April 20, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Gallery Space",
      type: "Exhibition",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
      spots: "Open to public"
    },
    {
      title: "Biomaterial Innovation Talk",
      date: "April 25, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "Lab Space",
      type: "Talk",
      image: "https://images.unsplash.com/photo-1581093458791-9d58e74010c1",
      spots: "15 spots left"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events Calendar</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Discover upcoming workshops, exhibitions, and community events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex space-x-2">
                {['All Events', 'Workshops', 'Exhibitions', 'Talks', 'Community'].map((filter, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      index === 0
                        ? 'bg-yellow-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-yellow-50 hover:text-yellow-700'
                    } transition-colors`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <button className="bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition-colors">
              Add to Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">
                    {event.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {event.title}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <CalendarIcon className="h-5 w-5 text-yellow-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="h-5 w-5 text-yellow-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-5 w-5 text-yellow-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="h-5 w-5 text-yellow-600" />
                      <span>{event.spots}</span>
                    </div>
                  </div>
                  <button className="w-full bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Monthly Overview</h2>
            <p className="text-xl text-gray-600">Plan your visit and activities</p>
          </motion.div>

          {/* Calendar Grid Placeholder */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-7 gap-4 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center font-semibold text-gray-600">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-4">
              {Array.from({ length: 35 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square flex items-center justify-center rounded-lg ${
                    i >= 3 && i < 33
                      ? 'hover:bg-yellow-50 cursor-pointer'
                      : 'text-gray-300'
                  } ${i === 15 ? 'bg-yellow-600 text-white' : ''}`}
                >
                  {i >= 3 && i < 33 ? i - 2 : ''}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our calendar and never miss an event
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-yellow-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Subscribe to Calendar
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-yellow-600 transition-colors">
                Download Schedule
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Calendar;
