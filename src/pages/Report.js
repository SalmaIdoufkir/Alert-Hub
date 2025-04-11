import React, { useState, useEffect } from "react";
import "../styles/ReportPage.css";
import Layout from "../components/Layout";
import FileUpload from "../components/FileUpload";
import { MapContainer, TileLayer, Popup, Circle } from "react-leaflet";
import { MdLocationOn } from "react-icons/md";
import '../styles/leaflet.css';
import "leaflet/dist/leaflet.css";
import { useTranslation } from "react-i18next"; // Importer useTranslation

// Function to fetch city name using reverse geocoding
const getCityName = async (lat, lon) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_ID}`);
    const data = await response.json();
    return data.name || "Unknown location"; 
  } catch (error) {
    console.error("Error fetching city name:", error);
    return "Unknown location";
  }
};

const Report = () => {
  const { t } = useTranslation(); // Initialisation de i18next pour la traduction
  const [position, setPosition] = useState(null); 
  const [locationName, setLocationName] = useState("Unknown location");
  const [loading, setLoading] = useState(true); 
  const [zoom, setZoom] = useState(10); 
  const [isMapVisible, setIsMapVisible] = useState(true); // Etat pour contrôler la visibilité de la carte

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
          setZoom(10); 
          getCityName(latitude, longitude).then((city) => {
            setLocationName(city);
            setLoading(false); 
          });
        },
        () => {
          setLoading(false);
        }
      );
    } else {
      setLoading(false);
    }
  }, []);

  const handleMapClick = async (e) => {
    const { lat, lng } = e.latlng;
    const cityName = await getCityName(lat, lng);
    setLocationName(cityName);
  };

  return (
    <Layout title={t('add_report')}>
      <div className="report-page">
        <div className="main-content">
          <div className="report-container">
            <div className={`report-form ${!isMapVisible ? 'full-width' : ''}`}>
              <h2>{t('add_report')}</h2>
              <form>
                <input type="text" placeholder={t('report_title')} required className="form-input" />
                <input type="text" placeholder={t('incident_type')} required className="form-input" />
                <textarea placeholder={t('description')} rows="5" required className="form-input"></textarea>
                <input
                  type="text"
                  placeholder={t('location')}
                  value={loading ? t('loading') : locationName}
                  className="form-input"
                  readOnly
                />
                <div className="upload-section">
                  <FileUpload />
                </div>
                <button type="submit" className="submit-btn">{t('submit_report')}</button>
              </form>
            </div>

            {position && isMapVisible && ( /* Affiche la carte seulement si la position est définie et que isMapVisible est true */
              <div className="map-section">
                <MapContainer center={position} zoom={zoom} style={{ width: "100%", height: "100%" }} onClick={handleMapClick}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
                  <Circle 
                    center={position} 
                    radius={2000} 
                    color="red"
                    fillColor="red"
                    fillOpacity={0.6}
                  >
                    <Popup><MdLocationOn /> {locationName}</Popup>
                  </Circle>
                </MapContainer>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Report;
