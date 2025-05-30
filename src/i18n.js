// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Enable Notifications": "Enable Notifications",
      "Enable Location Services": "Enable Location Services",
      "Enable Alert Sounds": "Enable Alert Sounds",
      "Theme": "Theme",
      "Language": "Language",
      "Settings": "Settings",
      "homepage": "homepage",
      "home": "Home",
  "report": "Report",
  "emergency_plans": "Emergency Plans",
  "weather": "Weather",
  "about": "About",
  "settings": "Settings",
  "logout": "Log out",
  "user_name": "EL HADCHI Wafaa",
  "need_help": "Need Help?",
  "contact_email": "contact-AlertHub@gmail.com",
  "connect_with_us": "Connect with us",
  "add_report": "Add a report +",
  "report_title": "Report Title",
  "incident_type": "Type of Incident",
  "description": "Description",
  "location": "Location",
  "loading": "Loading...",
  "submit_report": "Submit Report",
  "upload_photos_videos": "Upload Photos/Videos",
  "attach_file": "Attach file. File size of your documents should not exceed 10MB.",
  "file_size_error": "File size should not exceed 10MB.",
  "search_location": "Search location...",
  "five_day_forecast": "5-day Weather Forecast",
  "temperature_label": "Average Temperature (°C)",
  "humidity": "Humidity",
  "wind": "Wind",
  "loading_weather_data": "Loading weather data...",
  "geo_error": "Geolocation error",
  "geo_not_supported": "Geolocation not supported",
  "city_not_found": "City not found",
  "title": "About AlertHub",
  "welcome": "Welcome to AlertHub, the platform that ensures you stay ahead in times of emergencies. Our goal is simple: to provide reliable, real-time alerts to help you stay prepared, act fast, and recover stronger. With AlertHub, safety is just a click away.",
  "visionTitle": "Our Vision",
  "visionText": "To create a world where everyone has access to vital information during emergencies, fostering resilient communities and saving lives.",
  "teamTitle": "Meet the Team",
  "teamMember1Name": "Jane Doe",
  "teamMember1Role": "Founder & CEO",
  "teamMember2Name": "John Smith",
  "teamMember2Role": "CTO",
  "footerText": "Ready to learn more? Visit our Contact Us page or follow us on social media."
    }
  },
  fr: {
    translation: {
      "Enable Notifications": "Activer les notifications",
      "Enable Location Services": "Activer les services de localisation",
      "Enable Alert Sounds": "Activer les sons d'alerte",
      "Theme": "Thème",
      "Language": "Langue",
      "Settings": "Paramètres",
      "homepage": "page d'accueil",
      "home": "Accueil",
  "report": "Rapport",
  "emergency_plans": "Plans d'urgence",
  "weather": "Météo",
  "about": "À propos",
  "settings": "Paramètres",
  "logout": "Se déconnecter",
  "user_name": "EL HADCHI Wafaa",
  "need_help": "Besoin d'aide ?",
  "contact_email": "contact-AlertHub@gmail.com",
  "connect_with_us": "Connectez-vous avec nous",
  "add_report": "Ajouter un rapport +",
  "report_title": "Titre du rapport",
  "incident_type": "Type d'incident",
  "description": "Description",
  "location": "Emplacement",
  "loading": "Chargement...",
  "submit_report": "Soumettre le rapport",
  "upload_photos_videos": "Télécharger des photos/vidéos",
  "attach_file": "Joindre un fichier. La taille de vos documents ne doit pas dépasser 10 Mo.",
  "file_size_error": "La taille du fichier ne doit pas dépasser 10 Mo.",
  "search_location": "Rechercher une ville...",
  "five_day_forecast": "Prévisions météo sur 5 jours",
  "temperature_label": "Température Moyenne (°C)",
  "humidity": "Humidité",
  "wind": "Vent",
  "loading_weather_data": "Chargement des données météo...",
  "geo_error": "Erreur de géolocalisation",
  "geo_not_supported": "Géolocalisation non supportée",
  "city_not_found": "Ville introuvable",
  "title": "À propos d'AlertHub",
  "welcome": "Bienvenue sur AlertHub, la plateforme qui vous aide à rester en avance en cas d'urgence. Notre objectif est simple : fournir des alertes fiables et en temps réel pour vous aider à rester préparé, agir rapidement et vous rétablir plus fort. Avec AlertHub, la sécurité est à portée de clic.",
  "visionTitle": "Notre Vision",
  "visionText": "Créer un monde où chacun a accès à des informations vitales en cas d'urgence, favorisant des communautés résilientes et sauvant des vies.",
  "teamTitle": "Rencontrez l'équipe",
  "teamMember1Name": "Jane Doe",
  "teamMember1Role": "Fondatrice & PDG",
  "teamMember2Name": "John Smith",
  "teamMember2Role": "Directeur technique (CTO)",
  "footerText": "Prêt à en savoir plus ? Visitez notre page Contactez-nous ou suivez-nous sur les réseaux sociaux."
    }
  },
  es: {
    translation: {
      "Enable Notifications": "Habilitar notificaciones",
      "Enable Location Services": "Habilitar servicios de ubicación",
      "Enable Alert Sounds": "Habilitar sonidos de alerta",
      "Theme": "Tema",
      "Language": "Idioma",
      "Settings": "Configuración",
      "homepage": "página de inicio",
      "home": "Inicio",
  "report": "Informe",
  "emergency_plans": "Planes de Emergencia",
  "weather": "Clima",
  "about": "Acerca de",
  "settings": "Configuraciones",
  "logout": "Cerrar sesión",
  "user_name": "EL HADCHI Wafaa",
  "need_help": "¿Necesitas ayuda?",
  "contact_email": "contact-AlertHub@gmail.com",
  "connect_with_us": "Conéctate con nosotros",
  "add_report": "Añadir un informe +",
  "report_title": "Título del informe",
  "incident_type": "Tipo de incidente",
  "description": "Descripción",
  "location": "Ubicación",
  "loading": "Cargando...",
  "submit_report": "Enviar informe",
  "upload_photos_videos": "Subir fotos/videos",
  "attach_file": "Adjuntar archivo. El tamaño de sus documentos no debe exceder los 10 MB.",
  "file_size_error": "El tamaño del archivo no debe exceder los 10 MB.",
  "search_location": "Buscar ubicación...",
  "five_day_forecast": "Pronóstico del clima de 5 días",
  "temperature_label": "Temperatura promedio (°C)",
  "humidity": "Humedad",
  "wind": "Viento",
  "loading_weather_data": "Cargando datos del clima...",
  "geo_error": "Error de geolocalización",
  "geo_not_supported": "Geolocalización no soportada",
  "city_not_found": "Ciudad no encontrada",
  "title": "Acerca de AlertHub",
  "welcome": "Bienvenido a AlertHub, la plataforma que te asegura estar preparado en tiempos de emergencias. Nuestro objetivo es simple: proporcionar alertas confiables y en tiempo real para ayudarte a mantenerte preparado, actuar rápidamente y recuperarte más fuerte. Con AlertHub, la seguridad está a solo un clic de distancia.",
  "visionTitle": "Nuestra Visión",
  "visionText": "Crear un mundo donde todos tengan acceso a información vital durante emergencias, fomentando comunidades resilientes y salvando vidas.",
  "teamTitle": "Conoce al Equipo",
  "teamMember1Name": "Jane Doe",
  "teamMember1Role": "Fundadora & CEO",
  "teamMember2Name": "John Smith",
  "teamMember2Role": "CTO",
  "footerText": "¿Listo para saber más? Visita nuestra página de Contáctanos o síguenos en las redes sociales."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // langue par défaut
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
