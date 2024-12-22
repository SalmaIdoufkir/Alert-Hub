import React, { useState } from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faFire,
  faCloudRain,
  faCarCrash,
  faMedkit,
  faWind,
  faShieldAlt,
  faRadiation,
  faGlobe,
  faWater,
  faEllipsisV,
  faListAlt, 
  faExclamationCircle,
  faExclamationTriangle,
  faSun,


} from "@fortawesome/free-solid-svg-icons";
import "../styles/NotificationsPage.css";


const initialNotifications = [
  {
    id: 1,
    title: "Fire Alert",
    description: "A fire has been reported in downtown Casablanca. Evacuate immediately.",
    type: "Urgent",
    icon: faFire,
    location: "Casablanca Downtown",
    distance: 5.2,
    category: "Natural",
    date: "2024-12-20 10:30",
  },
  {
    id: 2,
    title: "Flood Warning",
    description: "Severe flooding reported near Hassan II Mosque. Avoid the area.",
    type: "Warning",
    icon: faWater,
    location: "Hassan II Mosque",
    distance: 6.1,
    category: "Natural",
    date: "2024-12-20 10:00",
  },
  {
    id: 3,
    title: "Severe Weather Warning",
    description: "Heavy rainfall expected in the next few hours. Stay indoors.",
    type: "Warning",
    icon: faCloudRain,
    location: "Casablanca",
    distance: 3.1,
    category: "Natural",
    date: "2024-12-20 09:00",
  },
  {
    id: 4,
    title: "New Report: Road Accident",
    description: "A road accident has been reported near Boulevard Zerktouni.",
    type: "Info",
    icon: faCarCrash,
    location: "Boulevard Zerktouni",
    distance: 2.3,
    category: "Local Report",
    date: "2024-12-20 08:30",
  },
  {
    id: 5,
    title: "Earthquake Alert",
    description: "An earthquake has been reported in Marrakech. Stay alert.",
    type: "Urgent",
    icon: faRadiation,
    location: "Marrakech",
    distance: 245.0,
    category: "Global Report",
    date: "2024-12-19 23:00",
  },
  {
    id: 6,
    title: "New Local Report: Medical Emergency",
    description: "A medical emergency has been reported near your location.",
    type: "Warning",
    icon: faMedkit,
    location: "Near Your Location",
    distance: 1.5,
    category: "Local Report",
    date: "2024-12-19 21:45",
  },
  {
    id: 7,
    title: "Tornado Alert",
    description: "A tornado has been spotted near Rabat. Residents are advised to seek shelter.",
    type: "Urgent",
    icon: faWind,
    location: "Rabat",
    distance: 150.0,
    category: "Natural",
    date: "2024-12-19 18:00",
  },
  {
    id: 8,
    title: "Chemical Hazard",
    description: "A chemical spill has been reported at the industrial zone. Stay clear.",
    type: "Urgent",
    icon: faShieldAlt,
    location: "Casablanca Industrial Zone",
    distance: 12.5,
    category: "Non-Natural",
    date: "2024-12-19 16:00",
  },
  {
    id: 9,
    title: "Global: Wildfire",
    description: "A massive wildfire is spreading across the Atlas Mountains.",
    type: "Urgent",
    icon: faFire,
    location: "Atlas Mountains",
    distance: 400.0,
    category: "Global Report",
    date: "2024-12-19 12:00",
  },
  {
    id: 10,
    title: "Flood Alert",
    description: "Flash flooding reported in Anfa. Avoid driving through waterlogged roads.",
    type: "Warning",
    icon: faWater,
    location: "Anfa",
    distance: 4.5,
    category: "Natural",
    date: "2024-12-19 08:00",
  },
];

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState(null); // State for sorting
  const [showSortOptions, setShowSortOptions] = useState(false); // Toggle for the sort menu

  const handleDismiss = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  // Sorting logic
  const sortedNotifications = [...notifications].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date);
    }
    if (sortBy === "distance") {
      return a.distance - b.distance;
    }
    if (sortBy === "urgency") {
      return a.type === "Urgent" ? -1 : 1; // Urgent notifications first
    }
    return 0; // Default no sort
  });

  return (
    <Layout title="Notifications">
      <div className="notifications-container">
        <h2 className="notiftitle">
          <FontAwesomeIcon icon={faBell} className="icon-bell" /> Notifications
        </h2>

        <div className="categories">
  {[
    { name: "All", icon: faListAlt },
    { name: "Natural", icon: faSun },
    { name: "Non-Natural", icon: faShieldAlt },
    { name: "Local Report", icon: faExclamationTriangle },
    { name: "Global Report", icon: faGlobe },
    { name: "Urgent", icon: faExclamationCircle },
    { name: "Warning", icon: faCloudRain },
  ].map((category) => (
    <button
      key={category.name}
      className={`category-button ${
        activeCategory === category.name ? "active-category" : ""
      }`}
      onClick={() => setActiveCategory(category.name)}
    >
      <FontAwesomeIcon icon={category.icon} className="category-icon" /> {category.name}
    </button>
  ))}
</div>

        <div className="sort-options">
          <button
            className="sort-button"
            onClick={() => setShowSortOptions((prev) => !prev)} // Toggle sort options
          >
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>

          {showSortOptions && (
            <div className={`sort-menu ${showSortOptions ? "show" : ""}`}>
            <button onClick={() => setSortBy("date")}>Sort by Date</button>
            <button onClick={() => setSortBy("distance")}>Sort by Distance</button>
            <button onClick={() => setSortBy("urgency")}>Sort by Urgency</button>
          </div>
          
          )}
        </div>

        <div className="notification-grid">
          {sortedNotifications
            .filter(
              (notification) =>
                activeCategory === "All" ||
                notification.category === activeCategory ||
                notification.type === activeCategory
            )
            .map((notification) => (
              <div
                key={notification.id}
                className={`notification-card ${notification.type.toLowerCase()}`}
              >
                <div className="notification-content">
                  <h3 className="notification-title">
                    <FontAwesomeIcon icon={notification.icon} className="icon" />{" "}
                    {notification.title}
                  </h3>
                  <p className="notification-description">
                    {notification.description}
                  </p>
                  <hr className="divider" />
                  <p className="notification-meta">
                    Location: {notification.location} ({notification.distance.toFixed(1)} km away)
                  </p>
                  <p className="notification-meta">{notification.date}</p>
                  <div className="actions">
                    <button
                      className="view-details-button"
                      onClick={() => console.log(`Viewing details for ${notification.id}`)}
                    >
                      View Details
                    </button>
                    <button
                      className="dismiss-button"
                      onClick={() => handleDismiss(notification.id)}
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {notifications.length === 0 && (
            <p className="no-notifications">You have no notifications.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default NotificationsPage;
