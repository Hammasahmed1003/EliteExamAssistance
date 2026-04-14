import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="brand-mark" aria-label="Elite Exam Assistance home">
          <img src="/logo.jpeg" alt="" className="brand-mark__logo" />
          <span className="brand-mark__text">
            <strong>Elite Exam</strong>
            <span>Assistance</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/book-call" className="btn btn-accent btn-compact">
            Book a Strategy Call
          </Link>
        </nav>

        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className={`mobile-nav ${isOpen ? 'open' : ''}`} id="mobile-nav">
        <div className="mobile-nav-content">
          <p className="eyebrow">Support built around your score goals</p>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/book-call" className="btn btn-accent mobile-cta" onClick={() => setIsOpen(false)}>
            Start Your Plan <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
