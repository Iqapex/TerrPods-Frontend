import React, { useState } from "react";
import { useAdmin } from "../../context/AdminContext";

const MembershipAdmin: React.FC = () => {
  const {
    heroTitle,
    heroSubtitle,
    heroButton,
    heroImage,
    benefits,
    tiers,
    showPrivateSections,
    setHeroTitle,
    setHeroSubtitle,
    setHeroButton,
    setHeroImage,
    setBenefits,
    setTiers,
    setShowPrivateSections,
    saveChanges, // ✅ added
  } = useAdmin();

  // Add / Remove Benefit
  const addBenefit = () =>
    setBenefits([...benefits, { icon: "🌿", title: "", description: "" }]);
  const removeBenefit = (index: number) =>
    setBenefits(benefits.filter((_, i) => i !== index));

  // Add / Remove Tier
  const [newTier, setNewTier] = useState({ name: "", price: "", features: [""], image: "" });
  const handleAddTier = () => {
    if (!newTier.name || !newTier.price) return alert("Please fill all fields");
    setTiers([...tiers, newTier]);
    setNewTier({ name: "", price: "", features: [""], image: "" });
  };
  const handleDeleteTier = (index: number) => setTiers(tiers.filter((_, i) => i !== index));

  return (
    <div className="p-8 mt-16 max-w-6xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold mb-8 border-b-4 pb-3 border-yellow-500">
        🌿 Manage Membership Portal
      </h1>

      {/* ================= HERO SECTION ================= */}
      <section className="bg-white p-6 rounded-lg shadow space-y-3">
        <h2 className="text-xl font-semibold mb-4">Hero Section</h2>
        <input
          className="border p-2 w-full"
          value={heroTitle}
          onChange={(e) => setHeroTitle(e.target.value)}
          placeholder="Hero Title"
        />
        <textarea
          className="border p-2 w-full"
          value={heroSubtitle}
          onChange={(e) => setHeroSubtitle(e.target.value)}
          placeholder="Hero Subtitle"
        />
        <input
          className="border p-2 w-full"
          value={heroButton}
          onChange={(e) => setHeroButton(e.target.value)}
          placeholder="Button Text"
        />
        <input
          className="border p-2 w-full"
          value={heroImage}
          onChange={(e) => setHeroImage(e.target.value)}
          placeholder="Hero Background Image URL"
        />
      </section>

      {/* ================= MEMBER BENEFITS ================= */}
      <section className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">Member Benefits</h2>
        {benefits.map((b, i) => (
          <div key={i} className="border p-4 rounded-lg space-y-2">
            <input
              className="border p-2 w-full"
              value={b.icon}
              onChange={(e) => {
                const newBenefits = [...benefits];
                newBenefits[i].icon = e.target.value;
                setBenefits(newBenefits);
              }}
              placeholder="Icon (Emoji)"
            />
            <input
              className="border p-2 w-full"
              value={b.title}
              onChange={(e) => {
                const newBenefits = [...benefits];
                newBenefits[i].title = e.target.value;
                setBenefits(newBenefits);
              }}
              placeholder="Benefit Title"
            />
            <input
              className="border p-2 w-full"
              value={b.description}
              onChange={(e) => {
                const newBenefits = [...benefits];
                newBenefits[i].description = e.target.value;
                setBenefits(newBenefits);
              }}
              placeholder="Benefit Description"
            />
            <button
              className="text-red-500 text-sm"
              onClick={() => removeBenefit(i)}
            >
              ❌ Remove Benefit
            </button>
          </div>
        ))}
        <button
          className="bg-green-500 text-white px-3 py-2 rounded-md"
          onClick={addBenefit}
        >
          ➕ Add Benefit
        </button>
      </section>

      {/* ================= MEMBERSHIP TIERS ================= */}
      <section className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">Membership Tiers</h2>
        {tiers.map((tier, i) => (
          <div key={i} className="border p-4 rounded-lg space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{tier.name || "Unnamed Tier"}</h3>
              <button
                className="text-red-500 text-sm"
                onClick={() => handleDeleteTier(i)}
              >
                ❌ Delete
              </button>
            </div>
            {tier.image && (
              <img
                src={tier.image}
                alt={tier.name}
                className="w-20 h-20 object-contain mb-2"
              />
            )}
            <input
              className="border p-2 w-full"
              value={tier.name}
              onChange={(e) => {
                const newTiers = [...tiers];
                newTiers[i].name = e.target.value;
                setTiers(newTiers);
              }}
              placeholder="Tier Name"
            />
            <input
              className="border p-2 w-full"
              value={tier.price}
              onChange={(e) => {
                const newTiers = [...tiers];
                newTiers[i].price = e.target.value;
                setTiers(newTiers);
              }}
              placeholder="Price"
            />
            <input
              className="border p-2 w-full"
              value={tier.image}
              onChange={(e) => {
                const newTiers = [...tiers];
                newTiers[i].image = e.target.value;
                setTiers(newTiers);
              }}
              placeholder="Tier Image URL"
            />
            <textarea
              className="border p-2 w-full"
              value={tier.features.join(", ")}
              onChange={(e) => {
                const newTiers = [...tiers];
                newTiers[i].features = e.target.value.split(",").map((f) => f.trim());
                setTiers(newTiers);
              }}
              placeholder="Features (comma-separated)"
            />
          </div>
        ))}

        {/* Add New Tier */}
        <div className="mt-6 border-t pt-4">
          <h3 className="font-semibold mb-3">Add New Tier</h3>
          <input
            className="border p-2 w-full mb-2"
            placeholder="Tier Name"
            value={newTier.name}
            onChange={(e) => setNewTier({ ...newTier, name: e.target.value })}
          />
          <input
            className="border p-2 w-full mb-2"
            placeholder="Price"
            value={newTier.price}
            onChange={(e) => setNewTier({ ...newTier, price: e.target.value })}
          />
          <input
            className="border p-2 w-full mb-2"
            placeholder="Image URL"
            value={newTier.image}
            onChange={(e) => setNewTier({ ...newTier, image: e.target.value })}
          />
          <textarea
            className="border p-2 w-full mb-2"
            placeholder="Features (comma separated)"
            value={newTier.features.join(", ")}
            onChange={(e) =>
              setNewTier({ ...newTier, features: e.target.value.split(",") })
            }
          />
          <button
            onClick={handleAddTier}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            ➕ Add Tier
          </button>
        </div>
      </section>

      {/* ================= PRIVATE SECTION TOGGLE ================= */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Visibility Settings</h2>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={showPrivateSections}
            onChange={(e) => setShowPrivateSections(e.target.checked)}
          />
          <span>Show Private Members Area</span>
        </label>
      </section>

      {/* ================= SAVE CHANGES BUTTON ================= */}
      <div className="text-center">
        <button
          onClick={() => saveChanges()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          💾 Save Changes
        </button>
      </div>
    </div>
  );
};

export default MembershipAdmin;
