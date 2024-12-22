import React, { useState } from "react";
import '../styles/EmergencyGuide.css';
import Layout from "../components/Layout";

const guideData = {
  "Fire": {
        "title": "Fire Emergency Guide",
        "cases": [
          {
            "name": "Building Fire",
            "steps": [
              "Activate the fire alarm system if available.",
              "Call emergency services immediately.",
              "Evacuate the building using the nearest exit.",
              "Do not use elevators during a fire.",
              "If smoke is present, stay low and crawl to avoid inhalation."
            ],
            "image": "/assets/fire.jpg",
            "tip": "Always know the location of emergency exits and fire extinguishers."
          },
          {
            "name": "Kitchen Fire",
            "steps": [
              "Turn off the heat source if it's safe to do so.",
              "Cover the fire with a lid to smother flames.",
              "Use a fire extinguisher rated for grease fires (Class B).",
              "Do NOT use water on grease fires—it can spread the fire.",
              "Call emergency services if the fire is uncontrollable."
            ],
            "image": "/assets/fire-safety.jpg",
            "tip": "Never leave cooking unattended."
          }
        ],
        "generalTip": "Install smoke detectors and test them regularly."
      },
      "Medical": {
        "title": "Medical Emergency Guide",
        "cases": [
          {
            "name": "Heart Attack",
            "steps": [
              "Call emergency services immediately.",
              "Have the person sit down and remain calm.",
              "Loosen any tight clothing.",
              "If the person is conscious, provide aspirin if they’re not allergic."
            ],
            "image": "/assets/heart.jpg",
            "tip": "Learn CPR to assist in cardiac emergencies."
          },
          {
            "name": "Severe Bleeding",
            "steps": [
              "Apply direct pressure to the wound with a clean cloth or bandage.",
              "Elevate the injured area above the heart level if possible.",
              "Keep the person calm and still.",
              "Call emergency services immediately."
            ],
            "image": "/images/heart.jpg",
            "tip": "Keep a first aid kit accessible at all times."
          },
          {
            "name": "Stroke (FAST Method)",
            "steps": [
              "Face: Ask the person to smile; check if one side droops.",
              "Arms: Ask them to raise both arms; check for weakness on one side.",
              "Speech: Listen for slurred or strange speech.",
              "Time: Call emergency services immediately if you notice any symptoms."
            ],
            "image": "/assets/heart.jpg",
            "tip": "Act FAST—early treatment can minimize brain damage."
          },
          {
            "name": "Choking",
            "steps": [
              "Encourage the person to cough forcefully.",
              "If the airway is still blocked, perform the Heimlich maneuver.",
              "For children, administer back blows and chest thrusts.",
              "Call emergency services if the blockage is not cleared."
            ],
            "image": "/assets/choking.jpg",
            "tip": "Learn the Heimlich maneuver for adults and children."
          },
          {
            "name": "Burns",
            "steps": [
              "Cool the burn with cool (not cold) water for at least 10 minutes.",
              "Cover the burn with a sterile, non-stick bandage.",
              "Do not apply creams, oils, or ice directly to the burn.",
              "Seek medical attention if the burn is severe or large."
            ],
            "tip": "Avoid breaking blisters to reduce the risk of infection."
          },
          {
            "name": "Allergic Reaction (Anaphylaxis)",
            "steps": [
              "Administer an epinephrine auto-injector (EpiPen) if available.",
              "Call emergency services immediately.",
              "Have the person lie down with their legs elevated if they feel faint.",
              "Monitor their breathing and heart rate until help arrives."
            ],
            "image": "/assets/choking.jpg",
            "tip": "Always carry an EpiPen if you have severe allergies."
          },
          {
            "name": "Fractures and Sprains",
            "steps": [
              "Immobilize the injured area and avoid movement.",
              "Apply a cold pack to reduce swelling.",
              "Do not attempt to straighten a deformed limb.",
              "Seek medical attention promptly."
            ],
            "image": "/assets/choking.jpg",
            "tip": "Use splints or slings to support the injured area."
          },
          {
            "name": "Poisoning",
            "steps": [
              "Identify the poison and call the poison control center immediately.",
              "Do not induce vomiting unless instructed by medical professionals.",
              "If the person is unconscious, check for breathing and perform CPR if necessary.",
              "Provide details of the poison to medical personnel upon arrival."
            ],
            "image": "/assets/choking.jpg",
            "tip": "Keep harmful substances out of reach of children."
          }
        ],
        "generalTip": "Take a certified first aid and CPR course to be prepared for medical emergencies."
      },
      "Earthquake": {
        "title": "Earthquake Emergency Guide",
        "cases": [
          {
            "name": "During an Earthquake",
            "steps": [
              "Drop to your hands and knees to prevent falling.",
              "Cover your head and neck with your arms or take shelter under a sturdy table.",
              "Hold on to your shelter until the shaking stops.",
              "Stay indoors until it’s safe to exit."
            ],
            "image": "/assets/earthquate.jpg",
            "tip": "Identify safe spots in your home or workplace."
          },
          {
            "name": "After an Earthquake",
            "steps": [
              "Check yourself and others for injuries.",
              "Evacuate the building if it’s unsafe.",
              "Avoid damaged structures and downed power lines.",
              "Be prepared for aftershocks."
            ],
            "image": "/assets/earthquate.jpg",
            "tip": "Have an emergency kit ready with essentials like water and food."
          }
        ],
        "generalTip": "Practice earthquake drills with your family or team."
      },
      "Flood": {
        "title": "Flood Emergency Guide",
        "cases": [
          {
            "name": "Before a Flood",
            "steps": [
              "Move valuables and electronics to higher ground.",
              "Have an emergency kit ready with food, water, and medications.",
              "Stay updated with weather alerts and evacuation notices.",
              "Turn off utilities like gas and electricity if instructed."
            ],
            "image": "/assets/flood.jpg",
            "tip": "Know your local flood evacuation routes."
          },
          {
            "name": "During a Flood",
            "steps": [
              "Avoid walking or driving through floodwaters.",
              "Move to higher ground immediately.",
              "Do not touch electrical equipment in wet areas.",
              "Follow emergency services' instructions."
            ],
            "image": "/assets/flood.jpg",
            "tip": "Six inches of moving water can knock you off your feet."
          }
        ],
        "generalTip": "Have waterproof containers for important documents."
      },"Rescue": {
    "title": "Rescue Operations",
    "cases": [
      {
        "name": "Rescue from Fire",
        "steps": [
          "1. Call emergency services immediately. Inform them of the location and the nature of the fire.",
          "2. Ensure personal safety before attempting to rescue others. Only approach the fire if it is safe to do so.",
          "3. Use a fire extinguisher, if safe, to put out small fires. Ensure you know how to operate the fire extinguisher correctly (PASS: Pull, Aim, Squeeze, Sweep).",
          "4. Assist with evacuation. Guide people through safe exits, avoiding elevators. Help those with mobility challenges.",
          "5. If trapped, stay low to the ground to avoid smoke inhalation and signal for help from a window."
        ],
        "image": "https://example.com/images/rescue-fire.jpg",
        "tip": "If you’re trapped in a building, do not jump from high windows. Stay calm and wait for help."
      },
      {
        "name": "Water Rescue",
        "steps": [
          "1. Call emergency services and provide your location, specifying whether it’s a river, lake, or open water.",
          "2. If the person is in immediate danger, throw a life preserver, rope, or buoy to them. Do not jump in to save them unless you are trained in water rescue.",
          "3. If it is safe, use a boat or another watercraft to reach the individual. Otherwise, wait for emergency responders.",
          "4. If the person is pulled from the water, check for breathing and signs of life. Perform CPR if necessary.",
          "5. After rescue, keep the individual warm and provide them with medical attention as soon as possible."
        ],
        "image": "https://example.com/images/water-rescue.jpg",
        "tip": "Always keep a flotation device nearby when engaging in water activities. Avoid swimming alone."
      }
    ],
    "generalTip": "During any rescue operation, it is crucial to stay calm, assess the situation for dangers, and prioritize your own safety and the safety of others."
  },
  "Accident": {
    "title": "Accidents",
    "cases": [
      {
        "name": "Car Accident",
        "steps": [
          "1. Immediately check for injuries. If anyone is injured, call emergency services and request medical assistance.",
          "2. If safe, move vehicles out of the traffic to prevent further accidents. Use hazard lights to alert other drivers.",
          "3. Provide first aid if you are able to do so. If the victim is bleeding, apply pressure to the wound with a clean cloth.",
          "4. Do not attempt to move seriously injured individuals unless they are in immediate danger (e.g., from fire).",
          "5. Exchange contact and insurance information with the other driver(s). Gather witness statements if possible.",
          "6. Report the accident to local authorities and file a report if required by law."
        ],
        "image": "https://example.com/images/car-accident.jpg",
        "tip": "Always keep an emergency kit in your vehicle, including first aid supplies, flashlight, and a phone charger."
      },
      {
        "name": "Workplace Injury",
        "steps": [
          "1. Assess the injury and determine if immediate medical attention is needed. Call workplace medical services or 911 if necessary.",
          "2. Stop any bleeding by applying pressure with a clean cloth or bandage.",
          "3. If the injury involves broken bones, do not attempt to move the person unless it’s a life-threatening emergency.",
          "4. Provide comfort and reassure the injured person while awaiting medical assistance.",
          "5. Report the injury to the appropriate workplace safety officer and document the incident as required by workplace protocols."
        ],
        "image": "https://example.com/images/workplace-injury.jpg",
        "tip": "Ensure that your workplace follows all safety regulations to prevent accidents. Regular safety drills can help prepare for emergencies."
      }
    ],
    "generalTip": "For any accident, always prioritize safety. Avoid moving injured individuals unless necessary to avoid causing further harm."
  },
  "Violence": {
    "title": "Violence Prevention & Response",
    "cases": [
      {
        "name": "Domestic Violence",
        "steps": [
          "1. Call emergency services immediately. Provide the exact address and details of the situation.",
          "2. If you are in immediate danger, try to leave the premises and get to a safe place. Lock doors if possible.",
          "3. If it is safe, speak calmly to the victim, offering support and reassurance. Encourage them to reach out for help.",
          "4. Do not attempt to confront the aggressor unless absolutely necessary for safety reasons.",
          "5. After the incident, help the victim seek shelter and professional counseling or legal assistance."
        ],
        "image": "https://example.com/images/domestic-violence.jpg",
        "tip": "If you are witnessing domestic violence, remember that safety is the priority. Do not try to intervene physically unless you are trained."
      },
      {
        "name": "Public Violence",
        "steps": [
          "1. Call emergency services and report the situation, providing detailed information about the location and nature of the violence.",
          "2. If you are not in immediate danger, try to move away from the violent scene. Seek shelter in a nearby business or public building.",
          "3. If safe to do so, observe the situation from a distance and provide emergency services with any useful information, such as suspect descriptions or weapon types.",
          "4. Do not attempt to intervene physically unless absolutely necessary. Leave that to trained authorities.",
          "5. After the incident, provide support to any victims, assist with authorities if requested, and consider seeking counseling if affected."
        ],
        "image": "https://example.com/images/public-violence.jpg",
        "tip": "Stay calm and focused. If you’re in danger, find a safe place as quickly as possible."
      }
    ],
    "generalTip": "Violence can occur anywhere. Always be aware of your surroundings and trust your instincts to keep yourself safe."
  },
  "Tsunami": {
    "title": "Tsunami Safety",
    "cases": [
      {
        "name": "Tsunami Warning",
        "steps": [
          "1. Immediately evacuate to higher ground or a safe, inland location. If you are near the coast, move away from the shore.",
          "2. Listen to local authorities and follow evacuation orders. Stay tuned to news updates through a radio or emergency broadcast system.",
          "3. Avoid roads near the coast, as traffic can become jammed during evacuations.",
          "4. If there is time, gather essential supplies such as water, medications, and important documents.",
          "5. Be prepared for aftershocks, which may trigger additional waves."
        ],
        "image": "https://example.com/images/tsunami-warning.jpg",
        "tip": "If you feel the ground shake or hear a loud roar, immediately move to higher ground, as this could indicate a tsunami is coming."
      },
      {
        "name": "After Tsunami Impact",
        "steps": [
          "1. Do not return to affected areas until they are declared safe by authorities.",
          "2. Be cautious of structural damage and avoid walking near collapsed buildings or downed power lines.",
          "3. If you are part of the rescue effort, wear protective gear and be mindful of your own safety while assisting others.",
          "4. Monitor local news and emergency alerts for updates on possible aftershocks or further tsunami waves.",
          "5. Offer first aid and emotional support to survivors, and assist with recovery efforts when safe."
        ],
        "image": "https://example.com/images/tsunami-impact.jpg",
        "tip": "Never return to the coast immediately after a tsunami. Secondary waves or aftershocks may still be coming."
      }
    ],
    "generalTip": "Preparedness is key. Know the tsunami evacuation routes and have an emergency kit ready at all times if you live in a tsunami-prone area."
  }

      
      
    // More emergency categories...
};

const EmergencyGuide = () => {
  const [selectedEmergency, setSelectedEmergency] = useState("Flood");
  const [emergencyData, setEmergencyData] = useState(guideData[selectedEmergency]);
  const [zoomedContent, setZoomedContent] = useState(null);

  // Handle image/video zoom
  const handleZoom = (content) => {
    setZoomedContent(content);
  };

  // Close zoom modal
  const closeZoom = () => {
    setZoomedContent(null);
  };

  // Handle emergency type selection
  const handleChangeEmergency = (event) => {
    const emergencyType = event.target.value;
    setSelectedEmergency(emergencyType);
    setEmergencyData(guideData[emergencyType]);
  };

  return (
    <Layout title="Emergency Guide">
      <div className="emergency-guide">
        <h1 className="guide-title">
          <i className="fas fa-exclamation-triangle"></i> {emergencyData.title}
        </h1>

        <div className="filter-container">
          <label htmlFor="emergencyType" className="filter-label">
            Choose an Emergency Type:
          </label>
          <select
            id="emergencyType"
            className="filter-select"
            value={selectedEmergency}
            onChange={handleChangeEmergency}
          >
            {Object.keys(guideData).map((type) => (
              <option key={type} value={type}>{guideData[type].title}</option>
            ))}
          </select>
        </div>

        <div className="guide-info">
          <p className="general-tip">
            <strong>General Tip:</strong> {emergencyData.generalTip}
          </p>

          <div className="cases-container">
            {emergencyData.cases.map((emergencyCase, index) => (
              <div key={index} className="case-card">
                <h2 className="case-title">
                  <i className={`fas fa-${emergencyCase.icon || 'question-circle'}`}></i> {emergencyCase.name}
                </h2>
                <div className="steps-list">
                  <ul>
                    {emergencyCase.steps.map((step, idx) => (
                      <li key={idx} className="step-item">{step}</li>
                    ))}
                  </ul>
                </div>
                <div className="media-container">
                  {emergencyCase.image && (
                    <img
                      src={emergencyCase.image}
                      alt={emergencyCase.name}
                      className="media-image"
                      onClick={() => handleZoom(emergencyCase.image)}
                    />
                  )}
                  {emergencyCase.video && (
                    <iframe
                      className="media-video"
                      src={emergencyCase.video}
                      title={emergencyCase.name}
                      allowFullScreen
                      onClick={() => handleZoom(emergencyCase.video)}
                    />
                  )}
                </div>
                <p className="case-tip">
                  <strong>Tip:</strong> {emergencyCase.tip}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Zoom Modal */}
        {zoomedContent && (
          <div className="zoom-modal" onClick={closeZoom}>
            <div className="zoom-content" onClick={(e) => e.stopPropagation()}>
              {zoomedContent.endsWith(".mp4") ? (
                <video src={zoomedContent} controls autoPlay />
              ) : (
                <img src={zoomedContent} alt="Zoomed Content" />
              )}
              <button className="close-btn" onClick={closeZoom}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default EmergencyGuide;
