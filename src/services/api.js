// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/incidents';  // Assurez-vous que l'URL est correcte

export const getIncidents = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log('Data fetched:', response.data);  // Affiche les données dans la console
    return response.data;  // Renvoie directement les incidents sans passer par data.incidents
  } catch (error) {
    console.error('Error fetching incidents:', error);
    return [];  // Retourne un tableau vide en cas d'erreur
  }
};
