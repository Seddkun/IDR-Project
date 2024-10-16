import { auth, provider } from '../firebaseConfig';
import { signInWithPopup } from "firebase/auth";
import FileUpload from '../components/FileUpload';
import React from 'react';

const StaffPortal = () => {
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Manejar el login exitoso
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Bienvenido al Portal del Staff</h1>
      <section>
        <h2>Agenda</h2>
        <p>Gestiona tus eventos y actividades programadas.</p>
        
      </section>
      <section>
        <h2>Herramientas de productividad</h2>
        <p>Accede a herramientas para mejorar tu productividad y gestionar los programas.</p>
        <div>
          <button>Subir archivo</button>
        </div>
      </section>
      <section>
        <h2>Reportes</h2>
        <p>Genera reportes de asistencia y rendimiento de los miembros.</p>
        
      </section>
    </div>
  );
};



export default StaffPortal;
