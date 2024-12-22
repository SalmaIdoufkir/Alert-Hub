import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout";

const Settings = () => {
  const { t, i18n } = useTranslation();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [alertSoundsEnabled, setAlertSoundsEnabled] = useState(true);
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  const handleToggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleToggleLocation = () => {
    setLocationEnabled(!locationEnabled);
  };

  const handleToggleAlertSounds = () => {
    setAlertSoundsEnabled(!alertSoundsEnabled);
  };

  const handleChangeTheme = (event) => {
    setTheme(event.target.value);
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value); // Changer la langue
  };

  const styles = {
    page: {
      fontFamily: "'Roboto Slab', serif",
      backgroundColor: "#f9f9f9",
      color: "#333",
      padding: "50px 20px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      textAlign: "center",
      marginBottom: "30px",
      // fontFamily: "'Montserrat Alternates', sans-serif",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#BD1723",
    },
    settingsContainer: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "30px",
      width: "100%",
      maxWidth: "700px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    },
    settingItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    settingLabel: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#333",
    },
    settingInput: {
      padding: "10px",
      borderRadius: "5px",
      border: `1px solid #ddd`,
      background: "#fff",
      color: "#333",
      fontSize: "1rem",
    },
    toggleSwitch: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    toggleSlider: (isEnabled) => ({
      width: "34px",
      height: "20px",
      backgroundColor: isEnabled ? "#4caf50" : "#ccc", 
      borderRadius: "34px",
      position: "relative",
      transition: "0.4s",
      marginRight: "10px",
    }),
    toggleCircle: (isEnabled) => ({
      width: "16px",
      height: "16px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      position: "absolute",
      top: "2px",
      left: isEnabled ? "18px" : "2px", 
      transition: "0.4s",
    }),
    footer: {
      marginTop: "50px",
      fontSize: "1rem",
      textAlign: "center",
      color: "#555",
    },
    link: {
      color: "#BD1723", 
      textDecoration: "underline",
    },
  };
  
  return (
    <Layout title={t("Settings")}>
      <div style={styles.page}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>{t("Settings")}</h1>
        </div>

        {/* Settings Container */}
        <div style={styles.settingsContainer}>
          {/* Notifications Settings */}
          <div style={styles.settingItem}>
            <div style={styles.settingLabel}>{t("Enable Notifications")}</div>
            <div
              style={styles.toggleSwitch}
              onClick={handleToggleNotifications}
            >
              <div style={styles.toggleSlider(notificationsEnabled)}>
                <div style={styles.toggleCircle(notificationsEnabled)}></div>
              </div>
            </div>
          </div>

          {/* Location Services */}
          <div style={styles.settingItem}>
            <div style={styles.settingLabel}>{t("Enable Location Services")}</div>
            <div style={styles.toggleSwitch} onClick={handleToggleLocation}>
              <div style={styles.toggleSlider(locationEnabled)}>
                <div style={styles.toggleCircle(locationEnabled)}></div>
              </div>
            </div>
          </div>

          {/* Alert Sounds */}
          <div style={styles.settingItem}>
            <div style={styles.settingLabel}>{t("Enable Alert Sounds")}</div>
            <div style={styles.toggleSwitch} onClick={handleToggleAlertSounds}>
              <div style={styles.toggleSlider(alertSoundsEnabled)}>
                <div style={styles.toggleCircle(alertSoundsEnabled)}></div>
              </div>
            </div>
          </div>

          {/* Theme Settings */}
          <div style={styles.settingItem}>
            <div style={styles.settingLabel}>{t("Theme")}</div>
            <select
              style={styles.settingInput}
              value={theme}
              onChange={handleChangeTheme}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          {/* Language Settings */}
          <div style={styles.settingItem}>
            <div style={styles.settingLabel}>{t("Language")}</div>
            <select
              style={styles.settingInput}
              value={language}
              onChange={handleChangeLanguage}
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        
      </div>
    </Layout>
  );
};

export default Settings;
