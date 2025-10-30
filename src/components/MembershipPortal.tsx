import React from "react";
import { useAdmin } from "../context/AdminContext";

const MembershipPortal: React.FC = () => {
  const {
    heroTitle,
    heroSubtitle,
    heroButton,
    heroImage,
    benefits,
    tiers,
    showPrivateSections,
  } = useAdmin();

  return (
    <div className="font-sans text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section
        className="text-center py-20 bg-gray-100 relative overflow-hidden"
        style={{
          backgroundImage: heroImage ? `url(${heroImage})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {heroTitle}
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-100">
            {heroSubtitle}
          </p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-yellow-600 transition-all">
            {heroButton}
          </button>
        </div>
      </section>

      {/* ================= MEMBER BENEFITS ================= */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl font-bold mb-10">Member Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-8 md:px-16">
          {benefits?.length ? (
            benefits.map((b, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-5xl mb-3">{b.icon || "🌿"}</div>
                <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600">{b.description}</p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-gray-500">
              No benefits added yet. Please configure them from Admin Dashboard.
            </p>
          )}
        </div>
      </section>

      {/* ================= MEMBERSHIP TIERS ================= */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Membership Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16">
          {tiers?.length ? (
            tiers.map((tier, i) => (
              <div
                key={i}
                className="border rounded-lg shadow-md hover:shadow-lg transition-all p-8 bg-white"
              >
                {tier.image && (
                  <img
                    src={tier.image}
                    alt={tier.name}
                    className="w-24 h-24 mx-auto mb-4 object-contain"
                  />
                )}
                <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-lg font-bold text-gray-600 mb-4">
                  {tier.price}
                </p>
                <ul className="text-sm text-gray-700 mb-6 text-left">
                  {tier.features.map((f, j) => (
                    <li key={j}>• {f}</li>
                  ))}
                </ul>
                <button className="bg-yellow-500 text-white px-5 py-2 rounded-md hover:bg-yellow-600">
                  Join Now
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-gray-500">
              No membership tiers available. Add tiers in Admin Dashboard.
            </p>
          )}
        </div>
      </section>

      {/* ================= PRIVATE SECTION ================= */}
      {showPrivateSections && (
        <section className="py-16 text-center bg-gray-200">
          <h2 className="text-2xl font-semibold mb-2">
            Private Members Area
          </h2>
          <p className="text-gray-700">
            Only visible to logged-in members.
          </p>
        </section>
      )}
    </div>
  );
};

export default MembershipPortal;
