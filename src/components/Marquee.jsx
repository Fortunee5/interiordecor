import './Marquee.css';

const brands = [
  'LUXURY HOMES', 'MODERN ARCH', 'URBAN DESIGN', 'ELITE ESTATES', 'NOBLE DWELL', 'PURE VIBE', 'GRAND VISTA'
];

const Marquee = () => {
  return (
    <div className="marquee-section">
      <div className="marquee-content animate-marquee">
        {[...brands, ...brands].map((brand, i) => (
          <span 
            key={i} 
            className="marquee-item"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
