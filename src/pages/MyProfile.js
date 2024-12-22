
import Layout from "../components/Layout";

import React, { useEffect, useState } from "react";
import '../styles/Profile.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedkit, faFire, faLeaf, faCarCrash, faFistRaised, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import { faUser, faBirthdayCake, faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { MdLocationOn } from "react-icons/md";


// Define different custom icons for user location, police, hospitals, and pharmacies
const personIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Pin-style icon with transparent background
  iconSize: [40, 40],
  iconAnchor: [16, 32],
  popupAnchor: [1, -34],
});

const policeIcon = L.icon({
  iconUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='32' height='32'><circle cx='12' cy='12' r='10' fill='blue'/></svg>", 
  iconSize: [20, 20],
  iconAnchor: [16, 32],
  popupAnchor: [1, -34],
});

const hospitalIcon = L.icon({
  iconUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='32' height='32'><circle cx='12' cy='12' r='10' fill='red'/></svg>", 
  iconSize: [20, 20],
  iconAnchor: [16, 32],
  popupAnchor: [1, -34],
});

const pharmacyIcon = L.icon({
  iconUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='32' height='32'><circle cx='12' cy='12' r='10' fill='green'/></svg>", 
  iconSize: [20, 20],
  iconAnchor: [16, 32],
  popupAnchor: [1, -34],
});

const MyProfile = () => {
  const [location, setLocation] = useState(null); // State to store location data
  const customIcon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  const [places, setPlaces] = useState([]); // State to store places based on selected category

  
  // Predefined locations for police stations, hospitals, and pharmacies
  const predefinedLocations = {
    police: [
      { name: "Police Station 1", lat: 40.7128, lon: -74.0060 },
      { name: "Police Station 2", lat: 40.7306, lon: -73.9352 },
    ],
    hospitals: [
      { name: "Hospital 1", lat: 40.7138, lon: -74.0050 },
      { name: "Hospital 2", lat: 40.7302, lon: -73.9350 },
    ],
    pharmacies: [
      { name: "Pharmacy 1", lat: 40.7158, lon: -74.0070 },
      { name: "Pharmacy 2", lat: 40.7356, lon: -73.9352 },
    ]
  };
  

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude, longitude });
          fetchNearbyPlaces(latitude, longitude); // Call function to fetch places when location is retrieved

        },
        (error) => {
          console.error("Error getting location", error);
          alert("Unable to retrieve your location");
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

   // Fetch nearby places (police stations, hospitals, pharmacies) based on user's location
   const fetchNearbyPlaces = (latitude, longitude) => {
    const radius = 5000; // 5 km radius for searching

    // Overpass API query for finding police stations, hospitals, and pharmacies near the current location
    const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];(node["amenity"="police"](around:${radius},${latitude},${longitude});node["amenity"="hospital"](around:${radius},${latitude},${longitude});node["amenity"="pharmacy"](around:${radius},${latitude},${longitude}););out;`;

    fetch(overpassUrl)
      .then((response) => response.json())
      .then((data) => {
        const places = data.elements.map((element) => ({
          name: element.tags.name || "Unnamed Place",
          lat: element.lat,
          lon: element.lon,
          type: element.tags.amenity, // Add the type of place (police, hospital, pharmacy)
        }));
        setPlaces(places); // Update state with fetched places
      })
      .catch((error) => {
        console.error("Error fetching nearby places:", error);
        alert("Unable to retrieve nearby places.");
      });
  };





    // Function to handle button click and filter places based on category
    const handleCategoryClick = (category) => {
      const placesInRange = predefinedLocations[category].filter(place => {
        // For simplicity, all places are considered nearby
        return true;
      });
      setPlaces(placesInRange); // Set the places state to the filtered list
    };
     // Declare the state variables
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [emergencyType, setEmergencyType] = useState(""); // Store selected emergency type
  const [customEmergencyType, setCustomEmergencyType] = useState(""); // Store custom emergency type

  // Function to handle SOS button click
  const handleSosButtonClick = () => {
    setPopupVisible(true);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  // Function to confirm emergency
  const handleConfirmEmergency = () => {
    const type = emergencyType || customEmergencyType;
    if (type) {
      alert(`Emergency Type: ${type} - Your location will be sent to authorities.`);
      setPopupVisible(false);
    }
  };
  //what's ur emegency div 

  //what's ur emegency div 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();  // useNavigate hook from react-router-dom

  // Function to handle the emergency option click
  const handleEmergencyClick = (option) => {
    console.log(option);  // Check if this logs the correct option
    setSelectedOption(option);
    setIsModalVisible(true);
  };
  

  // Function to handle the "Reclaim Authorities" option
  const handleReclaimAuthorities = () => {
    alert('Warning: Your location will be sent to the authorities. Misuse of this feature is a serious offense.');
    setIsModalVisible(false);  // Close the modal
  };

  // Function to handle the "Emergency Plan" option
  const handleEmergencyPlan = () => {
    navigate('/emergency-plans');  // Navigate to the Emergency Plan page
    setIsModalVisible(false);  // Close the modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalVisible(false);  // Close the modal
  };
  
  // Handle the "Edit Profile" button click
  const handleEditProfileClick = () => {
    navigate('/edit-profile');  // Navigate to the "edit-profile" page
  };
  
  const handleViewReports = () => {
    navigate('/myreports'); 
  };
  return (
    <Layout title="Profile">
    <div className="my-profile-home-container">
      <main className="my-profile-main-content">
        
      


        {/* Emergency Section */}
        <section className="my-profile-emergency-section">
          
          <div className="my-profile-sos-container">
            <div className="my-profile-emergency-info">
            <div className="my-profile-emergency-text">
                <h1>Are you in an emergency?</h1>
                <p>
                  Press the SOS button, your live location will be shared with the nearest help center and your emergency contacts.
                </p>
              </div>
            <div className="my-profile-sos-button-container-left">
            <div className="my-profile-sos-background">
              <button className="my-profile-sos-button" onClick={handleSosButtonClick}>
                <i className="fa fa-bell"></i>
                <span>SOS</span>
              </button>
            </div>
          </div>

              
            </div>
            {/* Popup Modal */}
            {isPopupVisible && (
              <div className="my-profile-popup-overlay">
                <div className="my-profile-popup-content">
                  {/* Close Button */}
                  <button className="my-profile-close-popup-button" onClick={handleClosePopup}>
                    &times;
                  </button>

                  <h2>What’s your emergency?</h2>
                  <div className="my-profile-emer-options">
                    <div
                      className={`my-profile-emer-option ${emergencyType === "medical" ? "active" : ""}`}
                      onClick={() => setEmergencyType("medical")}
                    >
                      <FontAwesomeIcon icon={faMedkit} />
                      <p>Medical</p>
                    </div>
                    <div
                      className={`my-profile-emer-option ${emergencyType === "fire" ? "active" : ""}`}
                      onClick={() => setEmergencyType("fire")}
                    >
                      <FontAwesomeIcon icon={faFire} />
                      <p>Fire</p>
                    </div>
                    <div
                      className={`my-profile-emer-option ${emergencyType === "natural-disaster" ? "active" : ""}`}
                      onClick={() => setEmergencyType("natural-disaster")}
                    >
                      <FontAwesomeIcon icon={faLeaf} />
                      <p>Natural Disaster</p>
                    </div>
                    <div
                      className={`my-profile-emer-option ${emergencyType === "accident" ? "active" : ""}`}
                      onClick={() => setEmergencyType("accident")}
                    >
                      <FontAwesomeIcon icon={faCarCrash} />
                      <p>Accident</p>
                    </div>
                    <div
                      className={`my-profile-emer-option ${emergencyType === "violence" ? "active" : ""}`}
                      onClick={() => setEmergencyType("violence")}
                    >
                      <FontAwesomeIcon icon={faFistRaised} />
                      <p>Violence</p>
                    </div>
                    <div
                      className={`my-profile-emer-option ${emergencyType === "rescue" ? "active" : ""}`}
                      onClick={() => setEmergencyType("rescue")}
                    >
                      <FontAwesomeIcon icon={faLifeRing} />
                      <p>Rescue</p>
                    </div>
                  </div>

                  <div className="my-profile-custom-emergency">
                    <input
                      type="text"
                      placeholder="If your emergency type is not mentioned, type it."
                      value={customEmergencyType}
                      onChange={(e) => setCustomEmergencyType(e.target.value)}
                    />
                  </div>
                  <p>
                    Your location will be sent to authorities once you confirm.
                  </p>
                  <div className="my-profile-popup-buttons">
                    <button onClick={handleConfirmEmergency}>Confirm</button>
                    <button onClick={handleClosePopup}>Cancel</button>
                  </div>
                </div>
              </div>
            )}




            <div className="my-profile-emergency-details-container">
              <h2>What’s your emergency?</h2>
              <div className="my-profile-emergency-buttons">
              <div className="my-profile-emergency-option medical" onClick={() => handleEmergencyClick('medical')}>
                <div className="my-profile-emergency-icon">
                  <FontAwesomeIcon icon={faMedkit} className="fa" />
                </div>
                <p>Medical</p>
              </div>
              <div className="my-profile-emergency-option fire" onClick={() => handleEmergencyClick('fire')}>
                <div className="my-profile-emergency-icon">
                  <FontAwesomeIcon icon={faFire} className="fa" />
                </div>
                <p>Fire</p>
              </div>
              <div className="my-profile-emergency-option natural-disaster" onClick={() => handleEmergencyClick('natural-disaster')}>
                <div className="my-profile-emergency-icon">
                  <FontAwesomeIcon icon={faLeaf} className="fa" />
                </div>
                <p>Natural Disaster</p>
              </div>
              <div className="my-profile-emergency-option accident" onClick={() => handleEmergencyClick('accident')}>
                <div className="my-profile-emergency-icon">
                  <FontAwesomeIcon icon={faCarCrash} className="fa" />
                </div>
                <p>Accident</p>
              </div>
              <div className="my-profile-emergency-option violence" onClick={() => handleEmergencyClick('violence')}>
                <div className="my-profile-emergency-icon">
                  <FontAwesomeIcon icon={faFistRaised} className="fa" />
                </div>
                <p>Violence</p>
              </div>
              <div className="my-profile-emergency-option rescue" onClick={() => handleEmergencyClick('rescue')}>
                <div className="my-profile-emergency-icon">
                  <FontAwesomeIcon icon={faLifeRing} className="fa" />
                </div>
                <p>Rescue</p>
              </div>


              </div>


            {/* Modal for Emergency Options */}
            {isModalVisible && (
              <div className="my-profile-emergency-modal-overlay">
                <div className="my-profile-emergency-modal-content">
                  <div className="my-profile-emergency-modal-header">
                    <h3>{selectedOption === 'medical' ? 'Medical Emergency' : selectedOption === 'fire' ? 'Fire Emergency' : 'General Emergency'}</h3>
                    <i className={`fas fa-${selectedOption === 'medical' ? 'medkit' : selectedOption === 'fire' ? 'fire' : 'exclamation-circle'}`} aria-hidden="true"></i>
                  </div>
                  <p className="my-profile-emergency-modal-description">What would you like to do in response to this emergency?</p>
                  <div className="my-profile-emergency-modal-actions">
                    <button className="my-profile-emergency-plan-button" onClick={handleEmergencyPlan} title="Click here to get a guide on how to react in this emergency">
                      <i className="fas fa-street-view"></i> Emergency Plan
                    </button>
                    <button className="my-profile-reclaim-authorities-button" onClick={handleReclaimAuthorities} title="Click here to reclaim authorities in this emergency">
                      <i className="fas fa-user-shield"></i> Reclaim Authorities
                    </button>
                    <button className="my-profile-cancel-emergency-button" onClick={handleCloseModal} title="Cancel and close the modal">
                      <i className="fas fa-times"></i> Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

    </div>
            
{/* Location Section */}
{/* Location Section */}
<div className="my-profile-location-section">
            <div className="my-profile-where-am-i">
            <MdLocationOn className="locationIcon" />
            {location ? "You are here!" : "Where am I now?"}
            </div>

            <div className="my-profile-user-location" id="user-location">
              {location ? (
                <p>
                  You are located at{" "}
                  <strong>
                    {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
                  </strong>
                </p>
              ) : (
                <p>Loading location...</p>
              )}
            </div>

            
            <div className="map-container">
              {location && (
                <MapContainer
                  center={[location.latitude, location.longitude]}
                  zoom={13}
                  style={{ height: "400px", width: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker
                    position={[location.latitude, location.longitude]}
                    icon={personIcon}
                  >
                    <Popup>You are here!</Popup>
                  </Marker>

                  {/* Display additional markers for places */}
            {places.map((place, index) => {
              let icon;
              // Choose icon based on place type
              if (place.type === "police") {
                icon = policeIcon;
              } else if (place.type === "hospital") {
                icon = hospitalIcon;
              } else if (place.type === "pharmacy") {
                icon = pharmacyIcon;
              }

              return (
                <Marker
                  key={index}
                  position={[place.lat, place.lon]}
                  icon={icon}
                >
                  <Popup>{place.name}</Popup>
                </Marker>
              );
            })}
          </MapContainer>
        )}
      </div>

      {/* Map buttons section */}
      <div className="my-profile-map-buttons">
        <button
          className="my-profile-button my-profile-police-station"
          onClick={() => fetchNearbyPlaces(location.latitude, location.longitude)}
        >
          <i className="fa fa-shield-alt"></i> Police Stations
        </button>
        <button
          className="my-profile-button my-profile-hospitals"
          onClick={() => fetchNearbyPlaces(location.latitude, location.longitude)}
        >
          <i className="fa fa-hospital"></i> Hospitals
        </button>
        <button
          className="my-profile-button my-profile-pharmacies"
          onClick={() => fetchNearbyPlaces(location.latitude, location.longitude)}
        >
          <i className="fa fa-pills"></i> Pharmacies
        </button>
      </div>
    </div>
            </div>
          

        </section>
{/* Profile Section */}
<aside className="my-profile-profile-section">
  <img src="/assets/profile.png" alt="Profile" className="my-profile-profile-picture" />
  <p className="my-profile-profile-name">EL HADCHI Wafaa</p>

  <h2>About me</h2>
  <div className="my-profile-profile-details">
    <p><FontAwesomeIcon icon={faUser} className="fa" /> Female</p>
    <p><FontAwesomeIcon icon={faBirthdayCake} className="fa" /> Born November 19, 2002</p>
    <p><FontAwesomeIcon icon={faMapMarker} className="fa" /> Sidi Othmane</p>
    <p><FontAwesomeIcon icon={faEnvelope} className="fa" /> elhadchiwafaa@gmail.com</p>
    <p><FontAwesomeIcon icon={faPhone} className="fa" /> 0605995661</p>
  </div>
  <button className="my-profile-edit-profile-button" onClick={handleEditProfileClick}>Edit Profile</button>
  <button 
              className="my-profile-view-reports" 
              onClick={handleViewReports}
            >
              View reports
            </button>
</aside>

      </main>

      {/* Footer */}
     
    </div>
    </Layout>
  ); 
};

export default MyProfile;

