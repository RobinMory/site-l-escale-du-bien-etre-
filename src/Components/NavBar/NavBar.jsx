import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import "./NavBar.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="logo">
        L&apos;Escale du bien-être
      </Link>
      <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          Accueil
        </Link>
        <Link to="/tarif" className="nav-link" onClick={() => setMenuOpen(false)}>
          Tarif
        </Link>
        <Link to="/info" className="nav-link" onClick={() => setMenuOpen(false)}>
          Soins
        </Link>
        <Link to="/partenaire" className="nav-link" onClick={() => setMenuOpen(false)}>
          Partenaires
        </Link>
        <Link to="/plan" className="nav-link" onClick={() => setMenuOpen(false)}>
          Plan
        </Link>
        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
          A propos
        </Link>
        <a
          href="https://www.facebook.com/havet.sandrina"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            width="24"
            height="24"
            style={{ verticalAlign: "middle" }}
          />
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
