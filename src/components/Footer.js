import React, { useState, useEffect } from "react";

import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa"; 
import "../styles/Footer.css";
import { useTranslation } from "react-i18next"; // Importation de useTranslation

const Footer = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth <= 768); // Réduire si largeur <= 768px
    };

    // Initialisation et écoute des changements de taille
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { t } = useTranslation(); // Initialisation de la traduction

  return (
    <footer className={`footer ${isCollapsed ? "collapsed" : ""}`}>
      <p>{t("need_help")}</p> {/* Traduction de "Need Help?" */}
      <a href="mailto:contact-AlertHub@gmail.com">{t("contact_email")}</a> {/* Traduction de l'email */}
      <div className="social-links">
        <span>{t("connect_with_us")}</span> {/* Traduction de "Connect with us" */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google">
          <FaGoogle />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
