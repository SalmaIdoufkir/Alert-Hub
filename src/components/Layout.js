import React, { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa"; // Notification icon
import { Link } from "react-router-dom"; // Import Link from React Router
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import "../styles/Layout.css";
import "../styles/Footer.css";

const Layout = ({ children, title }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [notificationCount, setNotificationCount] = useState(10); // Set notification count (example: 10)

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth <= 768); // Collapse if screen width <= 768px
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`layout ${isCollapsed ? "collapsed" : ""}`}>
      {/* Header */}
      <header className={`header ${isCollapsed ? "collapsed" : ""}`}>
        <h3 className={`title ${isCollapsed ? "small" : "small"}`}>{title}</h3>
        <div className="notification-icon">
  <Link to="/notifications" className="notification-link">
    <FaBell size={isCollapsed ? 18 : 24} />
    {/* Conditionally display the notification count */}
    {notificationCount > 0 && (
      <span className="notification-count">{notificationCount}</span>
    )}
  </Link>
</div>

      </header>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className={`content ${isCollapsed ? "collapsed" : ""}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
