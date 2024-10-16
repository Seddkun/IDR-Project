import { Button } from '@mui/material';
import FileUpload from '../components/FileUpload';
import Navbar  from '../components/Navbar';
import React from 'react';


const MembersPortal = () => {
  return (
    <div>
      <h1>Bienvenido al Portal de Miembros</h1>
      <section>
        <h2>Tus datos guardados</h2>
        <p>Revisa tu progreso en las actividades educativas.</p>
        
      </section>
      <section>
        <h2>Notas personalizables</h2>
        <p>Toma y personaliza tus notas durante las clases. Usa etiquetas para organizarlas.</p>
        <div>
          <button>Crear nueva nota</button>
        </div>
      </section>
      <section>
        <h2>Tu progreso</h2>
        <p>Consulta cómo has avanzado en los programas de InspireDR.</p>
        
      </section>
    </div>
  );
};

export default MembersPortal;

