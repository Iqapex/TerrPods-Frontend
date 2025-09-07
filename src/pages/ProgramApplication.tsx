import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// TerraPods Yellow
const TERRAPODS_YELLOW = "#D6A900";
const TERRAPODS_YELLOW_DARK = "#b38a00";

const programData = {
  agroecology: {
    title: "Agroecology",
    steps: [
      "Personal Info",
      "Experience",
      "Motivation",
      "Project Idea",
      "Location",
      "Availability",
      "Preferences",
      "Final Submission",
    ],
  },
  "youth-innovation": {
    title: "Youth Innovation Fellowship",
    steps: [
      "Basic Info",
      "Innovation Description",
      "Impact",
      "Team",
      "Budget",
      "Timeline",
      "Preferences",
      "Final Submission",
    ],
  },
  "art-residencies": {
    title: "Art Residencies",
    steps: [
      "Personal Info",
      "Portfolio",
      "Motivation",
      "Project Proposal",
      "Timeline",
      "Preferences",
      "Final Submission",
    ],
  },
  "biomaterial-lab": {
    title: "Biomaterial Lab",
    steps: [
      "Personal Info",
      "Research Interest",
      "Lab Experience",
      "Proposal",
      "Availability",
      "Preferences",
      "Final Submission",
    ],
  },
  cigacycle: {
    title: "Cigacycle",
    steps: [
      "Personal Info",
      "Recycling Idea",
      "Implementation Plan",
      "Partnerships",
      "Awareness Strategy",
      "Preferences",
      "Final Submission",
    ],
  },
};

const ProgramApplication = () => {
  const { slug } = useParams();
  const program = programData[slug as keyof typeof programData];

  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-yellow-600 text-xl font-semibold">
        Program not found
      </div>
    );
  }

  const isFinalStep = currentStep === program.steps.length - 1;

  // ✅ Fixed typing for "checked"
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      e.target instanceof HTMLInputElement ? e.target.checked : false;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked.toString() : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          programSlug: slug,
          data: formData,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Failed to submit application.");
      }
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  const next = () => {
    if (isFinalStep) {
      if (!agreeTerms) {
        alert("Please agree to the terms and conditions before submitting.");
        return;
      }
      handleSubmit();
    } else {
      setCurrentStep((prev) => Math.min(prev + 1, program.steps.length - 1));
    }
  };

  const back = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 sm:p-10">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          {program.title} Application
        </h1>

        {/* Step Indicator */}
        <div className="flex justify-between mb-8">
          {program.steps.map((step, index) => (
            <div key={index} className="flex-1 text-xs sm:text-sm text-center">
              <div
                className={`h-3 w-3 rounded-full mx-auto mb-1 ${
                  index === currentStep ? "bg-yellow-600" : "bg-gray-300"
                }`}
                style={{
                  backgroundColor:
                    index === currentStep ? TERRAPODS_YELLOW : undefined,
                }}
              />
              {step}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          {program.steps[currentStep] === "Final Submission" ? (
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Upload CV / Portfolio
              </label>
              <input type="file" className="w-full px-4 py-2 border rounded-lg" />

              <label className="flex items-center space-x-2 mt-4">
                <input
                  type="checkbox"
                  required
                  name="agreeTerms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="h-4 w-4"
                  style={{ accentColor: TERRAPODS_YELLOW }}
                />
                <span className="text-sm text-gray-600">
                  I agree to the terms and conditions.
                </span>
              </label>
            </div>
          ) : program.steps[currentStep] === "Preferences" ? (
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Meal Preference
              </label>
              <select
                name="mealPreference"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-yellow-500"
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="veg">Vegetarian</option>
                <option value="non-veg">Non-Vegetarian</option>
                <option value="vegan">Vegan</option>
              </select>

              <label className="block font-medium text-gray-700 mt-4 mb-2">
                Accommodation Type
              </label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="accommodation"
                    value="shared"
                    onChange={handleInputChange}
                    className="mr-2"
                    style={{ accentColor: TERRAPODS_YELLOW }}
                  />
                  Shared
                </label>
                <label>
                  <input
                    type="radio"
                    name="accommodation"
                    value="private"
                    onChange={handleInputChange}
                    className="mr-2"
                    style={{ accentColor: TERRAPODS_YELLOW }}
                  />
                  Private
                </label>
              </div>
            </div>
          ) : (
            <>
              <label className="block font-medium text-gray-700 mb-2">
                {program.steps[currentStep]}
              </label>
              <input
                type="text"
                name={program.steps[currentStep]}
                value={formData[program.steps[currentStep]] || ""}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                style={{ borderColor: "#d1d5db" }} // ✅ removed invalid "focusBorderColor"
                placeholder={`Enter ${program.steps[currentStep]}...`}
              />
            </>
          )}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            disabled={currentStep === 0}
            onClick={back}
            className={`px-4 py-2 rounded-lg ${
              currentStep === 0
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "text-white"
            }`}
            style={{
              backgroundColor: currentStep === 0 ? undefined : TERRAPODS_YELLOW,
            }}
          >
            Back
          </button>

          <button
            onClick={next}
            className="px-6 py-2 rounded-lg text-white"
            style={{ backgroundColor: TERRAPODS_YELLOW }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW_DARK)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = TERRAPODS_YELLOW)
            }
          >
            {isFinalStep ? "Submit" : "Next"}
          </button>
        </div>

        {/* Success Message */}
        {isFinalStep && submitted && (
          <div className="text-yellow-700 text-lg font-medium text-center mt-8">
            Your application has been submitted!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramApplication;
