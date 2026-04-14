import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

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
            <span className="brand-mark__crest">EE</span>
            <span className="brand-mark__text">
              <strong>Elite Exam</strong>
              <span>Assistance</span>
            </span>
          </Link>
          <p className="footer-copy">
            Premium online course, assignment, and certification support for students who need
            a smarter plan, stronger confidence, and a result that opens the next door.
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
              (555) 123-4567
            </p>
            <p>
              <Mail size={16} />
              support@eliteexam.com
            </p>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Elite Exam Assistance. Personalized support, built for your next milestone.</p>
      </div>
    </footer>
  );
};

export default Footer;
