import React from "react";

const AlertBox = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "10px",
        right: "10px",
        backgroundColor: "yellow",
        color: "black",
        padding: "10px 15px",
        borderRadius: "8px",
        fontWeight: "bold",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      }}
    >
      ⚠️ Incidents signalés dans certaines régions !
    </div>
  );
};

export default AlertBox;
