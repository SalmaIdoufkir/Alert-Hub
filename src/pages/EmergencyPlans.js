import React, { useState } from "react";
import Layout from "../components/Layout"; // Import the Layout component
import "../styles/emergencyplan.css";
import "../App.css";
import { useNavigate } from "react-router-dom"; // Import for page navigation

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseTsunami,
  faHouseFloodWaterCircleArrowRight,
  faCarBurst,
  faFire,
  faSuitcaseMedical,
  faHouseChimneyCrack,
  faHandsHelping,
  faShieldAlt,
  faEye,
  faDownload,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";

const EmergencyPlan = () => {
  const [selectedEmergency, setSelectedEmergency] = useState(null);

  const handleEmergencyClick = (emergency) => {
    setSelectedEmergency(emergency);
  };

  const handleClose = () => {
    setSelectedEmergency(null);
  };

  const navigate = useNavigate(); // Initialize navigate for redirection
  const [emergencyType, setEmergencyType] = useState(""); // Track the selected emergency type

 // Function to handle the View Guide button click
 const handleViewGuide = () => {
  // Redirect based on the emergency type selected
  if (selectedEmergency?.label === "Fire") {
    navigate("/fire-guide"); // Navigate to the Fire Guide page
  } else {
    navigate("/fire-guide"); // Navigate to the Fire Guide page
  }
};
  // Handle Download PDF Button Click
  const handleDownloadPDF = () => {
    // Initialize the file name based on the selected emergency type
  let fileName = "";

  // Use if statement to check the emergency type and assign the corresponding file name
  if (selectedEmergency?.label === "Fire") {
    fileName = "Fire-guide.pdf";
  } else if (selectedEmergency?.label === "Earthquake") {
    fileName = "Earthquake-guide.pdf";
  } else if (selectedEmergency?.label === "Flood") {
    fileName = "Flood-guide.pdf";
  } else if (selectedEmergency?.label === "Accident") {
    fileName = "Accident-guide.pdf";
  }else if (selectedEmergency?.label === "Rescue") {
    fileName = "Rescue-guide.pdf";
  }else if (selectedEmergency?.label === "Violance") {
    fileName = "Violance-guide.pdf";
  }else if (selectedEmergency?.label === "Tsunami") {
    fileName = "Tsunami-guide.pdf";
  }else if (selectedEmergency?.label === "Medical") {
    fileName = "Medical-guide.pdf";


  }else {
    // If no known emergency type is selected, show an alert
    alert("Unknown emergency type.");
    return;
  }

  // Construct the file path
  const filePath = `/pdf-guides/${fileName}`; // Public folder path

  // Debugging: Log the file path to ensure it's correct
  console.log("Attempting to download the file from:", filePath);

  // Create a download link and trigger the download
  const link = document.createElement("a");
  link.href = filePath; // Set the PDF file path
  link.download = fileName; // Set the name for the downloaded file
  document.body.appendChild(link); // Append the link to the DOM
  link.click(); // Trigger the download
  document.body.removeChild(link); // Clean up the link
  };
  


  return (
    <Layout title="Emergency Plans">
      {/* Heading */}
      <div className="emergency-container">
        
        {/* Modern Scrolling Message */}
        <div className="emergency-message">
          <FontAwesomeIcon icon={faExclamationTriangle} className="message-icon" />
          This is a critical notice. Stay safe and follow the instructions for your safety!
        </div>
        {/* Heading */}
        <h2 className="emergency-heading">
            Choose an emergency type to access specific guidelines on how to stay safe.
        </h2>


        {/* Alert Hub Container */}
        <div className="emergency-alert-hub">
          {/* Center Content */}
          <div className="emergency-center-content">
            <img src="/assets/log.png" alt="Logo" className="emergency-logo" />
          </div>

          {/* Emergency Icons */}
          <EmergencyIcon
            label="Tsunami"
            icon={faHouseTsunami}
            className="emer-icon tsu"
            onClick={() =>
              handleEmergencyClick({ label: "Tsunami", icon: faHouseTsunami })
            }
          />
          <EmergencyIcon
            label="Earthquake"
            icon={faHouseChimneyCrack}
            className="emer-icon earth"
            onClick={() =>
              handleEmergencyClick({ label: "Earthquake", icon: faHouseChimneyCrack })
            }
          />
          <EmergencyIcon
            label="Medical"
            icon={faSuitcaseMedical}
            className="emer-icon medical"
            onClick={() =>
              handleEmergencyClick({ label: "Medical", icon: faSuitcaseMedical })
            }
          />
          <EmergencyIcon
            label="Accident"
            icon={faCarBurst}
            className="emer-icon acc"
            onClick={() =>
              handleEmergencyClick({ label: "Accident", icon: faCarBurst })
            }
          />
          <EmergencyIcon
            label="Rescue"
            icon={faHandsHelping}
            className="emer-icon res"
            onClick={() =>
              handleEmergencyClick({ label: "Rescue", icon: faHandsHelping })
            }
          />
          <EmergencyIcon
            label="Flood"
            icon={faHouseFloodWaterCircleArrowRight}
            className="emer-icon flo"
            onClick={() =>
              handleEmergencyClick({ label: "Flood", icon: faHouseFloodWaterCircleArrowRight })
            }
          />
          <EmergencyIcon
            label="Violence"
            icon={faShieldAlt}
            className="emer-icon v"
            onClick={() =>
              handleEmergencyClick({ label: "Violence", icon: faShieldAlt })
            }
          />
          <EmergencyIcon
            label="Fire"
            icon={faFire}
            className="emer-icon f"
            onClick={() =>
              handleEmergencyClick({ label: "Fire", icon: faFire })
            }
          />
        </div>
      </div>

      {/* Medium Circle Overlay */}
      {selectedEmergency && (
        <div className="medium-circle-overlay">
          <div className="medium-circle">
            <FontAwesomeIcon icon={selectedEmergency.icon} className="medium-icon" />
            <h3>{selectedEmergency.label}</h3>

            {/* Buttons */}
      <div className="emer-buttons">
      <button
                className="guide-btn"
                onClick={handleViewGuide}
                disabled={!selectedEmergency}
              >
                <FontAwesomeIcon icon={faEye} /> View Guide
              </button>
              <button
                className="download-btn"
                onClick={handleDownloadPDF}
                disabled={!selectedEmergency}
              >
                <FontAwesomeIcon icon={faDownload} /> Download PDF
              </button>
      </div>
      
    

            {/* Close Button */}
            <span className="close-btn" onClick={handleClose}>
              &times;
            </span>
          </div>
        </div>
      )}
    </Layout>
  );
};

// Emergency Icon Component
const EmergencyIcon = ({ label, icon, className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <div className="emergency-icon-circle">
        <FontAwesomeIcon icon={icon} />
      </div>
      <span className="emergency-icon-label">{label}</span>
    </div>
  );
};

export default EmergencyPlan;
