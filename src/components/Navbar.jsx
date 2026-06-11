import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🌸 Meghana
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/skills">Skills</Link>

        <Link to="/projects">Projects</Link>

        <Link to="/education">Education</Link>

        <Link to="/certificates">Certificates</Link>

        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;