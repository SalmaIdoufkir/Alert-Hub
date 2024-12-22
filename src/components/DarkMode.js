import React from "react";

import "../styles/DarkMode.css";

const DarkMode = () => {
  // Fonction pour activer le mode sombre
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  // Fonction pour activer le mode clair
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  // Gestionnaire pour basculer entre les thèmes
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
       
      </label>
    </div>
  );
};

export default DarkMode;
