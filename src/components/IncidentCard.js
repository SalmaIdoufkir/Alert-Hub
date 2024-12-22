// src/components/IncidentCard.js
import React from 'react';

const IncidentCard = ({ incident }) => {
  return (
    <div className="incident-card">
      <h2>{incident.type} - {incident.location}</h2>
      <p>{incident.description}</p>
      <img src={incident.image} alt={incident.type} width="300" />
      <video width="300" controls>
        <source src={incident.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default IncidentCard;