import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    const featuresSection = document.querySelector('.features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/about');
      window.scrollTo(0, 0);
    }
  };

  const handleContactUs = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MyWebsite</h1>
          <p>Discover amazing content and services that will change your life.</p>
          <button className="btn" onClick={handleLearnMore}>Learn More</button>
        </div>
      </section>
      
      <section className="section features" id="features">
        <h2>Our Features</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Amazing Design</h3>
            <p>Our websites are crafted with attention to detail and modern design principles.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast Performance</h3>
            <p>We ensure that every website we create loads quickly and performs efficiently.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Reliable</h3>
            <p>Security is our priority, ensuring your data and users are protected.</p>
          </div>
        </div>
      </section>
      
      <section className="section testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <p>"MyWebsite transformed our online presence. The results have been amazing!"</p>
            <h4>- John Doe, CEO</h4>
          </div>
          <div className="testimonial-card">
            <p>"We've seen a 200% increase in traffic since working with MyWebsite. Highly recommended!"</p>
            <h4>- Jane Smith, Marketing Director</h4>
          </div>
        </div>
      </section>
      
      <section className="section cta">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today to discuss your project needs.</p>
        <button className="btn" onClick={handleContactUs}>Contact Us</button>
      </section>
    </div>
  );
};

export default Home; 