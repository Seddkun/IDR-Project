// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MembersPortal from './pages/MembersPortal';
import StaffPortal from './pages/StaffPortal';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/members" element={<MembersPortal />} />
                <Route path="/staff" element={<StaffPortal />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
