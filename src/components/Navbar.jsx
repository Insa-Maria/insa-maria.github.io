import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hideOnHero = isHome && !scrolled;

  return (
    <nav className="site-navbar" style={{
      borderBottom: "1px solid #eee",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: "#fff",
      opacity: hideOnHero ? 0 : 1,
      pointerEvents: hideOnHero ? "none" : "auto",
      transform: hideOnHero ? "translateY(-100%)" : "translateY(0)",
      transition: "opacity 0.3s, transform 0.3s"
    }}>
      <div className="container" style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        padding: "16px 24px"
      }}>
        <div>
          <Link to="/work">Work</Link>
        </div>

        <Link
          to="/"
          style={{
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase"
          }}
        >
          MARIA INSA
        </Link>

        <div style={{ textAlign: "right" }}>
          <Link to="/about" style={{ marginRight: "16px" }}>About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
