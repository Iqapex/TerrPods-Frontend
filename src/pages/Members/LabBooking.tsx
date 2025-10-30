import { useState, useEffect } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { motion } from "framer-motion";
import axios from "axios";

// TerraPods Yellow
const TERRAPODS_YELLOW = "#D6A900";

const LabBooking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookings, setBookings] = useState<any[]>([]);
  const [timeSlots, setTimeSlots] = useState([
    "09:00 - 11:00",
    "11:00 - 13:00",
    "13:00 - 15:00",
    "15:00 - 17:00",
    "17:00 - 19:00"
  ]);
  const [selectedSlot, setSelectedSlot] = useState<string>("");

  useEffect(() => {
    // TODO: Fetch existing bookings from backend
    // axios.get('/api/bookings').then(...)
  }, [selectedDate]);

  const handleBooking = () => {
    if (!selectedSlot) {
      alert("Please select a time slot.");
      return;
    }

    // TODO: Save booking to backend
    console.log("Booking:", selectedDate, selectedSlot);

    setBookings([...bookings, { date: selectedDate, slot: selectedSlot }]);
    alert("Booking successful!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <motion.h1
        className="text-3xl font-bold mb-6"
        style={{ color: TERRAPODS_YELLOW }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Lab Booking Calendar
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Calendar */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="rounded-lg"
          />
        </div>

        {/* Booking Panel */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Selected Date:</h2>
          <p className="mb-6">{selectedDate.toDateString()}</p>

          <h2 className="text-xl font-semibold mb-4">Available Time Slots:</h2>
          <div className="grid grid-cols-1 gap-3">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                className={`py-2 px-4 rounded-lg border ${
                  selectedSlot === slot
                    ? `bg-[${TERRAPODS_YELLOW}] text-white`
                    : "bg-gray-100"
                }`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>
            ))}
          </div>

          <button
            className="mt-6 py-3 px-6 rounded-full bg-[${TERRAPODS_YELLOW}] text-white font-bold"
            onClick={handleBooking}
          >
            Book Now
          </button>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Your Bookings:</h3>
            {bookings.length === 0 && <p>No bookings yet.</p>}
            <ul>
              {bookings.map((b, index) => (
                <li key={index}>
                  {new Date(b.date).toDateString()} — {b.slot}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabBooking;
