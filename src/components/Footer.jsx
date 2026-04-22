import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Phone } from 'lucide-react';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-panel footer-brand-panel">
          <Link to="/" className="brand-mark brand-mark-footer" aria-label="Elite Exam Assistance home">
            <img src="/logo.jpeg" alt="" className="brand-mark__logo brand-mark__logo-footer" />
            <span className="brand-mark__text">
              <strong>Elite Exam</strong>
              <span>Assistance</span>
            </span>
          </Link>
          <p className="footer-copy">
            Premium academic support for online courses, assignment planning, practical
            requirements, and certification preparation when deadlines are getting close.
          </p>
          <Link to="/services" className="footer-inline-link">
            View programs <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="footer-panel">
          <p className="footer-heading">Explore</p>
          <div className="footer-link-list">
            {quickLinks.map((link) => (
              <Link key={link.to} to={link.to} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-panel">
          <p className="footer-heading">Contact</p>
          <div className="footer-contact-list">
            <p>
              <MapPin size={16} />
              Houston, TX and online nationwide
            </p>
            <p>
              <Phone size={16} />
              +1 (346) 661-9978
            </p>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Elite Exam Assistance. Organized support for your next academic milestone.</p>
      </div>
    </footer>
  );
};

export default Footer;
