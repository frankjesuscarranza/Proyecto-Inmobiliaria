import "./navbar.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Nuestrospisos from "../../pages/Nuestrospisos";
import Serviciospremium from "../../pages/Serviciospremium";
import Contacto from "../../pages/Contacto";
function Navbar() {
  return (
    <Router>
      <nav className="stroke">
        <ul>
          <li>
            <Link to="/">Nuestros Pisos</Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Nuestrospisos />} />
        <Route path="/servicios" element={<Serviciospremium />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
