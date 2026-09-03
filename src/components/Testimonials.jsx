import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Intrio transformed my apartment into a sanctuary. Their attention to detail and ability to understand my vision was remarkable.',
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Michael Chen',
    role: 'CEO, Tech Hub',
    content: 'The office design they created for us has significantly improved team morale and productivity. Highly professional team.',
    image: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Restaurateur',
    content: 'Every customer comments on the beautiful interior of our new restaurant. Intrio truly understands commercial space branding.',
    image: 'https://i.pravatar.cc/150?u=elena'
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <span className="testimonials-eyebrow">Testimonials</span>
          <h2 className="testimonials-title">Client Stories</h2>
          <div className="testimonials-divider"></div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <Quote className="testimonial-quote-icon" size={60} />
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "{t.content}"
                </p>
                <div className="testimonial-user">
                  <img src={t.image} alt={t.name} className="testimonial-avatar" />
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{t.name}</h4>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
