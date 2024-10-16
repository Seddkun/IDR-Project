import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MembersPortal from './pages/MembersPortal';
import StaffPortal from './pages/StaffPortal';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<MembersPortal />} />
        <Route path="/staff" element={<StaffPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
