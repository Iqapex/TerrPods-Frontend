import { useState } from "react";

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  isPrivate: boolean;
  category: string;
  rsvped: boolean;
};

const mockEvents: Event[] = [
  {
    id: 1,
    title: "Biomaterial Workshop",
    date: "2025-08-05",
    time: "10:00 AM",
    location: "Online",
    description: "Hands-on workshop exploring sustainable biomaterials.",
    isPrivate: false,
    category: "Workshop",
    rsvped: false,
  },
  {
    id: 2,
    title: "Members-Only Strategy Meet",
    date: "2025-08-10",
    time: "2:00 PM",
    location: "Hybrid (Zoom + Lab)",
    description: "Strategic planning session for core contributors.",
    isPrivate: true,
    category: "Private Session",
    rsvped: false,
  },
  {
    id: 3,
    title: "EcoArt Residency Showcase",
    date: "2025-08-15",
    time: "5:00 PM",
    location: "Digital Gallery",
    description: "Showcase of ongoing and completed residency projects.",
    isPrivate: false,
    category: "Showcase",
    rsvped: false,
  },
];

const Events = () => {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [filter, setFilter] = useState("All");

  const handleRSVP = (id: number) => {
    setEvents(prev =>
      prev.map(event =>
        event.id === id ? { ...event, rsvped: true } : event
      )
    );
    alert(" RSVP Confirmed! You will receive an email reminder.");
  };

  const filteredEvents = filter === "All"
    ? events
    : events.filter(event => event.category === filter);

  const uniqueCategories = ["All", ...new Set(events.map(e => e.category))];

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-purple-50 animate-pulse">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Upcoming Events</h1>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {uniqueCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors duration-200 
              ${filter === cat ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100 hover:border-blue-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Event List */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {filteredEvents.map(event => (
          <div
            key={event.id}
            className="group border rounded-lg p-6 bg-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-900">{event.title}</h2>
              {event.isPrivate && (
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                  Private
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
            <p className="text-sm text-gray-600"> {event.location}</p>
            <p className="text-sm mt-2 text-gray-800">{event.description}</p>

            <div className="mt-4 flex justify-between items-center">
              <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {event.category}
              </span>
              <button
                onClick={() => handleRSVP(event.id)}
                className={`text-sm px-4 py-1 rounded-full transition-colors duration-200 
                  ${event.rsvped ? 'bg-green-100 text-green-700 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                disabled={event.rsvped}
              >
                {event.rsvped ? 'RSVPed' : 'RSVP'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder: Calendar Integration */}
      <div className="mt-10 text-center">
        <p className="text-gray-500 text-sm italic">
          Calendar view will be added soon.
        </p>
      </div>
    </div>
  );
};

export default Events;
