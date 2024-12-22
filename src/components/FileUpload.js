import React, { useState } from "react";
import "../styles/FileUpload.css"; // Assurez-vous de créer ce fichier CSS
import { useTranslation } from "react-i18next"; // Importer useTranslation

const FileUpload = () => {
  const { t } = useTranslation(); // Initialisation de i18next pour la traduction
  const [fileName, setFileName] = useState("");
  const [fileSizeError, setFileSizeError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // Limite de 10MB
        setFileSizeError(t("file_size_error")); // Utilisation de la traduction pour l'erreur
        setFileName("");
      } else {
        setFileName(file.name);
        setFileSizeError("");
      }
    }
  };

  return (
    <div className="file-upload-container">
      <label htmlFor="file-upload" className="file-upload-label">
        <div className="upload-box">
          <div className="upload-icon">↑</div>
          <p>{fileName || t("upload_photos_videos")}</p> {/* Traduction pour le texte par défaut */}
        </div>
        <input
          type="file"
          id="file-upload"
          className="file-input"
          accept="image/*, video/*"
          onChange={handleFileChange}
        />
      </label>
      <p className="file-upload-note">
        {t("attach_file")} {/* Traduction pour la note */}
      </p>
      {fileSizeError && <p className="error-message">{fileSizeError}</p>} {/* Affichage du message d'erreur */}
    </div>
  );
};

export default FileUpload;
