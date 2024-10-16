// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de tener un archivo CSS para estilos

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" exact activeClassName="active">Inicio</NavLink></li>
                <li><NavLink to="/members" activeClassName="active">Portal de Miembros</NavLink></li>
                <li><NavLink to="/staff" activeClassName="active">Portal de Staff</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
    