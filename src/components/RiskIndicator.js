import React from "react";

const RiskIndicator = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        left: "40%",
        backgroundColor: "red", // Zone rouge pour le risque
        color: "white",
        padding: "10px 15px",
        borderRadius: "8px",
        fontWeight: "bold",
        zIndex: 1000,
        animation: "glow 1.5s ease-in-out infinite", // Animation de brillance
      }}
    >
      ⚠️ Red zones are not safe!
    </div>
  );
};

// Ajoutez l'animation via un CSS dynamique
const style = document.createElement("style");
style.innerHTML = `
  @keyframes glow {
    0% {
      box-shadow: 0 0 5px red, 0 0 10px red, 0 0 15px red;
    }
    50% {
      box-shadow: 0 0 15px red, 0 0 25px red, 0 0 35px red;
    }
    100% {
      box-shadow: 0 0 5px red, 0 0 10px red, 0 0 15px red;
    }
  }
`;
document.head.appendChild(style);

export default RiskIndicator;
