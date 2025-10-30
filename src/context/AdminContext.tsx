import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const AdminContext = createContext(null);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [heroTitle, setHeroTitle] = useState("");
  const [heroSubtitle, setHeroSubtitle] = useState("");
  const [heroButton, setHeroButton] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [benefits, setBenefits] = useState([]);
  const [tiers, setTiers] = useState([]);
  const [showPrivateSections, setShowPrivateSections] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/admin-portal")
      .then(res => {
        const data = res.data;
        setHeroTitle(data.heroTitle);
        setHeroSubtitle(data.heroSubtitle);
        setHeroButton(data.heroButton);
        setHeroImage(data.heroImage);
        setBenefits(data.benefits);
        setTiers(data.tiers);
        setShowPrivateSections(data.showPrivateSections);
      })
      .catch(() => console.log("No saved data found"));
  }, []);

  const saveChanges = () => {
    axios.put("http://localhost:5000/api/admin-portal", {
      heroTitle,
      heroSubtitle,
      heroButton,
      heroImage,
      benefits,
      tiers,
      showPrivateSections,
    }).then(() => alert("Changes saved successfully"));
  };

  return (
    <AdminContext.Provider value={{
      heroTitle, setHeroTitle,
      heroSubtitle, setHeroSubtitle,
      heroButton, setHeroButton,
      heroImage, setHeroImage,
      benefits, setBenefits,
      tiers, setTiers,
      showPrivateSections, setShowPrivateSections,
      saveChanges
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);


