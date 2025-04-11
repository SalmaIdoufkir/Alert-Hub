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
      fontFamily: "'Roboto', sans-serif",
      background: "linear-gradient(135deg, #f9f9f9, #ececec)", // Dégradé de fond
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
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#BD1723",
      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
    },
    settingsContainer: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "30px",
      width: "100%",
      maxWidth: "750px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    },
    settingItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      transition: "all 0.3s ease-in-out",
    },
    settingLabel: {
      fontSize: "1.1rem",
      fontWeight: "500",
      color: "#555",
    },
    settingInput: {
      padding: "12px",
      borderRadius: "6px",
      border: `1px solid #ddd`,
      background: "#f5f5f5",
      color: "#333",
      fontSize: "1rem",
      transition: "border-color 0.3s ease",
    },
    settingInputFocus: {
      borderColor: "#BD1723",
    },
    toggleSwitch: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      transition: "transform 0.3s ease",
    },
    toggleSlider: (isEnabled) => ({
      width: "40px",
      height: "22px",
      backgroundColor: isEnabled ? "#4caf50" : "#ccc",
      borderRadius: "34px",
      position: "relative",
      transition: "0.4s",
    }),
    toggleCircle: (isEnabled) => ({
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      position: "absolute",
      top: "2px",
      left: isEnabled ? "20px" : "2px",
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
      fontWeight: "bold",
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
