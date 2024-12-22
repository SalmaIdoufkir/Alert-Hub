// src/components/IncidentList.js
import React, { useEffect, useState } from 'react';
import { getIncidents } from '../services/api';  // Correction du chemin
import IncidentCard from './IncidentCard'; // Correction du chemin

const IncidentList = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getIncidents();
      console.log('Fetched incidents:', data);  // Affiche les données récupérées
      setIncidents(data);  // Met à jour les incidents directement
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Emergency Incidents</h1>
      <div className="incident-list">
        {incidents && incidents.length > 0 ? (
          incidents.map((incident) => (
            <IncidentCard key={incident.id} incident={incident} />
          ))
        ) : (
          <p>No incidents to display</p>
        )}
      </div>
    </div>
  );
};

export default IncidentList;
