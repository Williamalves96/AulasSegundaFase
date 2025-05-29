import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/loguin">Login</Link>
      <Link to="/home">Home</Link>
      <Link to="/contato">Contato</Link>
      <Link to="/generica">Genérica</Link>
      <Link to="/final">Final</Link>
      <Link to="/melancias">Melancias</Link>3
    </nav>
  );
}

export default Navbar;
