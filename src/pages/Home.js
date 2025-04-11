import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layout from "../components/Layout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import L from 'leaflet';
import AlertBox from '../components/AlertBox'
import RiskIndicator from '../components/RiskIndicator'


const Home = () => {
  const [showTextArea, setShowTextArea] = useState(false); // État pour gérer la visibilité
  const [comment, setComment] = useState(""); // État pour stocker le commentaire

  const handleSubmit = () => {
    alert(`Comment submitted: ${comment}`);
    setComment(""); // Réinitialise le commentaire après soumission
    setShowTextArea(false); // Cache la zone de texte après soumission
  };
  const personIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Pin-style icon with transparent background
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
      iconSize: [35, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
  });
  
  const [showPosts, setShowPosts] = useState(false);
  const [incidents, setIncidents] = useState([]); // État pour stocker les incidents
  const center = [31.7917, -7.0926]; // Centre par défaut pour la carte (Maroc)
  const redZoneCenter = [31.63, -8.0089]; // Exemple : centre pour une zone rouge (Marrakech)

  // Récupération des données depuis l'API JSON
  useEffect(() => {
    fetch("http://localhost:5000/incidents")
      .then((response) => response.json())
      .then((data) => setIncidents(data))
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  return (
    <Layout title="Live Map">
      <div style={{ position: "relative", height: "100vh" }}>
        {/* Carte en plein écran */}
        <MapContainer
  center={center}
  zoom={6}
  style={{ width: "100%", height: "100%" }}
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  />

  {/* <Marker position={center} />

  
  <Circle
    center={redZoneCenter}
    radius={20000}
    pathOptions={{ fillColor: "red", color: "red", fillOpacity: 0.3 }}
  /> */}

  {/* Marqueurs dynamiques pour les incidents */}
  {incidents.map((incident) => (
    
  (incident.latitude && incident.longitude) ? (
    <React.Fragment key={incident.id}>
      <Circle
                  center={[incident.latitude, incident.longitude]}
                  radius={25000} // Rayon en mètres
                  pathOptions={{
                    color: "red",
                    fillColor: "rgb(252, 7, 7)", // Couleur semi-transparente
                    fillOpacity: 0.5,
                  }}
                />
    <Marker
      key={incident.id}
      position={[incident.latitude, incident.longitude]}
      icon={personIcon} 
      // Position dynamique
    >
      <Popup>
  <div
    style={{
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "15px",
      maxWidth: "300px",
      fontFamily: "'Roboto', sans-serif",
    }}
  >
    {/* Titre de l'incident */}
    <h4
      style={{
        margin: "0 0 10px",
        fontSize: "18px",
        color: "#333",
        fontWeight: "bold",
      }}
    >
      {incident.subtype}
    </h4>

    {/* Description */}
    <p
      style={{
        margin: "0 0 10px",
        fontSize: "12px",
        color: "#555",
        lineHeight: "1.4",
      }}
    >
      {incident.description}
    </p>

    {/* Détails */}
    <small
      style={{
        display: "block",
        fontSize: "12px",
        color: "#777",
        marginBottom: "10px",
        // lineHeight: "1.5",
      }}
    >
      <strong>Lieu :</strong> {incident.location} <br/>
      
    </small>

    {/* Image */}
    <img
      src={`http://localhost:5000${incident.image}`}
      alt={incident.subtype}
      style={{
        width: "70%",
        borderRadius: "8px",
        marginBottom: "10px",
        objectFit: "cover",
      }}
    />

    {/* Boutons Share et Comment */}
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px" }}>
  <button
    style={{
      background: "none",
      color: "#666666",
      border: "none",
      padding: "5px 10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    }}
    onClick={() => alert(`Partager : ${incident.subtype}`)}
  >
    <i className="fas fa-share-alt" style={{ fontSize: "16px" }}></i> {/* Icône de partage */}
    Share
  </button>

  <div
    style={{
      width: "1px",
      height: "20px",
      backgroundColor: "lightgray",
      margin: "0 10px",
    }}
  ></div>

  <button
    style={{
      background: "none",
      color: "#666666",
      border: "none",
      padding: "5px 10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    }}
    onClick={() => alert(`Commenter : ${incident.subtype}`)}
  >
    <i className="fas fa-comment-alt" style={{ fontSize: "16px" }}></i> {/* Icône de commentaire */}
    Comment
  </button>
</div>

  </div>
</Popup>

    </Marker>
    </React.Fragment>
  ) : null
))}

</MapContainer>
<RiskIndicator/>

      {/* Ajouter l'Alerte Dynamique */}
      <AlertBox incidents={incidents} />

        {/* Bouton pour afficher/masquer les publications */}
        <button
          onClick={() => setShowPosts(!showPosts)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            zIndex: 1001,
            background: "#fff",
            border: "none",
            borderRadius: "50%",
            boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            fontSize: "20px", 
          }}
        >
          {showPosts ? "❌" : "📋"}
        </button>

        {/* Fenêtre des publications */}
        {showPosts && (
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "350px",
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              boxShadow: "-2px 0 5px rgba(0,0,0,0.3)",
              overflowY: "auto",
              zIndex: 1000,
              padding: "10px",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            
            {incidents.map((incident) => (
  <div
  key={incident.id}
  style={{
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "15px",
    padding: "10px",
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  }}
>
  {/* Avatar et nom de l'utilisateur */}
  <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
    <img
      src={`http://localhost:5000${incident.user.avatar}`}
      alt={incident.user.name}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        marginRight: "10px",
      }}
    />
    <div>
  <strong>{incident.user.name}</strong>
  <span style={{ display: 'block' , color: 'gray', fontSize: '0.9em'}}>
    {new Date(incident.date).toLocaleTimeString()}
  </span>
</div>

  </div>

  {/* Titre et description */}
  {/* <h4>{incident.subtype}</h4> */}
  <p>{incident.description}</p>
  <small>
    <strong>Lieu:</strong> {incident.location}
     {/* |{" "} */}
    {/* <strong>Date:</strong> {new Date(incident.date).toLocaleDateString('fr-FR')} {new Date(incident.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })} */}
    </small>

  {/* Image */}
  <img
    src={`http://localhost:5000${incident.image}`}
    alt={incident.subtype}
    style={{
      width: "100%",
      height: "auto",
      marginTop: "10px",
      borderRadius: "8px",
    }}
  />

  {/* Boutons Share et Comment */}
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px" }}>
  <button
    style={{
      background: "none",
      color: "#666666",
      border: "none",
      padding: "5px 10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    }}
    onClick={() => alert(`Partager : ${incident.subtype}`)}
  >
    <i className="fas fa-share-alt" style={{ fontSize: "16px" }}></i> {/* Icône de partage */}
    Share
  </button>

  <div
    style={{
      width: "1px",
      height: "20px",
      backgroundColor: "lightgray",
      margin: "0 10px",
    }}
  ></div>

  <button
    style={{
      background: "none",
      color: "#666666",
      border: "none",
      padding: "5px 10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    }}
    onClick={() => setShowTextArea(!showTextArea)} // Alterne la visibilité
  >
    <i className="fas fa-comment-alt" style={{ fontSize: "16px" }}></i> {/* Icône de commentaire */}
    Comment
  </button>
</div>
{showTextArea && (
        <div style={{ marginTop: "10px" }}>
          <textarea
            style={{
              width: "93%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            rows="3"
            placeholder="Write your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)} // Met à jour le commentaire
          />
          <button
            style={{
              marginTop: "5px",
              padding: "5px 10px",
              background: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={handleSubmit} // Gère la soumission
          >
            Submit
          </button>
        </div>
      )}
</div>

))}

          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
