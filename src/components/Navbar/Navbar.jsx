import "./navbar.css";
function Navbar() {
  return (
    <nav className="stroke">
      <ul>
        <li>
          <a href="#">Pisos</a>
        </li>
        <li>
          <a href="#">Servicios</a>
        </li>
        <li>
          <a href="#">Publica tu Piso</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
