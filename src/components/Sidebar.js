import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Pour la traduction

import { FaHome, FaFileAlt, FaCloudSun, FaInfoCircle, FaCog, FaExclamationTriangle, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t } = useTranslation(); // Pour la traduction

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth <= 768); // Réduire si largeur <= 768px
    };

    // Initialisation et écoute des changements de taille
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    // Nettoyer l'authentification (par exemple, supprimer le token)
    localStorage.removeItem("authToken");

    // Rediriger vers la page de compte (ou page de connexion)
    navigate("/");
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="logo-container">
        <img
          src={isCollapsed ? "/assets/logo2.png" : "/assets/logo.png"} // Utilisation de l'image en fonction de l'état
          alt={t('logo.alt')} // Utilisation de la traduction
          className="logo"
          style={{ width: isCollapsed ? "50px" : "150px" }}
        />
      </div>

      <nav className="menu">
        <ul>
          <li>
            <NavLink to="/myprofile" className={`user-info ${isCollapsed ? "collapsed" : ""}`}>
              <img src="/assets/avatar.jpg" alt="User Avatar" className="avatar" />
              {!isCollapsed && <span>{t('user_name')}</span>} {/* Utilisation de la traduction */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/home" activeClassName="active">
              <FaHome className="icon" />
              {!isCollapsed && <span className="text">{t('home')}</span>} {/* Utilisation de la traduction */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/report" activeClassName="active">
              <FaFileAlt className="icon" />
              {!isCollapsed && <span className="text">{t('report')}</span>} {/* Utilisation de la traduction */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/emergency-plans" activeClassName="active">
              <FaExclamationTriangle className="icon" />
              {!isCollapsed && <span className="text">{t('emergency_plans')}</span>} {/* Utilisation de la traduction */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/weather" activeClassName="active">
              <FaCloudSun className="icon" />
              {!isCollapsed && <span className="text">{t('weather')}</span>} {/* Utilisation de la traduction */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              <FaInfoCircle className="icon" />
              {!isCollapsed && <span className="text">{t('about')}</span>} {/* Utilisation de la traduction */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName="active">
              <FaCog className="icon" />
              {!isCollapsed && <span className="text">{t('settings')}</span>} {/* Utilisation de la traduction */}
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="logout-button" onClick={handleLogout}>
        <FaSignOutAlt className="icon" />
        {!isCollapsed && <span className="text">{t('logout')}</span>} {/* Utilisation de la traduction */}
      </button>
    </div>
  );
};

export default Sidebar;
