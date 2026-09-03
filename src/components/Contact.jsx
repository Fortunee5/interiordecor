import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info-wrapper">
            <span className="contact-eyebrow">Contact Us</span>
            <h2 className="contact-title">Let's Start Your <br /><span className="italic">Design Journey</span></h2>
            <p className="contact-desc">
              Ready to transform your space? Get in touch with our expert team for 
              a consultation and let's create something extraordinary together.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="contact-detail-label">Phone</h4>
                  <p className="contact-detail-value">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="contact-detail-label">Email</h4>
                  <p className="contact-detail-value">hello@intriodesign.com</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="contact-detail-label">Studio</h4>
                  <p className="contact-detail-value">123 Design Avenue, Creative Quarter<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <select className="form-input">
                  <option>Residential Project</option>
                  <option>Commercial Project</option>
                  <option>Interior Styling</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea 
                  rows={4}
                  className="form-input form-textarea"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="form-submit-btn"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
