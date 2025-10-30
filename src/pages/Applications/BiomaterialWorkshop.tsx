import React, { useEffect, useState } from "react";
import axios from "axios";

const TERRAPODS_YELLOW = "#D6A900";       // Brand Yellow
const TERRAPODS_YELLOW_DARK = "#b38a00";  // Darker Hover Yellow

const BiomaterialWorkshop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/programs/biomaterialWorkshop")
      .then((res) => setData(res.data))
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  if (!data.length)
    return (
      <div className="container mx-auto pt-32 px-6 text-center">
        <p className="text-lg text-gray-600">
          No Biomaterial Workshop applications yet.
        </p>
      </div>
    );

  return (
    <div className="container mx-auto pt-32 px-4 sm:px-6 lg:px-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div
            key={item.id || item._id}
            className="flex flex-col justify-between bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            {/* Image */}
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            )}

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h1 className="text-2xl font-bold text-gray-900 mb-3">
                {item.title}
              </h1>
              <p className="text-gray-600 flex-grow">{item.description}</p>

              {/* Apply Button */}
              <div className="mt-6">
                <a
                  href={item.applicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-6 py-3 rounded-xl text-white font-semibold transition duration-300"
                  style={{ backgroundColor: TERRAPODS_YELLOW }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      TERRAPODS_YELLOW_DARK)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      TERRAPODS_YELLOW)
                  }
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiomaterialWorkshop;
