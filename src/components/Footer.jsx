import { Globe, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-section">
            <h3 className="footer-logo">INTRIO</h3>
            <p className="footer-tagline">
              We specialize in creating bespoke interiors that harmonize 
              luxury, comfort, and functionality for discerning clients worldwide.
            </p>
            <div className="footer-socials">
              {[Globe, Mail, Phone, MapPin].map((Icon, i) => (
                <a key={i} href="#" className="social-link">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              {['Home', 'About Us', 'Our Services', 'Recent Projects', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              {['Residential', 'Commercial', 'Styling', 'Planning', 'Consultation'].map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-newsletter-section">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="newsletter-text">Subscribe to get latest news and design tips.</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email" 
                className="newsletter-input"
              />
              <button className="newsletter-submit">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} INTRIO. All rights reserved. 
          </p>
          <div className="footer-legal">
            <a href="#" className="legal-link">Privacy Policy</a>
            <a href="#" className="legal-link">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="back-to-top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
