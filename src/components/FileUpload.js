// src/components/FileUpload.js
import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // Aquí puedes manejar la subida del archivo
      console.log(`Archivo seleccionado: ${selectedFile.name}`);
      alert(`Archivo ${selectedFile.name} subido con éxito.`);
    } else {
      alert('Por favor, selecciona un archivo antes de subirlo.');
    }
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Subir Archivo</button>
    </div>
  );
};

export default FileUpload;
