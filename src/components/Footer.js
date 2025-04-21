import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleNavClick = () => {
   
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>MyWebsite</h3>
          <p>Your one-stop destination for all your needs.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/" onClick={handleNavClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavClick}>About</Link></li>
            <li><Link to="/contact" onClick={handleNavClick}>Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: info@mywebsite.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main St, Anytown, USA</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 